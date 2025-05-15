import { GraphQLError } from "graphql";
import { authors } from "../authors.mjs";
import { books } from "../books.mjs";
import { v4 as uuid } from "uuid";

export function addBook(root, { title, author, published, genres }) {
  if (!title || !author || !published || !genres) {
    throw new GraphQLError("Missing required fields", {
      extensions: {
        code: "BAD_USER_INPUT",
      },
    });
  }

  if (!authors.some((a) => a.name === author)) {
    authors.push({
      name: author,
    });
  }

  const newBook = {
    title,
    author,
    published,
    genres,
    id: uuid(),
  };

  books.push(newBook);

  return newBook;
}
