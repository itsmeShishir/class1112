import { configureStore } from "@reduxjs/toolkit";
import CartReduer from "./CartSlice";

const store = configureStore({
    reducer: {
        cart: CartReduer
    }
})

export default store