import { configureStore } from "@reduxjs/toolkit";
import notifyReducer from "./reducers/notifyReducer.mjs";

export const store = configureStore({
  reducer: {
    notify: notifyReducer,
  },
});
