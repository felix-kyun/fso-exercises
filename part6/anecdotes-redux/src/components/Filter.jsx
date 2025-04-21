import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer.mjs";

export function Filter() {
	const dispatch = useDispatch();

	const handleChange = ({ target: { value } }) => dispatch(setFilter(value));

	return (
		<div>
			<label htmlFor="filter">Filter: </label>
			<input type="text" name="filter" onChange={handleChange} />
		</div>
	);
}
