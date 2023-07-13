import React from "react";
import ReactDOM from "react-dom/client";
import Cookies from "js-cookie";

import { RouterProvider } from "react-router-dom";
import { route } from "./route";
import { ThemeProvider } from "@mui/material";
import { themeDark, themeLight } from "./themes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./themes/global.css";

const currentTheme = Cookies.get("THEME_DEFAULT");

const isDarkMode =
  currentTheme == null || currentTheme == "THEME_LIGHT" ? false : true;

const theme = isDarkMode ? themeDark : themeLight;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={route} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
