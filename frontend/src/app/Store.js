import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../utility/cart";
import quantityReducer from "../utility/productQuantity"

export const store=configureStore({
    reducer:{
        cart:cartReducer,
        quantity:quantityReducer
    }
});
  