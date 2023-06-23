import { Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { ReceiptLong } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";

type Props = {};

export default function LogScreen({}: Props) {
  return (
    <CustomDrawerDefault>
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
          <CustomBarras routeName="log" />
          <Typography variant="body1">
            <ReceiptLong color="primary" />
            Logs de Atividades
          </Typography>
        </div>
        <CustomTable
          tableHeader={[
            "Ordem",
            "Usuario",
            "Nivel Acesso",
            "Atividade",
            "Data",
          ]}
          tableData={[
            [
              "0",
              "Marcos",
              "Parcial",
              "Criou uma nova compra no carrinho",
              "23/05/2023",
            ],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
