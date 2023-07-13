import { Button, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { Dashboard } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";
import { ModalCustom } from "../components/ModalCustom";
import React from "react";
import { FieldValues } from "react-hook-form";

type Props = {};

export default function CategoriasScreen({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const data = ["Ordem", "Codigo", "Nome", "Data Cadastro"];

  const dataModal = {
    headers: data,
    options: [],
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
          <CustomBarras routeName="categorias" />
          <Typography variant="body1">
            <Dashboard color="primary" />
            Categoria de Produtos
          </Typography>
          <Button
            onClick={handleOpen}
            color="info"
            sx={{ width: "100%" }}
            variant="outlined"
          >
            Nova Categoria
          </Button>
        </div>
        <CustomTable
          tableHeader={data}
          tableData={[
            ["0", "34234323", "I Phone", "23/05/2023"],
            ["1", "43423423", "Motorola", "23/04/2023"],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
