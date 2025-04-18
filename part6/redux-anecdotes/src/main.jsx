import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import anecdotereducer from "./reducers/anecdoteReducer";
import { filterReducer } from "./reducers/filterReducer.mjs";
import { combineReducers } from "redux";

const reducer = combineReducers({
	filter: filterReducer,
	anecdotes: anecdotereducer,
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
);
