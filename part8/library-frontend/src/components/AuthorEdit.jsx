import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import editAuthor from "../mutations/editAuthor.gql";
import allAuthors from "../queries/allAuthors.gql";
import { useEffect } from "react";

export const AuthorEdit = () => {
  const [author, setAuthor] = useState("");
  const [authors, setAuthors] = useState([]);
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

  const { data, error, loading } = useQuery(allAuthors, {
    skip: !(authors.length == 0),
  });

  useEffect(() => {
    if (data) {
      setAuthors(data.allAuthors);
      setAuthor(data.allAuthors[0].name);
    }
  }, [data]);

  function handleSubmit(event) {
    event.preventDefault();

    editAuthorMutation({
      variables: {
        name: author,
        setBornTo: parseInt(year),
      },
    });

    setYear("");
  }

  return (
    <div>
      <h2>Edit Author</h2>
      <form onSubmit={handleSubmit}>
        name:
        <select
          onChange={({ target }) => setAuthor(target.value)}
          value={author}
        >
          {authors.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
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
