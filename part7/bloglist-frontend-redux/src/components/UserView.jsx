import { useMatch } from "react-router";
import { useState, useEffect } from "react";

export const UserView = () => {
  const match = useMatch("/users/:id");
  const [user, setUser] = useState(null);

  const userId = match ? match?.params.id : null;

  useEffect(() => {
    async function getUserInfo() {
      const response = await fetch(
        "http://localhost:3000/api/users/" + match.params.id,
      );
      const userData = await response.json();
      setUser(userData);
    }
    if (match) {
      getUserInfo();
      console.log("match fired");
    }
  }, [userId, match]);

  if (!match || !userId || !user) return null;

  const { name, blogs } = user;

  return (
    <div>
      <h2>{name}</h2>
      <h4>Blogs Added</h4>
      <ul>
        {blogs.map(({ title, id }) => (
          <li key={id}> {title} </li>
        ))}
      </ul>
    </div>
  );
};
