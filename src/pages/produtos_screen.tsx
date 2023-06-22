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
              {
                src: "https://i.dummyjson.com/data/products/1/4.jpg",
                alt: "João",
              },
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
            [
              {
                src: "https://i.dummyjson.com/data/products/2/4.jpg",
                alt: "Maria",
              },
              "30",
              "Samsung",
              "Galaxy S21",
              "Eletronicos",
              "8",
              "Fisica",
              "Loja aleatoria",
              "10%",
              "150",
              "300",
              "Samsung Corp",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/3/4.jpg",
                alt: "Pedro",
              },
              "35",
              "Xiaomi",
              "Redmi Note 10",
              "Eletronicos",
              "6",
              "Fisica",
              "Loja aleatoria",
              "12%",
              "80",
              "200",
              "Xiaomi Inc",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/4/4.jpg",
                alt: "Ana",
              },
              "28",
              "Sony",
              "PlayStation 5",
              "Eletronicos",
              "4",
              "Fisica",
              "Loja aleatoria",
              "20%",
              "200",
              "500",
              "Sony Corporation",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/5/4.jpg",
                alt: "José",
              },
              "33",
              "Lenovo",
              "ThinkPad X1 Carbon",
              "Computadores",
              "12",
              "Fisica",
              "Loja aleatoria",
              "18%",
              "90",
              "250",
              "Lenovo Group",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/6/4.jpg",
                alt: "Laura",
              },
              "31",
              "Nike",
              "Air Max 90",
              "Calçados",
              "9",
              "Fisica",
              "Loja aleatoria",
              "25%",
              "300",
              "600",
              "Nike Inc",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/7/4.jpg",
                alt: "Rafael",
              },
              "29",
              "Adidas",
              "Superstar",
              "Calçados",
              "11",
              "Fisica",
              "Loja aleatoria",
              "22%",
              "120",
              "350",
              "Adidas AG",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/8/4.jpg",
                alt: "Carolina",
              },
              "27",
              "Samsung",
              "QLED TV",
              "Eletronicos",
              "5",
              "Fisica",
              "Loja aleatoria",
              "17%",
              "80",
              "300",
              "Samsung Corp",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/9/4.jpg",
                alt: "Fernando",
              },
              "32",
              "LG",
              "LG Gram",
              "Computadores",
              "7",
              "Fisica",
              "Loja aleatoria",
              "14%",
              "70",
              "200",
              "LG Electronics",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/10/4.jpg",
                alt: "Mariana",
              },
              "26",
              "Apple",
              "MacBook Pro",
              "Computadores",
              "3",
              "Fisica",
              "Loja aleatoria",
              "30%",
              "150",
              "400",
              "Apple CO",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/11/4.jpg",
                alt: "Rodrigo",
              },
              "34",
              "Sony",
              "BRAVIA TV",
              "Eletronicos",
              "4",
              "Fisica",
              "Loja aleatoria",
              "16%",
              "100",
              "350",
              "Sony Corporation",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/12/4.jpg",
                alt: "Isabela",
              },
              "30",
              "Nike",
              "Air Jordan 1",
              "Calçados",
              "10",
              "Fisica",
              "Loja aleatoria",
              "20%",
              "250",
              "500",
              "Nike Inc",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/13/4.jpg",
                alt: "Gustavo",
              },
              "29",
              "Adidas",
              "Ultraboost",
              "Calçados",
              "9",
              "Fisica",
              "Loja aleatoria",
              "18%",
              "150",
              "400",
              "Adidas AG",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/14/4.jpg",
                alt: "Luiza",
              },
              "31",
              "Samsung",
              "Galaxy Watch",
              "Eletronicos",
              "6",
              "Fisica",
              "Loja aleatoria",
              "15%",
              "120",
              "300",
              "Samsung Corp",
            ],
            [
              {
                src: "https://i.dummyjson.com/data/products/15/4.jpg",
                alt: "Gabriel",
              },
              "27",
              "Apple",
              "AirPods Pro",
              "Acessórios",
              "8",
              "Fisica",
              "Loja aleatoria",
              "10%",
              "80",
              "200",
              "Apple CO",
            ],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
