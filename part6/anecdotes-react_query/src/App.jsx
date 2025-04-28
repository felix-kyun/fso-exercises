import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { getAnecdotes, voteAnecdote } from "./misc/server.mjs";

const App = () => {
  const {
    isPending,
    isError,
    data: anecdotes,
  } = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: false,
  });

  const queryClient = useQueryClient();
  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["anecdotes"],
      });
    },
  });

  const handleVote = (anecdote) => {
    voteMutation.mutate(anecdote);
  };

  if (isPending) return <div>data loading</div>;
  if (isError)
    return <div>anecdote sercies not availiable due to problems in server</div>;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
