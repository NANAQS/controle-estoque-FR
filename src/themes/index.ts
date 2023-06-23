import { createTheme } from "@mui/material";

const PRIMARY_LIGHT = "#7F8C95";
const SECUNDARY_LIGHT = "#414e59";
const CONTRAST_LIGHT = "#BFD5E1";

const PRIMARY_DARK = "#525b61";
const SECUNDARY_DARK = "#252d33";
const CONTRAST_DARK = "#66737a";

export const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: PRIMARY_LIGHT,
    },
    secondary: {
      main: SECUNDARY_LIGHT,
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: PRIMARY_LIGHT,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          color: PRIMARY_LIGHT,
        },
        overline: {
          color: PRIMARY_LIGHT,
        },
        subtitle2: {
          color: CONTRAST_LIGHT,
        },
        body1: {
          color: SECUNDARY_LIGHT,
          fontSize: 40,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: PRIMARY_LIGHT,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: SECUNDARY_LIGHT,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: SECUNDARY_LIGHT,
        },
      },
    },
  },
});

export const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_DARK,
    },
    secondary: {
      main: SECUNDARY_DARK,
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: PRIMARY_DARK,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          color: PRIMARY_DARK,
        },
        overline: {
          color: PRIMARY_DARK,
        },
        subtitle2: {
          color: CONTRAST_DARK,
        },
        body1: {
          color: SECUNDARY_DARK,
          fontSize: 40,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: PRIMARY_DARK,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: SECUNDARY_DARK,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: SECUNDARY_LIGHT,
        },
      },
    },
  },
});
