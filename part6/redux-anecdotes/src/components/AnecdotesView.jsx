import { useSelector, useDispatch } from "react-redux";
import { vote } from "./../reducers/anecdoteReducer";
import { Anecdote } from "./Anecdote";

export function AnecdotesView() {
	const rawState = useSelector((state) => state);
	const anecdotes = [...rawState].sort((a, b) => b.votes - a.votes);

	return (
		<div>
			{anecdotes.map((anecdote) => (
				<Anecdote key={anecdote.id} anecdote={anecdote} />
			))}
		</div>
	);
}
