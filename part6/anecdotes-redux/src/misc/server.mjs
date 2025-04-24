const url = "http://localhost:3000/anecdotes";

export async function getAnecdotes() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch anecdotes");
  }
  const anecdotes = await response.json();
  return anecdotes;
}
