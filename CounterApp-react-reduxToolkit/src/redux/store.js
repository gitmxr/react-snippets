import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;