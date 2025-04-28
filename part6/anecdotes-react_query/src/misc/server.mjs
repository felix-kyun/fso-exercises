const serverUrl = "http://localhost:3000/anecdotes";

export async function getAnecdotes() {
  const res = await fetch(serverUrl);
  if (!res.ok) throw new Error("unable to fetch anecdotes");
  return await res.json();
}

export async function createAnecdote(content) {
  const res = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      votes: 0,
    }),
  });

  if (!res.ok) throw new Error("unable to create");

  return res;
}

export async function voteAnecdote({ votes, id }) {
  const res = await fetch(`${serverUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      votes: votes + 1,
    }),
  });

  if (!res.ok) throw new Error("unable to create");

  return res;
}
