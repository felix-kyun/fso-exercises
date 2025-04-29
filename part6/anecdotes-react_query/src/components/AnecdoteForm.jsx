import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote, voteAnecdote } from "../misc/server.mjs";
import {
  setNotification,
  useNotificationDispatcher,
} from "../providers/notificationProvider";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const notificationDispatcher = useNotificationDispatcher();

  const creationMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["anecdotes"],
      });

      notificationDispatcher(setNotification("anecdote created successfully"));
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    creationMutation.mutate(event.target.anecdote.value);
    event.target.anecdote.value = "";
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
