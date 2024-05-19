import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Flower } from "./flowerTypes";

const API = "https://flowrspot-api.herokuapp.com/api/v1";

export const fetchFlowers = createAsyncThunk<
  Flower[],
  void,
  { rejectValue: string }
>("flowers/fetchFlowers", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Flower[]>(`${API}/flowers`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response ? error.response.data.message : error.message
    );
  }
});
