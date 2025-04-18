import { AnecdotesView } from "./components/AnecdotesView";
import { CreationForm } from "./components/CreationForm";
import { Filter } from "./components/Filter";

const App = () => {
	return (
		<div>
			<h2>Anecdotes</h2>
			<Filter />
			<AnecdotesView />
			<CreationForm />
		</div>
	);
};

export default App;
