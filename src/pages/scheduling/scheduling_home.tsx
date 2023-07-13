import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import SchedulingDrawer from "../../components/Scheduling_customDefaultDrawer";

moment.locale("pt-BR");
const localizer = momentLocalizer(moment);
type Props = {};

const theme = createTheme({});

function SchedulingHome({}: Props) {
  const events = [
    {
      title: "Abertura de Evento Comunitario",
      allDay: true,
      start: new Date(2023, 7, 0),
      end: new Date(2023, 7, 1),
    },
    {
      title: "Oferta corte cabelo",
      start: new Date(2023, 7, 7),
      end: new Date(2023, 7, 10),
    },

    {
      title: "Evento Interno da empresa",
      start: new Date(2023, 7, 13, 0, 0, 0),
      end: new Date(2023, 7, 20, 0, 0, 0),
    },

    {
      title: "Conferencia com Funcionarios",
      start: new Date(2023, 10, 6, 0, 0, 0),
      end: new Date(2023, 10, 13, 0, 0, 0),
    },

    {
      title: "Reuniao",
      start: new Date(2023, 7, 9, 0, 0, 0),
      end: new Date(2023, 7, 9, 0, 0, 0),
    },
    {
      title: "Conference",
      start: new Date(2023, 7, 11),
      end: new Date(2023, 7, 13),
      desc: "Big conference for important people",
    },
    {
      title: "Chamada com fornecedors",
      start: new Date(2023, 7, 12, 10, 30, 0, 0),
      end: new Date(2023, 7, 12, 12, 30, 0, 0),
      desc: "Apresentacao de propostas para fornecedores externos",
    },
  ];

  return (
    <SchedulingDrawer>
      <Box sx={{ marginTop: 10 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Box>
    </SchedulingDrawer>
  );
}

export default SchedulingHome;
