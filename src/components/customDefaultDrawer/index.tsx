import {
  AccessAlarm,
  Dashboard,
  Discount,
  FmdGood,
  Group,
  Home,
  Inventory,
  InventoryTwoTone,
  NotificationAdd,
  Person,
  ReceiptLong,
  ShoppingCart,
} from "@mui/icons-material";
import CustomDrawer from "../drawer";
import { Typography } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function CustomDrawerDefault({ children }: Props) {
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
          divider: "",
          item: [
            {
              icon: <Home color="primary" />,
              text: "Tela Inicial",
              href: "/",
            },
            {
              icon: <ShoppingCart color="primary" />,
              text: "Caixa",
              href: "/caixa",
            },
          ],
        },
        {
          divider: "GERENCIAMENTO",
          item: [
            {
              icon: <Discount color="primary" />,
              text: "Produto",
              href: "/produtos",
            },
            {
              icon: <Dashboard color="primary" />,
              text: "Categorias",
              href: "/categorias",
            },
            {
              icon: <FmdGood color="primary" />,
              text: "Fornecedores",
              href: "/fornecedores",
            },
          ],
        },
        {
          divider: "MOVIMENTAÇÃO",
          item: [
            {
              icon: <Inventory color="primary" />,
              text: "Entrada",
              href: "/entrada",
            },
            {
              icon: <InventoryTwoTone color="primary" />,
              text: "Saída",
              href: "/saida",
            },
          ],
        },

        {
          divider: "ADMINISTRAÇÃO",
          item: [
            {
              icon: <Group color="primary" />,
              text: "Usuários",
              href: "/usuarios",
            },
            {
              icon: <ReceiptLong color="primary" />,
              text: "Logs de Atividades",
              href: "/log",
            },
          ],
        },
        {
          divider: "AGENDAMENTO",
          item: [
            {
              icon: <AccessAlarm color="primary" />,
              text: "Agendamento",
              href: "/agendamento/home",
            },
            {
              icon: <NotificationAdd color="primary" />,
              text: "Novo Agendamento",
              href: "/produtos",
            },
          ],
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
      {children}
    </CustomDrawer>
  );
}

export default CustomDrawerDefault;
