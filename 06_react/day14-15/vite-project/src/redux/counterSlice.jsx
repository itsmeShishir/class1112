import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 10,
    },
    reducers:{
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        reset: (state) => {
            state.value = 0
        },
    }
})
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer