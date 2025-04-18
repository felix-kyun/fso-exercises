import { useSelector, useDispatch } from "react-redux";
import { vote } from "./../reducers/anecdoteReducer";
import { Anecdote } from "./Anecdote";

export function AnecdotesView() {
  const anecdotes = useSelector((state) => state);

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
}
