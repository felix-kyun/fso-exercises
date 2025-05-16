import { useState } from "react";
import { useMutation } from "@apollo/client";
import editAuthor from "../mutations/editAuthor.gql";
import allAuthors from "../queries/allAuthors.gql";

export const AuthorEdit = () => {
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [editAuthorMutation] = useMutation(editAuthor, {
    onError: (error) => {
      console.log(error);
    },
    refetchQueries: [
      {
        query: allAuthors,
      },
    ],
  });

  function handleSubmit(event) {
    event.preventDefault();

    editAuthorMutation({
      variables: {
        name: author,
        setBornTo: parseInt(year),
      },
    });

    setAuthor("");
    setYear("");
  }

  return (
    <div>
      <h2>Edit Author</h2>
      <form onSubmit={handleSubmit}>
        name:
        <input
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
        <br />
        born:
        <input
          type="number"
          value={year}
          onChange={({ target }) => setYear(target.value)}
        />
        <br />
        <button type="submit">update author</button>
      </form>
    </div>
  );
};
