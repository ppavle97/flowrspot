import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  LoggedUser,
  LoginData,
  SignupData,
  User,
  UserLogin,
} from "./userTypes";
import { setModal } from "../modal/modalSlice";
import { getCookie, setCookie } from "../../cookies";

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
      const response = await axios.post<UserLogin>(
        `${API}/users/login`,
        loginData
      );

      if (response.status === 200) {
        dispatch(setModal("success_login"));
        setCookie("jwtToken", response.data.auth_token, 1);
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
export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = getCookie("jwtToken");
      const response = await axios.get<{ user: LoggedUser }>(
        `${API}/users/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        return response.data.user;
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
