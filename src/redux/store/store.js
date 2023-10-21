import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, selectedProductReducer } from "../reducers/productsReducer";
import { cartReducer } from "../reducers/cartReducers";
import { userReducer } from "../reducers/userReducer";

export const store = configureStore({
    reducer: {
        allProducts: productsReducer,
        singleProduct: selectedProductReducer,
        cart: cartReducer,
        user: userReducer,
    }
  })