export function AnecdoteView({ anecdote }) {
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>
        has {anecdote.votes} votes <br />
        <a href="{anecdote.info}" target="_blank">
          {anecdote.info}
        </a>
      </p>
    </div>
  );
}
