import { createSlice } from "@reduxjs/toolkit";

const { reducer: notifyReducer, actions } = createSlice({
  name: "notify",
  initialState: {
    content: "",
    timer: null,
  },
  reducers: {
    set: (state, action) => {
      state.content = action.payload;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
    clear: (state, payload) => {
      state.timer = null;
      state.content = "";
    },
  },
});

const { set, setTimer, clear } = actions;

export const setNotify = (message) => async (dispatch, getState) => {
  const {
    notify: { timer },
  } = getState();
  if (timer) clearTimeout(timer);

  dispatch(clear());
  dispatch(set(message));
  dispatch(setTimer(setTimeout(() => dispatch(clear()), 5000)));
};

export default notifyReducer;
