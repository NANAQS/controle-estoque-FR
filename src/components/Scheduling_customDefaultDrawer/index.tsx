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
  Today,
  WorkHistory,
} from "@mui/icons-material";
import CustomDrawer, { menu2 } from "../drawer";
import { Typography } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  double?: menu2[];
};

function CustomDrawerDefault({ children, double }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <CustomDrawer
      double={double}
      menu={[
        {
          divider: "",
          item: [
            {
              icon: <Home color="primary" />,
              text: "Tela Inicial",
              href: "/agendamento/home",
            },
          ],
        },
        {
          divider: "GERENCIAMENTO",
          item: [
            {
              icon: <WorkHistory color="primary" />,
              text: "Horarios",
              href: "/agendamento/horarios",
            },
            {
              icon: <Today color="primary" />,
              text: "Agenda",
              href: "/agendamento/agendar",
            },
            {
              icon: <FmdGood color="primary" />,
              text: "Fornecedores",
              href: "/agendamento/home",
            },
          ],
        },
        {
          divider: "MOVIMENTAÇÃO",
          item: [
            {
              icon: <Inventory color="primary" />,
              text: "Entrada",
              href: "/agendamento/home",
            },
            {
              icon: <InventoryTwoTone color="primary" />,
              text: "Saída",
              href: "/agendamento/home",
            },
          ],
        },

        {
          divider: "ADMINISTRAÇÃO",
          item: [
            {
              icon: <Group color="primary" />,
              text: "Usuários",
              href: "/agendamento/home",
            },
            {
              icon: <ReceiptLong color="primary" />,
              text: "Logs de Atividades",
              href: "/agendamento/home",
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
              href: "/agendamento/home",
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
