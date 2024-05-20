import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./features/flower/flowerSlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    flowers: flowerReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
