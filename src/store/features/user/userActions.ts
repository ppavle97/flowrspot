import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginData, SignupData, User } from "./userTypes";
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
      if (response.status === 200) {
        dispatch(setModal("success_singup"));
        return response.data;
      } else {
        return rejectWithValue("Unexpected response status");
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data.error : error.message
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData: LoginData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>(`${API}/users/login`, loginData);

      if (response.status === 200) {
        dispatch(setModal("success_login"));
        return response.data;
      } else {
        return rejectWithValue("Unexpected response status");
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data.error : error.message
      );
    }
  }
);
