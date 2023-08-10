import { Box, Fab, ThemeProvider, createTheme } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/pt-br";
import { useRef, useState } from "react";
import { SchedulingCreate } from "../../components/scheduling_create";
import { Scheduler } from "@aldabil/react-scheduler";
import AppBarWithOptions from "../../components/AppBarWithOptions";
import { Navigation } from "@mui/icons-material";
import { EVENTS, RESOURCES } from "../../database/agendamento";
import CustomModalEditor from "../../components/customModalEditor";
import { SchedulerRef } from "@aldabil/react-scheduler/types";

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

  const calendarRef = useRef<SchedulerRef>(null);

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
        screens={[<></>, <></>]}
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
        <ThemeProvider theme={createTheme({})}>
          <Scheduler
            events={EVENTS}
            resources={RESOURCES}
            ref={calendarRef}
            resourceFields={{
              idField: "admin_id",
              textField: "title",
              subTextField: "mobile",
              avatarField: "title",
              colorField: "color",
            }}
            resourceViewMode={"tabs"}
            customEditor={(prop) => <CustomModalEditor props={prop} />}
          />
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default SchedulingHome;
