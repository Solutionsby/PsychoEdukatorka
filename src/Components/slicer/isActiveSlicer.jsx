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
    isOpen: (state) => {
      if (state.active === true) {
        state.active = false;
      }
    },
  },
});

export const { toggleActive, isOpen } = activeSlice.actions;
export default activeSlice.reducer;
