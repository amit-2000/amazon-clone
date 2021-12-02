import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();

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
  count: 0,
  products: [],
  productsBasket: [],
  status: null,
  filterPosts: [],
  isLoggedin: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action.payload.ten);
      state.count += action.payload.five;
    },
    addToProducts: (state, action) => {
      // console.log(action.payload);
      state.products = action.payload;
      state.status = "fulfilled";
      // console.log("action products ", state.products);
    },
    addToFilterPosts: (state, action) => {
      console.log(action);
      const products = action.payload;
      console.log("Products for filter action ", products);
      const prods = products.filter((product) => product.id === 1);
      // console.log("filtered product ", prods);
      state.filterPosts = prods;
    },
    addToBasket: (state, action) => {
      console.log("action add to basket ", action);
      // const unique = state.productsBasket.push(action.payload);

      state.productsBasket.push(action.payload);
      state.count = state.productsBasket.length;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const prods = state.productsBasket.filter((item) => item.id !== id);
      state.productsBasket = prods;
      state.count = state.productsBasket.length;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  getProduct,
  addToProducts,
  addToFilterPosts,
  addToBasket,
  removeFromCart,
} = counterSlice.actions;
export default counterSlice.reducer;
