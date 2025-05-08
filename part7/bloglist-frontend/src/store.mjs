import { configureStore } from "@reduxjs/toolkit";
import notifyReducer from "./reducers/notifyReducer.mjs";
import blogReducer from "./reducers/blogReducer.mjs";
import userReducer from "./reducers/user.reducer.mjs";

export const store = configureStore({
  reducer: {
    notify: notifyReducer,
    blogs: blogReducer,
    user: userReducer,
  },
});
