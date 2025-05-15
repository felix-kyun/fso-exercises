import { authors } from "../authors.mjs";

export function editAuthor(root, { name, setBornTo }) {
  authors.forEach((a, i) => {
    if (a.name === name) {
      authors[i].born = setBornTo;
    }
  });

  console.log(authors);
  return authors.find((a) => a.name === name);
}
