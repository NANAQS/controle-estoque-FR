import React from "react";
import { AppBar, Toolbar, Button, Box, Avatar } from "@mui/material";
import {
  Assessment,
  ArrowBack,
  AttachMoney,
  Group,
  ShoppingBag,
  Today,
} from "@mui/icons-material";

interface IMenu {}

interface IProps {}

const AppBarWithOptions: React.FC<IProps> = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src={"/public/vite.svg"} />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button color="inherit" variant="outlined">
            <ArrowBack />
            Voltar para Estoque
          </Button>
          <Box sx={{ width: 50 }} />
          <Avatar
            alt="Usuario"
            src="https://dummyimage.com/300x300.png?text=Foto"
          />
        </Box>
      </Toolbar>
      <Toolbar>
        <Button color="inherit">
          <Today sx={{ marginRight: 1 }} />
          Agenda
        </Button>
        <Button color="inherit">
          <AttachMoney sx={{ marginRight: 1 }} />
          Financeiro
        </Button>
        <Button color="inherit">
          <ShoppingBag sx={{ marginRight: 1 }} />
          Estoque
        </Button>
        <Button color="inherit">
          <Group sx={{ marginRight: 1 }} />
          Clientes
        </Button>
        <Button color="inherit">
          <Assessment sx={{ marginRight: 1 }} />
          Relatorios
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWithOptions;
