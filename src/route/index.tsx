import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home_screen";
import ProdutosScreen from "../pages/produtos_screen";
import UsuariosScreen from "../pages/usuarios_screen";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/produtos",
    element: <ProdutosScreen />,
  },
  {
    path: "/usuarios",
    element: <UsuariosScreen />,
  },
]);
