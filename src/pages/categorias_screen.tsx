import { Button, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { Dashboard } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";

type Props = {};

export default function CategoriasScreen({}: Props) {
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
          <CustomBarras routeName="categorias" />
          <Typography variant="body1">
            <Dashboard color="primary" />
            Categoria de Produtos
          </Typography>
          <Button color="info" sx={{ width: "100%" }} variant="outlined">
            Nova Categoria
          </Button>
        </div>
        <CustomTable
          tableHeader={["Ordem", "Codigo", "Nome", "Data Cadastro"]}
          tableData={[
            ["0", "34234323", "I Phone", "23/05/2023"],
            ["1", "43423423", "Motorola", "23/04/2023"],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
