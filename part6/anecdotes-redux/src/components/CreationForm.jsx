import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationSlice.mjs";
import { createAnecdote } from "../reducers/anecdoteReducer";

export function CreationForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = "";
    dispatch(createAnecdote(content));
    dispatch(setNotification(`created blog`));
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
