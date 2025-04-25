const url = "http://localhost:3000/anecdotes";

export async function getAnecdotes() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch anecdotes");
  }
  const anecdotes = await response.json();
  return anecdotes;
}

export async function createAnecdote(content) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, votes: 0 }),
  });

  if (!response.ok) {
    throw new Error("Failed to create anecdote");
  }

  const newAnecdote = await response.json();
  return newAnecdote;
}

export async function voteAnecdote({ id, votes }) {
  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: votes + 1 }),
  });

  if (!response.ok) {
    throw new Error("Failed to vote for anecdote");
  }

  const updatedAnecdote = await response.json();
  return updatedAnecdote;
}
