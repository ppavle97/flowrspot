import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./features/flower/flowerSlice";

const store = configureStore({
  reducer: {
    flowers: flowerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
