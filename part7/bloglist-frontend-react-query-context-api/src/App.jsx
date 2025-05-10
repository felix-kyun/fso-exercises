import { useState } from "react";
import { Login } from "./components/Login";
import { BlogsList } from "./components/BlogsList";
import { useEffect } from "react";
import { UserActions } from "./components/UserActions";
import { setUserAction } from "./reducers/user.reducer.mjs";
import { useUser } from "./contexts/user.context.mjs";

function App() {
  const [user, userDispatch] = useUser();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      userDispatch(setUserAction(JSON.parse(localStorage.getItem("user"))));
    }
  }, [userDispatch]);

  return (
    <div>
      <h1>Welcome to the Blog List</h1>
      <UserActions />
      {user ? <BlogsList /> : <Login />}
    </div>
  );
}

export default App;
