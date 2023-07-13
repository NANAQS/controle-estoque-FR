import { Button, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { InventoryTwoTone } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";
import { FieldValues } from "react-hook-form";
import React from "react";
import { ModalCustom } from "../components/ModalCustom";

type Props = {};

export default function SaidaScreen({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const data = [
    "Ord",
    "Num",
    "Nota",
    "Fornecedor",
    "Valor",
    "Desconto",
    "Acréscimo",
    "Total",
    "Emissão",
    "Entrada",
    "Cadastro",
  ];

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
          <CustomBarras routeName="saida" />
          <Typography variant="body1">
            <InventoryTwoTone color="primary" />
            Saídas no Estoque
          </Typography>
          <Button
            onClick={handleOpen}
            color="info"
            sx={{ width: "100%" }}
            variant="outlined"
          >
            Nova Saída
          </Button>
        </div>
        <CustomTable
          tableHeader={data}
          tableData={[
            [
              "0",
              "324",
              "32423432094234324",
              "Marcos",
              "12,23",
              "-3,23",
              "+2,00",
              "14,23",
              "23/05/2023",
              "12/04/2023",
              "DDDD",
            ],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
