import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationSlice.mjs";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		anecdotes: anecdoteReducer,
		notification: notificationReducer,
	},
});
