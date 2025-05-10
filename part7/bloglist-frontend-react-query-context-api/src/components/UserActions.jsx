import { resetUserAction } from "../reducers/user.reducer.mjs";
import { useUser } from "../contexts/user.context.mjs";

export function UserActions() {
  const [user, userDispatch] = useUser();

  function logout() {
    localStorage.removeItem("user");
    userDispatch(resetUserAction());
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <em>{user.name}</em> &nbsp;
      <button onClick={logout}>Logout</button>
    </div>
  );
}
