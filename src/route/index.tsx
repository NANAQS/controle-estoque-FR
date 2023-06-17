import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home_screen";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);
