import {
  Box,
  Button
} from "@mui/material";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import SchedulingDrawer from "../../components/Scheduling_customDefaultDrawer";
import "moment/locale/pt-br";
import { database } from "../../database/agendamento";
import { useState } from "react";
import { clientes } from "../../database/clients";
import { Process1 } from "../../components/scheduling_process_screens/process1";
import { SchedulingCreate } from "../../components/scheduling_create";
import { Process2 } from "../../components/scheduling_process_screens/process2";
import { Process3 } from "../../components/scheduling_process_screens/process3";
import format from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import ptBR from 'date-fns/locale/pt-BR';
import moment from "moment";

type Props = {};

const locales = {
  "pt-BR": ptBR
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const defaultMessages = {
  date: "Data",
  time: "Hora",
  event: "Evento",
  allDay: "Dia Todo",
  week: "Semana",
  work_week: "Dias Úteis",
  day: "Dia",
  month: "Mês",
  previous: "Anterior",
  next: "Próximo",
  yesterday: "Ontem",
  tomorrow: "Amanhã",
  today: "Hoje",
  agenda: "Agenda",
  noEventsInRange: "Não há eventos nesse intervalo.",
  showMore: (total: any) => `+${total} mais`,
};

const steps = [
  "Procura de funcionário",
  "Selecione uma data",
  "Selecione uma hora",
  "Selecione um serviço",
];

function SchedulingHome({ }: Props) {
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

  const handleSlotSelected = () => {
    handleOpenDrawer();
  };

  return (
    <>
      <SchedulingCreate
        openDrawer={isDrawerOpen}
        activeStep={activeStep}
        value={[screen1Value, screen2Value]}
        screens={[
          <Process1 clientes={clientes} setValue={setScreen1Value} />,
          <Process2
            onAccept={() => {
              setActiveStep(2);
            }}
          />,
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
      <SchedulingDrawer
      >
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
          <Calendar
            localizer={localizer}
            messages={defaultMessages}
            culture='pt-BR'
            events={database}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectSlot={handleSlotSelected}
            selectable="ignoreEvents"
          />
        </Box>
      </SchedulingDrawer>
    </>
  );
}

export default SchedulingHome;
