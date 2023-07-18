import {
  CardContent,
  Card,
  Box,
  CardHeader,
  Button,
  Typography,
  Switch,
  styled,
  SwitchProps,
  useTheme,
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers";

type Props = {
  index: number;
};

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? useTheme().palette.primary.main
            : useTheme().palette.secondary.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function CustomCard({ index }: Props) {
  const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  return (
    <Card
      variant="outlined"
      sx={{
        width: 300,
        height: 200,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: 300,
        }}
      >
        <Box>
          <Typography variant="button">{diasDaSemana[index]}</Typography>
          <Typography variant="subtitle2">8:00 - 22:00</Typography>
        </Box>
        <Button variant="contained" sx={{ borderRadius: 20 }}>
          Salvar
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: 300,
          }}
        >
          <Box sx={{ width: 200 / 1.5 }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                format="HH:MM"
                label="INICIO"
                slotProps={{
                  textField: {
                    sx: {
                      "& input::placeholder": {
                        fontSize: 11,
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ width: 200 / 1.5 }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                format="HH:MM"
                label="FIM"
                slotProps={{
                  textField: {
                    sx: {
                      "& input::placeholder": {
                        fontSize: 11,
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: 300,
        }}
      >
        <IOSSwitch />
        <Typography variant="overline">Fechado nesse dia de semana</Typography>
      </Box>
    </Card>
  );
}

export default CustomCard;
