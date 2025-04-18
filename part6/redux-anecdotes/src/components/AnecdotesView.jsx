import { useSelector, useDispatch } from "react-redux";
import { vote } from "./../reducers/anecdoteReducer";
import { Anecdote } from "./Anecdote";

export function AnecdotesView() {
	const rawState = useSelector((state) => state.anecdotes);
	const filter = useSelector((state) => state.filter);

	const anecdotes = [...rawState]
		.filter((a) => a.content.includes(filter))
		.sort((a, b) => b.votes - a.votes);

	return (
		<div>
			{anecdotes.map((anecdote) => (
				<Anecdote key={anecdote.id} anecdote={anecdote} />
			))}
		</div>
	);
}
