import { createTheme } from "@mui/material";

const FONT_DEFAULT = "Fira Code, monospace";

const PRIMARY_LIGHT = "#35788c";
const SECUNDARY_LIGHT = "#6db4c9";
const CONTRAST_LIGHT = "#BFD5E1";

const PRIMARY_DARK = "#353fa1";
const SECUNDARY_DARK = "#0d102e";
const CONTRAST_DARK = "#2a317a";

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
          fontFamily: FONT_DEFAULT,
        },
        overline: {
          color: PRIMARY_LIGHT,
          fontFamily: FONT_DEFAULT,
        },
        subtitle2: {
          color: CONTRAST_LIGHT,
          fontFamily: FONT_DEFAULT,
        },
        body1: {
          color: SECUNDARY_LIGHT,
          fontSize: 40,
          fontFamily: FONT_DEFAULT,
        },
        button: {
          color: SECUNDARY_LIGHT,
          fontFamily: FONT_DEFAULT,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: SECUNDARY_LIGHT,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
          border: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#fff",
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
          fontFamily: FONT_DEFAULT,
        },
        overline: {
          color: PRIMARY_DARK,
          fontFamily: FONT_DEFAULT,
        },
        subtitle2: {
          color: CONTRAST_DARK,
          fontFamily: FONT_DEFAULT,
        },
        body1: {
          color: SECUNDARY_DARK,
          fontSize: 40,
          fontFamily: FONT_DEFAULT,
        },
        button: {
          color: SECUNDARY_DARK,
          fontFamily: FONT_DEFAULT,
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
          color: SECUNDARY_DARK,
        },
      },
    },
  },
});
