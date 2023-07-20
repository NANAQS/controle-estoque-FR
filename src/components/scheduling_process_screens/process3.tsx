import { Box, TextField } from "@mui/material";
import moment from "moment";

type Props = {
    date: moment.Moment | null;
    onTimeSelected: (time: string) => void;
};

export const Process3 = ({ date, onTimeSelected }: Props) => {
    const handleTimeChange = (event: { target: { value: string; }; }) => {
        if (date) {
            const timeParts = event.target.value.split(":");
            date.hours(Number(timeParts[0]));
            date.minutes(Number(timeParts[1]));
            onTimeSelected(date.format("YYYY-MM-DDTHH:mm:ss"));
        }
    };

    return (
        <Box display="flex" justifyContent="center" marginTop={5}>
            <TextField
                id="time"
                label="Selecione uma hora"
                type="time"
                defaultValue="07:30"
                onChange={handleTimeChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300,
                }}
            />
        </Box>
    );
};
