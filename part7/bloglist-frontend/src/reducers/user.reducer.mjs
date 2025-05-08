import { createSlice } from "@reduxjs/toolkit";

const { reducer: userReducer, actions } = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },

    removeUser() {
      return null;
    },
  },
});

export default userReducer;
export const { setUser, removeUser } = actions;
