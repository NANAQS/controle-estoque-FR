import { Box, ListItem } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  MobileDateTimePicker,
  MobileTimePicker,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/locale/pt-br";
import React from "react";

type Props = {
  onAcceptInicio: (value: moment.Moment | null) => void;
  onAcceptTermino: (value: moment.Moment | null) => void;
  defaultDateInit: string;
};

export const Process2 = (props: Props) => {
  return (
    <ListItem sx={{ marginTop: 3 }}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MobileDateTimePicker
            label="Inicio"
            onAccept={props.onAcceptInicio}
            defaultValue={moment(props.defaultDateInit)}
            sx={{
              marginBottom: 3,
            }}
            format="DD/MM/YYYY HH:MM"
            disablePast
          />

          <MobileDateTimePicker
            label="Termino"
            onAccept={props.onAcceptTermino}
            format="DD/MM/YYYY HH:MM"
            disablePast
          />
        </Box>
      </LocalizationProvider>
    </ListItem>
  );
};
