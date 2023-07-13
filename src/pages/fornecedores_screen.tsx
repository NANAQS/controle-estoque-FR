import { Button, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { FmdGood } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";
import { FieldValues } from "react-hook-form";
import MyDropzone from "../components/uploader";
import { ModalCustom } from "../components/ModalCustom";
import React from "react";

type Props = {};

interface FileWithPreview extends File {
  preview: string;
}

export default function FornecedoresScreen({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [photos, setPhotos] = React.useState<FileWithPreview[]>();
  const data = [
    "Foto",
    "Ord",
    "Codigo",
    "Fantasia",
    "Cidade",
    "Estado",
    "Razão Social",
    "CPF/CNPJ",
    "Data Cadastro",
  ];

  const dataModal = {
    headers: data,
    options: [<MyDropzone setPhotos={setPhotos} />],
  };

  const onSubmit = (values: FieldValues) => {
    setOpen(false);
  };
  return (
    <CustomDrawerDefault>
      <ModalCustom dataModel={dataModal} onSubmit={onSubmit} open={open} />
      <div
        style={{
          padding: 10,
          marginTop: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <CustomBarras routeName="fornecedores" />
          <Typography variant="body1">
            <FmdGood color="primary" />
            Fornecedores
          </Typography>
          <Button
            onClick={handleOpen}
            color="info"
            sx={{ width: "100%" }}
            variant="outlined"
          >
            Novo Fornecedor
          </Button>
        </div>
        <CustomTable
          tableHeader={data}
          tableData={[
            [
              <img
                width="50"
                src="https://images.unsplash.com/photo-1524952249965-023a2a31663d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
              />,
              "1",
              "235467",
              "Bruxinha",
              "Ponta Grossa",
              "Paraná",
              "Ser Comunista",
              "124.245.223-54",
              "23/03/2023",
            ],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
