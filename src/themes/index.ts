import { createTheme } from "@mui/material";

const PRIMARY_LIGHT = "#35788c";
const SECUNDARY_LIGHT = "#6db4c9";
const CONTRAST_LIGHT = "#BFD5E1";

const PRIMARY_DARK = "#1f4854";
const SECUNDARY_DARK = "#4c7f8f";
const CONTRAST_DARK = "#10252b";

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
        button: {
          color: SECUNDARY_LIGHT,
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
        button: {
          color: SECUNDARY_DARK,
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
