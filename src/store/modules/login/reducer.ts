import { Reducer } from "redux";
import { IUserLogin } from "./types";
import Cookies from "js-cookie";

const INITIAL_STATE: IUserLogin = {
  user: "",
  password: "",
};

const loginClick: Reducer<IUserLogin> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_CLICK":
      console.log(action.payload);
      Cookies.set("LOGIN_JWT", "fesfesfsfsefesf");
      window.location.reload();
      break;
  }

  return state;
};

export default loginClick;
