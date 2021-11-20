import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducer/index";
export default configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
