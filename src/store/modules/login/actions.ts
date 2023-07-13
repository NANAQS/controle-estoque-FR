import { IUserLogin } from "./types";

export function loginClickAction(item: IUserLogin) {
  return {
    type: "LOGIN_CLICK",
    payload: {
      ...item,
    },
  };
}
