import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      const morphedData = data.map(({ name, blogs, id }) => ({
        name,
        count: blogs.length,
        id,
      }));
      setUsers(morphedData);
    };

    fetchUsers();
  }, []);

  if (users.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Blogs Created</th>
          </tr>
        </thead>

        <tbody>
          {users.map(({ name, count, id }) => (
            <tr key={id}>
              <td>
                <Link to={`/users/${id}`}>{name}</Link>
              </td>

              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
