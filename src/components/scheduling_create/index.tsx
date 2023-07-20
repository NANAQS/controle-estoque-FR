import { Button, Drawer, List, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

type Props = {
  disabled: boolean | undefined;
  openDrawer: boolean;
  handleCloseDrawer: () => void;
  activeStep: number;
  value: string[];
  labels: string[];
  screens: JSX.Element[];
  clickPerScreens: {
    click?: () => void;
    label: string[];
    disabled?: boolean;
  }[];
};

export const SchedulingCreate = (props: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth > 1032);


  return (
    <Drawer
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      anchor={windowWidth ? "right" : undefined}
      open={props.openDrawer}
    >
      <List sx={{ marginTop: 10 }}>
        <Stepper activeStep={props.activeStep}>
          <Step>
            <StepLabel>{props.labels[props.activeStep]}</StepLabel>
          </Step>
        </Stepper>
        {props.screens[props.activeStep]}
      </List>
      {props.clickPerScreens[props.activeStep]?.click != null ? (
        <Button
          sx={{ margin: 1 }}
          onClick={props.clickPerScreens[props.activeStep]?.click}
          disabled={props.value[props.activeStep] == "" && props.activeStep == 0}
          variant={
            props.value[props.activeStep] != "" ? "contained" : "outlined"
          }
        >
          {props.clickPerScreens[props.activeStep].label[0]}
        </Button>
      ) : (
        <></>
      )}
      <Button onClick={props.handleCloseDrawer}>Fechar</Button>
    </Drawer>
  );
};
