import { createSlice } from "@reduxjs/toolkit";
import {
  getAnecdotes,
  createAnecdote as serverCreate,
  voteAnecdote as serverVote,
} from "../misc/server.mjs";
import { Anecdote } from "../components/Anecdote";

const { reducer, actions } = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload;
      return state.map((a) => (a.id === id ? { ...a, votes: a.votes + 1 } : a));
    },
    create(state, action) {
      state.push(action.payload);
    },
    set(state, action) {
      return action.payload;
    },
  },
});

export default reducer;
export const { vote, create, set } = actions;

export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await getAnecdotes();
  dispatch(set(anecdotes));
};

export const createAnecdote = (content) => async (dispatch) => {
  const newAnecdote = await serverCreate(content);
  dispatch(create(newAnecdote));
};

export const voteAnecdote = (anecdotes) => async (dispatch) => {
  const updatedAnecdote = await serverVote(anecdotes);
  dispatch(vote(anecdotes.id));
};
