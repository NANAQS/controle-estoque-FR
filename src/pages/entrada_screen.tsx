import { Button, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { Inventory } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";

type Props = {};

export default function EntradaScreen({}: Props) {
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
          <CustomBarras routeName="entrada" />
          <Typography variant="body1">
            <Inventory color="primary" />
            Entradas no Estoque
          </Typography>
          <Button color="info" sx={{ width: "100%" }} variant="outlined">
            Nova Entrada
          </Button>
        </div>
        <CustomTable
          tableHeader={[
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
          ]}
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
