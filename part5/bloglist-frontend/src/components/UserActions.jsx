export function UserActions({ user, setUser }) {
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
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
