import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload;
      return state.map((a) => (a.id === id ? { ...a, votes: a.votes + 1 } : a));
    },
    create(state, action) {
      const newAnecdote = action.payload;
      return [...state, asObject(newAnecdote)];
    },
    set(state, action) {
      return action.payload;
    },
  },
});

export default reducer;
export const { vote, create, set } = actions;
