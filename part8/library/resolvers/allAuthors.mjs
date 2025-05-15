import { books } from "../books.mjs";

export function allAuthors(root, args) {
  const authorMap = new Map();

  books.forEach(({ author }) => {
    if (authorMap.get(author)) authorMap.set(author, authorMap.get(author) + 1);
    else authorMap.set(author, 1);
  });

  const authors = [];

  for (const [name, bookCount] of authorMap) {
    authors.push({
      name,
      bookCount,
    });
  }

  return authors;
}
