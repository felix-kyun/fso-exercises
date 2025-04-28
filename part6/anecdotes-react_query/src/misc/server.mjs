const serverUrl = "http://localhost:3000/anecdotes";

export async function getAnecdotes() {
  const res = await fetch(serverUrl);
  if (!res.ok) throw new Error("unable to fetch anecdotes");
  return await res.json();
}
