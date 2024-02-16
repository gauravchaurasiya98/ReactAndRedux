import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { isLoaded: false },
  reducers: {
    setLoaded: (state) => {
      state.isLoaded = true;
    },
    setNotLoaded: (state) => {
      state.isLoaded = false;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;
