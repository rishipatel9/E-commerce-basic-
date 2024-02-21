import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../utility/cart";
import totalReducer from "../utility/productQuantity";
export const store=configureStore({
    reducer:cartReducer,totalReducer
});
  