import allAuthors from "../queries/allAuthors.gql";
import { useQuery } from "@apollo/client";
import { AuthorEdit } from "./AuthorEdit";

const Authors = () => {
  const { loading, error, data } = useQuery(allAuthors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { allAuthors: authors } = data;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AuthorEdit />
    </div>
  );
};

export default Authors;
