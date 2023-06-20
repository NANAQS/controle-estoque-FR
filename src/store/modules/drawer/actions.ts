import { IDrawer } from "./types";

export function clicksIconDrawer(item: IDrawer) {
  return {
    type: "CLICK_DRAWER",
    payload: {
      ...item,
    },
  };
}
