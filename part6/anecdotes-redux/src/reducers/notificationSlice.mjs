import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "notification",
  initialState: {
    content: "",
    timeout: null,
  },
  reducers: {
    setNotification(state, action) {
      state.content = action.payload;
      if (state.timeout) clearTimeout(state.timeout);
    },

    setTimer(state, action) {
      state.timeout = action.payload;
    },

    reset(state, action) {
      state.content = "";
      state.timeout = null;
    },
  },
});

export default reducer;
export const { setNotification, reset, setTimer } = actions;
