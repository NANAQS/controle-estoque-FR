import { ListItem } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/locale/pt-br";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onAccept: (value: moment.Moment | null) => void;
};

export const Process2 = (props: Props) => {
  return (
    <ListItem sx={{ marginTop: 3 }}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDatePicker
          defaultValue={moment(Date.now())}
          onAccept={props.onAccept}
        />
      </LocalizationProvider>
    </ListItem>
  );
};
