//  dark model and light model 
import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name: "mode",
    initialState: {
        value: false,
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        }
    }
})

export const { toggle } = modeSlice.actions;

export default modeSlice.reducer