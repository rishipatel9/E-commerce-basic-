import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../utility/cart";
export const store=configureStore({
    reducer:cartReducer,
});
  