import { SchedulerHelpers } from "@aldabil/react-scheduler/types";
import { Box, Button, List, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { Process1 } from "../scheduling_process_screens/process1";
import { clientes } from "../../database/clients";
import { Process2 } from "../scheduling_process_screens/process2";
import moment, { Moment } from "moment";
import { Process3 } from "../scheduling_process_screens/process3";
import { services } from "../../database/services";

type Props = {
  props: SchedulerHelpers;
};
const steps = [
  "Procura de funcionário",
  "Selecione uma data e horario",
  "Selecione um serviço",
];

const stepsButton = ["Criar novo cliente", "NULL", "Criar novo serviço"];

function index({ props }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [infos1, setInfos1] = React.useState("");
  const [infos2, setInfos2] = React.useState<string>("");
  const [infos3, setInfos3] = React.useState("");
  const onderSetter = [setInfos1, setInfos2, setInfos3];
  const orderInfos = [infos1, infos2, infos3];
  const event = props.edited;

  const [date1, setDate1] = React.useState<Moment>(
    moment(props.state.start.value)
  );
  const [date2, setDate2] = React.useState<Moment>();

  React.useEffect(() => {
    if (date1 != undefined && date2 != undefined) {
      console.log(date1.isBefore(date2));
      if (date1.isBefore(date2)) {
        const dateFormatedInit = date1.format("YYYY/M/D HH:mm");
        const dateFormatedEnd = date2.format("YYYY/M/D HH:mm");
        setInfos2(`${dateFormatedInit}|${dateFormatedEnd}`);
      } else {
        alert("Data errada");
      }
    }
  }, [date2]);

  const screensPerStep = [
    <Process1 clientes={clientes} setValue={onderSetter[activeStep]} />,
    <Process2
      onAcceptInicio={(m) => {
        if (m != null) {
          setDate1(m);
        }
      }}
      defaultDateInit={props.state.start.value}
      onAcceptTermino={(m) => {
        if (m != null) {
          setDate2(m);
        }
      }}
    />,
    <Process3 services={services} setValue={onderSetter[activeStep]} />,
  ];
  return (
    <List sx={{ padding: 3 }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: 5 }}>
        <Step>
          <StepLabel>{steps[activeStep]}</StepLabel>
        </Step>
      </Stepper>
      {screensPerStep[activeStep]}
      <Button
        sx={{ width: "100%", marginTop: 4 }}
        variant={orderInfos[activeStep] == "" ? "contained" : "outlined"}
        onClick={() => {
          if (activeStep == 2) {
            props.onConfirm(
              {
                event_id: 1,
                start: date1!.toDate(),
                end: date2!.toDate(),
                title: infos1,
              },
              event ? "edit" : "create"
            );
            props.close();
          }
          if (orderInfos[activeStep] != "") {
            setActiveStep((s) => s + 1);
          }
        }}
      >
        {orderInfos[activeStep] == ""
          ? stepsButton[activeStep] == "NULL"
            ? "Preencha a informaçao"
            : stepsButton[activeStep]
          : "Proximo"}
      </Button>
      {activeStep > 0 ? (
        <Button sx={{ width: "100%", marginTop: 2 }} variant="outlined">
          Voltar
        </Button>
      ) : (
        <></>
      )}
    </List>
  );
}

export default index;
