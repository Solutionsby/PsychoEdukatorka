import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../slicer/isActiveSlicer";

export default configureStore({
  reducer: {
    active: nameReducer,
  },
});
