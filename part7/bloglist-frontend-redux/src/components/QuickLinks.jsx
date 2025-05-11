import { Link } from "react-router";

export const QuickLinks = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};
