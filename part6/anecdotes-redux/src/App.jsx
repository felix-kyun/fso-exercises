import { useEffect } from "react";
import { AnecdotesView } from "./components/AnecdotesView";
import { CreationForm } from "./components/CreationForm";
import { Filter } from "./components/Filter";
import { Notification } from "./components/Notification";
import { setNotification } from "./reducers/notificationSlice.mjs";
import { useDispatch } from "react-redux";
import { initializeAnecdotes, set } from "./reducers/anecdoteReducer.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotification("welcome"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesView />
      <CreationForm />
    </div>
  );
};

export default App;
