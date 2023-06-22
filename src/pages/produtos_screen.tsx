import { Button, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { Discount } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";

type Props = {};

export default function ProdutosScreen({}: Props) {
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
          <CustomBarras routeName="produtos" />
          <Typography variant="body1">
            <Discount color="primary" />
            Produtos
          </Typography>
          <Button color="info" sx={{ width: "100%" }} variant="outlined">
            Novo Produto
          </Button>
        </div>
        <CustomTable
          tableHeader={[
            "Foto",
            "Ord",
            "Ref.",
            "Nome",
            "Categoria",
            "Un",
            "Compra",
            "Venda",
            "Lucro",
            "Estoque",
            "Est. Min.",
            "Cadastro",
          ]}
          tableData={[
            [
              <img
                width="50"
                src="https://st3.depositphotos.com/2234329/16628/i/450/depositphotos_166282680-stock-photo-new-modern-frameless-smartphone-mockup.jpg"
              />,
              "25",
              "Apple",
              "I phone 15",
              "Eletronicos",
              "10",
              "Fisica",
              "Loja aleatoria",
              "15%",
              "100",
              "400",
              "Apple CO",
            ],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
