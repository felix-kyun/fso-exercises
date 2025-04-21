import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification(state, action) {
      state = action.payload;
      return state;
    },

    reset(state, action) {
      state = "";
      return state;
    },
  },
});

export default reducer;
export const { setNotification, reset } = actions;
