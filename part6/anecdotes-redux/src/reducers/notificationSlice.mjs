import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "notification",
  initialState: {
    content: "",
    timeout: null,
  },
  reducers: {
    set(state, action) {
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
export const { set, reset, setTimer } = actions;

export const setNotification =
  (content, time = 5) =>
    async (dispatch, getState) => {
      dispatch(set(content));
      const {
        notification: { timeout },
      } = getState();

      console.log(time);

      // clear old timeout if any
      if (timeout) clearTimeout(timeout);

      // reset the content after time
      dispatch(setTimer(setTimeout(() => dispatch(set("")), time * 1000)));
    };
