import { Reducer } from "redux";
import { IProductsInterface } from "./types";

const INITIAL_STATE: IProductsInterface = {
  products: [],
};

const productsReducer: Reducer<IProductsInterface> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case "USER_DATA":
      const { products }: IProductsInterface = action.payload;

      return { ...state, products: [...products] };
  }

  return state;
};

export default productsReducer;
