import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      state = action.payload;
    },
  },
});

export default reducer;
export const { setFilter } = actions;
