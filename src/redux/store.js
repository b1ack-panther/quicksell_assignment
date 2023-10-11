import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";
import { dataSelectSlice } from "./dataSelectSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    dataSelectSlice
  },
});
