import { useSelector } from "react-redux";
import { Link } from "react-router";
import { setUser } from "../reducers/user.reducer.mjs";
import { UserActions } from "./UserActions";

export const QuickLinks = () => {
  const user = useSelector((state) => state.user);
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        backgroundColor: "lightgrey",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <UserActions user={user} setUser={setUser} />
    </div>
  );
};
