import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducesvklms: {
    increment: (state) => {
      state.count += 1;
    },
    getProducts: (state) => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action.payload.ten);
      state.count += action.payload.five;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, getProducts } =
  counterSlice.actions;

export default counterSlice.reducer;
