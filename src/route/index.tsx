import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home_screen";
import ProdutosScreen from "../pages/produtos_screen";
import UsuariosScreen from "../pages/usuarios_screen";
import LogScreen from "../pages/logs_screen";
import CategoriasScreen from "../pages/categories_screen";
import EntradaScreen from "../pages/entrada_screen";
import SaidaScreen from "../pages/saida_screen";
import FornecedoresScreen from "../pages/fornecedores_screen";
import Agendamento_HomeScreen from "../pages/scheduling/home";
import { protectedRoute } from "../utils/routerConfig";
import { CheckOutScreen } from "../pages/checkout";
import SchedulingHome from "../pages/scheduling/scheduling_home";

export const route = createBrowserRouter([
  ...protectedRoute({
    path: "/",
    element: <HomeScreen />,
  }),
  ...protectedRoute({
    path: "/produtos",
    element: <ProdutosScreen />,
  }),
  ...protectedRoute({
    path: "/usuarios",
    element: <UsuariosScreen />,
  }),
  ...protectedRoute({
    path: "/log",
    element: <LogScreen />,
  }),
  ...protectedRoute({
    path: "/categorias",
    element: <CategoriasScreen />,
  }),
  ...protectedRoute({
    path: "/entrada",
    element: <EntradaScreen />,
  }),
  ...protectedRoute({
    path: "/saida",
    element: <SaidaScreen />,
  }),
  ...protectedRoute({
    path: "/fornecedores",
    element: <FornecedoresScreen />,
  }),
  ...protectedRoute({
    path: "/agendamento/home",
    element: <Agendamento_HomeScreen />,
  }),
  ...protectedRoute({
    path: "/caixa",
    element: <CheckOutScreen />,
  }),
  ...protectedRoute({
    path: "/agendamento/agendar",
    element: <SchedulingHome />,
  }),
]);
