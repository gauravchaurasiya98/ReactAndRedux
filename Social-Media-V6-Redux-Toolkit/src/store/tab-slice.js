import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "selectedTab",
  initialState: { selectedTab: "VIEW" },
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const tabActions = tabSlice.actions;

export const tabReducer = tabSlice.reducer;
