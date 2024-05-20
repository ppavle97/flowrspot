import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SignupData, User } from "./userTypes";
import { setModal } from "../modal/modalSlice";

const API = "https://flowrspot-api.herokuapp.com/api/v1";

export const signupUser = createAsyncThunk(
  "user/signup",
  async (signupData: SignupData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>(
        `${API}/users/register`,
        signupData
      );
      dispatch(setModal("success_singup"));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data.error : error.message
      );
    }
  }
);
