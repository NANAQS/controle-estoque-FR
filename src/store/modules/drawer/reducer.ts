import { Reducer } from "redux";
import { IDrawer } from "./types";

const INITIAL_STATE: IDrawer = {
  text: "",
};

const drawer: Reducer<IDrawer> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CLICK_DRAWER":
      switch (action.payload.text) {
        case "Tela Inicial":
          window.location.replace("/");
          break;
        case "Produto":
          window.location.replace("/produtos");
          break;
        case "Categorias":
          window.location.replace("/categorias");
          break;
        case "Fornecedores":
          window.location.replace("/fornecedores");
          break;

        case "Entrada":
          window.location.replace("/entrada");
          break;
        case "Saída":
          window.location.replace("/saida");
          break;

        case "Usuários":
          window.location.replace("/usuarios");
          break;
        case "Logs de Atividades":
          window.location.replace("/log");
          break;
      }
      return state;

    default:
      return state;
  }
};

export default drawer;
