import { useState } from "react";
import { Login } from "./components/Login";
import { BlogsList } from "./components/BlogsList";
import { useEffect } from "react";
import { UserActions } from "./components/UserActions";
import { useDispatch } from "react-redux";
import { setNotify } from "./reducers/notifyReducer.mjs";
import { initializeBlog } from "./reducers/blogReducer.mjs";
import { useSelector } from "react-redux";
import { setUser } from "./reducers/user.reducer.mjs";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotify("hello there"));
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(initializeBlog());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to the Blog List</h1>
      <UserActions user={user} setUser={setUser} />
      {user ? <BlogsList user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
