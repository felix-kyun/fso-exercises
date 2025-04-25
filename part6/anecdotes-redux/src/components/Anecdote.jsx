import { useDispatch } from "react-redux";
import { vote, voteAnecdote } from "./../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationSlice.mjs";

export function Anecdote({ anecdote }) {
  const dispatch = useDispatch();

  function handleVote(e) {
    dispatch(voteAnecdote(anecdote));
    dispatch(setNotification(`you voted for '${anecdote.content}'`));
  }

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  );
}
