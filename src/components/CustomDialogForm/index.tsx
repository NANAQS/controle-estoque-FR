import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface Data {
  id: number;
  name: string;
  inputType?: React.HTMLInputTypeAttribute;
}

interface Props {
  data: Data[];
}

const MyDialog: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(true);
  const [dataLocal, setDataLocal] = useState<Data[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddData = () => {
    if (inputValue.trim() !== "") {
      const newId = dataLocal.length + 1;
      const newData: Data = {
        id: newId,
        name: inputValue,
      };
      setDataLocal((prevData) => [...prevData, newData]);
      setInputValue("");
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Data</DialogTitle>
        <DialogContent>
          <TextField
            type={data[0]?.inputType ?? "text"}
            label="Data"
            value={inputValue}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleAddData}>
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyDialog;
