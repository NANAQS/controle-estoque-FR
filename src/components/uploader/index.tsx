import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import style from "./styles";

interface FileWithPreview extends File {
  preview: string;
}

interface Props {
  setPhotos?: React.Dispatch<FileWithPreview[]>;
}

const Previews: React.FC<Props> = ({ setPhotos }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const data = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setPhotos!(data);
      setFiles(data);
    },
  });

  const thumbs = files.map((file) => (
    <div style={style.thumb} key={file.name}>
      <div style={style.thumbInner}>
        <img src={file.preview} style={style.img} />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {thumbs[0] == null ? (
          <p>Drag 'n' drop some files here, or click to select files</p>
        ) : null}
      </div>
      <aside style={style.thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default Previews;
