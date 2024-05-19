import { createSlice } from "@reduxjs/toolkit";
import { FlowerState } from "./flowerTypes";
import { fetchFlowers } from "./flowerActions";

const initialState: FlowerState = {
  flowers: [],
  loading: false,
  error: null,
};

const flowerSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.loading = false;
        state.flowers = action.payload;
        state.error = null;
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error occurred";
      });
  },
});

export default flowerSlice.reducer;
