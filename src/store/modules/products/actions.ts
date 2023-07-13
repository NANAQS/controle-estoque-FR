import { IProductsInterface } from "./types";

export function sendDataToRedux(item: IProductsInterface) {
  return {
    type: "USER_DATA",
    payload: {
      ...item,
    },
  };
}
