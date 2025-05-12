import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeUser } from "../reducers/user.reducer.mjs";

export function UserActions() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function logout() {
    dispatch(removeUser());
    localStorage.removeItem("user");
  }

  if (!user) {
    return null;
  }

  return (
    <span>
      <em>{user.name}</em> &nbsp;
      <button onClick={logout}>Logout</button>
    </span>
  );
}
