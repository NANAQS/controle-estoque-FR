import * as React from "react";
import CustomDrawer from "../components/drawer";
import { Person } from "@mui/icons-material";
import { AccountBox } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import PaperCustom from "../components/customCard";

export default function HomeScreen() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <CustomDrawer
      menu={[
        {
          divider: "GERENCIAMENTO",
          icon: <AccountBox color="primary" />,
          text: "Inbox",
        },
        {
          divider: "MOVIMENTAÇÃO",
          icon: <AccountBox color="primary" />,
          text: "Inbox",
        },
      ]}
      handleDrawerClose={handleDrawerClose}
      handleDrawerOpen={handleDrawerOpen}
      open={open}
      left={
        <div style={{ display: "inline-flex" }}>
          <p style={{ margin: 2 }}>
            <Typography variant="caption" display="block">
              Voce está logado como <strong>admin</strong>
            </Typography>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Person color="primary" />
          </div>
        </div>
      }
    >
      <h1>kkk</h1>
      <Grid container spacing={2}>
        <PaperCustom
          color="#e63e32"
          titulo="0 Produtos Cadastrados"
          subtitulo="Items no estoque"
          tituloBotao="Ver Relação De Produtos"
        />

        <PaperCustom
          titulo="0 Produtos Com Estoque"
          subtitulo="ZERADO"
          color="#32e689"
          tituloBotao="Ver Relação De Estoque Zerado"
        />
        <PaperCustom
          titulo="0 Produtos Com Estoque"
          subtitulo="MINIMO"
          color="#326be6"
          tituloBotao="Ver Relação De Estoque Minimo"
        />
        <PaperCustom
          varient
          titulo="Investimento: R$0,00"
          subtitulo="Retorno Previsto"
          color="#f27e30"
          tituloBotao="Margem de Lucro: 0,00%"
        />
      </Grid>
    </CustomDrawer>
  );
}
