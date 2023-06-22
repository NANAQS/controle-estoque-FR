import { createTheme } from "@mui/material";

const PRIMARY = "#7F8C95";
const SECUNDARY = "#414e59";

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECUNDARY,
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: PRIMARY,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          color: PRIMARY,
        },
        overline: {
          color: PRIMARY,
        },
        subtitle2: {
          color: "#BFD5E1",
        },
        body1: {
          color: SECUNDARY,
          fontSize: 40,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: PRIMARY,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: SECUNDARY,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: SECUNDARY,
        },
      },
    },
  },
});
