import {
  Dashboard,
  Discount,
  FmdGood,
  Group,
  Home,
  Inventory,
  InventoryTwoTone,
  Person,
  ReceiptLong,
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
            },
          ],
        },
        {
          divider: "GERENCIAMENTO",
          item: [
            {
              icon: <Discount color="primary" />,
              text: "Produto",
            },
            {
              icon: <Dashboard color="primary" />,
              text: "Categorias",
            },
            {
              icon: <FmdGood color="primary" />,
              text: "Fornecedores",
            },
          ],
        },
        {
          divider: "MOVIMENTAÇÃO",
          item: [
            {
              icon: <Inventory color="primary" />,
              text: "Entrada",
            },
            {
              icon: <InventoryTwoTone color="primary" />,
              text: "Saída",
            },
          ],
        },

        {
          divider: "ADMINISTRAÇÃO",
          item: [
            {
              icon: <Group color="primary" />,
              text: "Usuários",
            },
            {
              icon: <ReceiptLong color="primary" />,
              text: "Logs de Atividades",
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
