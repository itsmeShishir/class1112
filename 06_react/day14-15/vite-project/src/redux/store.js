import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import modeReducer from "./modeSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        mode: modeReducer,
    }
})

export default store