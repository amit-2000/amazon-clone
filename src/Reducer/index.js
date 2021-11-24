import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "counter/fetchProducts",
  async ({ limit }, { dispatch, getState }) => {
    const { counter } = getState();
    console.log({ counter });
    return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (response) => {
        return response.json();
      }
    );
  }
);

const initialState = {
  count: 10,
  products: [],
  status: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action.payload.ten);
      state.count += action.payload.five;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.playload);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, getProducts } =
  counterSlice.actions;
export default counterSlice.reducer;
