import {
  Autocomplete,
  Box,
  Button,
  Drawer,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Step,
  StepLabel,
  Stepper,
  TextField,
  darken,
  lighten,
  styled,
} from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import SchedulingDrawer from "../../components/Scheduling_customDefaultDrawer";
import "moment/locale/br";
import moment from "moment";
import { database } from "../../database/agendamento";
import { useState } from "react";
import { clientes } from "../../database/clients";
import { Process1 } from "../../components/scheduling_process_screens/process1";
import { SchedulingCreate } from "../../components/scheduling_create";
import { Process2 } from "../../components/scheduling_process_screens/process2";

const localizer = momentLocalizer(moment);
type Props = {};

const defaultMessages = {
  date: "Data",
  time: "Hora",
  event: "Evento",
  allDay: "Dia Todo",
  week: "Semana",
  work_week: "Eventos",
  day: "Dia",
  month: "Mês",
  previous: "Anterior",
  next: "Próximo",
  yesterday: "Ontem",
  tomorrow: "Amanhã",
  today: "Hoje",
  agenda: "Agenda",
  noEventsInRange: "Não há eventos no período.",
  showMore: function showMore(total: any) {
    return "+" + total + " mais";
  },
};

const steps = [
  "Procura de clientes cadastrados",
  "Selecione uma data",
  "Selecione um serviço",
];

function SchedulingHome({}: Props) {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [screen1Value, setScreen1Value] = useState("");
  const [screen2Value, setScreen2Value] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <SchedulingCreate
        openDrawer={openDrawer}
        activeStep={activeStep}
        value={[screen1Value, screen2Value]}
        screens={[
          <Process1 clientes={clientes} setValue={setScreen1Value} />,
          <Process2
            onAccept={(value) => {
              setActiveStep(2);
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
            label: ["Confirmar Cliente", "Cadastrar novo cliente"],
          },
          {
            label: [],
          },
          {
            label: ["Confirmar Pedido", "Preencha o pedido"],
          },
        ]}
      />
      <SchedulingDrawer>
        <Box sx={{ marginTop: 10 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button sx={{ marginBottom: 2, width: "90%" }} variant="outlined">
              Criar Novo Agendamento
            </Button>
          </Box>
          <Calendar
            messages={defaultMessages}
            formats={{
              agendaDateFormat: "DD/MM ddd",
              weekdayFormat: "dddd",
            }}
            localizer={localizer}
            events={database}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </Box>
      </SchedulingDrawer>
    </>
  );
}

export default SchedulingHome;
