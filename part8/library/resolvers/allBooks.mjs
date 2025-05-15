import { books } from "../books.mjs";

export function allBooks(root, { author, genre }) {
  let queryBooks = books;

  if (author) {
    queryBooks = queryBooks.filter((b) => b.author === author);
  }

  if (genre) {
    queryBooks = queryBooks.filter((b) => b.genres.includes(genre));
  }

  return queryBooks;
}
