import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "isActive",
  initialState: {
    active: false,
    paragrafClass: "",
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
    setParagraphClass: (state, action) => {
      state.paragrafClass = action.payload;
    },
  },
});

export const { toggleActive, isOpen, setParagraphClass } = activeSlice.actions;
export default activeSlice.reducer;
