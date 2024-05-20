import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./features/flower/flowerSlice";
import modalReducer from "./features/modal/modalSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    flowers: flowerReducer,
    modal: modalReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
