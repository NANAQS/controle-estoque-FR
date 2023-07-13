import { combineReducers } from "redux";
import loginClick from "./login/reducer";
import productsReducer from "./products/reducer";
import { IUserLogin } from "./login/types";
import { IProductsInterface } from "./products/types";

export interface IState {
  loginClick: IUserLogin;
  productsReducer: IProductsInterface;
}

export default combineReducers({
  loginClick,
  productsReducer,
});
