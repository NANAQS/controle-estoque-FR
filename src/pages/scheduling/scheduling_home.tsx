import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/pt-br";
import { useState } from "react";
import { clientes } from "../../database/clients";
import { Process1 } from "../../components/scheduling_process_screens/process1";
import { SchedulingCreate } from "../../components/scheduling_create";
import { Process2 } from "../../components/scheduling_process_screens/process2";
import { Process3 } from "../../components/scheduling_process_screens/process3";
import { Scheduler } from "@aldabil/react-scheduler";
import moment from "moment";
import {
  DatePicker,
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import AddService from "../../components/scheduling_process_screens/process4";
import AppBarWithOptions from "../../components/AppBarWithOptions";
import { Navigation } from "@mui/icons-material";
import CustomModalEditor from "../../components/customModalEditor";

type Props = {};

const steps = [
  "Procura de funcionário",
  "Selecione uma data",
  "Selecione uma hora",
  "Selecione um serviço",
];

function SchedulingHome({}: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [screen1Value, setScreen1Value] = useState("");
  const [screen2Value, setScreen2Value] = useState("");
  const [screen3Value, setScreen3Value] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <div id="appbar" />
      <AppBarWithOptions />
      <Fab
        href="#appbar"
        variant="extended"
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
        }}
        color="primary"
        aria-label="voltar ao inicio"
      >
        <Navigation sx={{ mr: 1 }} />
        Voltar
      </Fab>
      <SchedulingCreate
        openDrawer={isDrawerOpen}
        activeStep={activeStep}
        value={[screen1Value, screen2Value]}
        screens={[
          <></>,
          <></>,
          <Process3
            date={moment(screen2Value)}
            onTimeSelected={(time) => {
              setScreen3Value(time);
              setActiveStep(3);
            }}
          />,
        ]}
        labels={steps}
        clickPerScreens={[
          {
            click() {
              if (screen1Value != "") {
                setActiveStep(1);
              }
            },
            label: ["Confirmar funcionário"],
          },
          {
            label: [],
          },
          {
            label: ["Confirmar Pedido", "Preencha o pedido"],
          },
        ]}
        handleCloseDrawer={handleCloseDrawer}
        disabled={screen1Value === ""}
      />
      <Box sx={{ marginTop: 10, marginRight: 10 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ marginBottom: 2, width: "90%" }}
            variant="outlined"
            onClick={handleOpenDrawer}
          >
            Criar Novo Agendamento
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: 300, flexDirection: "column", display: "flex" }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker label="Selecione uma data" sx={{ marginBottom: 3 }} />
              <Typography variant="overline" sx={{ fontSize: 15 }}>
                Funcionarios
              </Typography>
              <Box sx={{ width: 300, height: 300, overflowX: "scroll" }}>
                {clientes.map((item) => {
                  return (
                    <Box>
                      <ThemeProvider theme={createTheme({})}>
                        <ListItem
                          secondaryAction={
                            <Checkbox edge="end" checked={false} />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemAvatar>
                              <Avatar
                                alt={`Foto ${item.nome}`}
                                src={item.image}
                              />
                            </ListItemAvatar>
                            <ListItemText primary={item.nome} />
                          </ListItemButton>
                        </ListItem>
                      </ThemeProvider>
                    </Box>
                  );
                })}
              </Box>
            </LocalizationProvider>
          </Box>
          <ThemeProvider theme={createTheme({})}>
            <Scheduler
              height={400}
              view="week"
              week={{
                weekDays: [0, 1, 2, 3, 4, 5],
                weekStartOn: 6,
                startHour: 9,
                endHour: 17,
                step: 30,
                navigation: true,
                disableGoToDay: false,
              }}
              customEditor={(props) => <CustomModalEditor props={props} />}
              day={{
                startHour: 9,
                endHour: 17,
                step: 30,
                navigation: true,
              }}
              events={[
                {
                  event_id: 1,
                  title: "Event 1",
                  start: new Date("2021/5/2 09:30"),
                  end: new Date("2021/5/2 10:30"),
                },
                {
                  event_id: 2,
                  title: "Event 2",
                  start: new Date("2021/5/4 10:00"),
                  end: new Date("2021/5/4 11:00"),
                },
              ]}
            />
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
}

export default SchedulingHome;
