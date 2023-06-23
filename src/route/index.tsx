import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home_screen";
import ProdutosScreen from "../pages/produtos_screen";
import UsuariosScreen from "../pages/usuarios_screen";
import LogScreen from "../pages/logs_screen";
import CategoriasScreen from "../pages/categorias_screen";
import EntradaScreen from "../pages/entrada_screen";
import SaidaScreen from "../pages/saida_screen";
import FornecedoresScreen from "../pages/fornecedores_screen";

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
  {
    path: "/log",
    element: <LogScreen />,
  },
  {
    path: "/categorias",
    element: <CategoriasScreen />,
  },
  {
    path: "/entrada",
    element: <EntradaScreen />,
  },
  {
    path: "/saida",
    element: <SaidaScreen />,
  },
  {
    path: "/fornecedores",
    element: <FornecedoresScreen />,
  },
]);
