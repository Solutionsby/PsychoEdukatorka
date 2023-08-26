import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "isActive",
  initialState: {
    active: false,
  },
  reducers: {
    toggleActive: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggleActive } = activeSlice.actions;
export default activeSlice.reducer;
