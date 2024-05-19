import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./features/flower/flowerSlice";

const store = configureStore({
  reducer: {
    flowers: flowerReducer,
  },
});

export default store;
