import { books } from "../books.mjs";
import { authors as authorsDb } from "../authors.mjs";

export function allAuthors(root, args) {
  const authorMap = new Map();

  books.forEach(({ author }) => {
    if (authorMap.get(author)) authorMap.set(author, authorMap.get(author) + 1);
    else authorMap.set(author, 1);
  });

  const authors = [];

  for (const [name, bookCount] of authorMap) {
    const authorData = authorsDb.find((a) => a.name === name);

    authors.push({
      name,
      bookCount,
      born: authorData.born,
      id: authorData.id,
    });
  }

  return authors;
}
