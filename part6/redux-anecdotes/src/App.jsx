import { AnecdotesView } from "./components/AnecdotesView";
import { CreationForm } from "./components/CreationForm";

const App = () => {
	return (
		<div>
			<h2>Anecdotes</h2>
			<AnecdotesView />
			<CreationForm />
		</div>
	);
};

export default App;
