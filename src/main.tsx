import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { route } from "./route";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={route} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
