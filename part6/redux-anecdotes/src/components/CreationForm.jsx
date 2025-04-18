import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

export function CreationForm() {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		e.target.content.value = "";
		dispatch(createAnecdote(content));
	};

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input name="content" />
				</div>
				<button>create</button>
			</form>
		</div>
	);
}
