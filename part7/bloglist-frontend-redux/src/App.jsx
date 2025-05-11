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
import { Routes } from "react-router";
import { Route } from "react-router";
import { UserList } from "./components/UserList";
import { Link } from "react-router";
import { QuickLinks } from "./components/QuickLinks";
import { UserView } from "./components/UserView";

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
      <QuickLinks />
      <UserActions user={user} setUser={setUser} />
      <Routes>
        // home route
        <Route
          path="/"
          element={
            user ? <BlogsList user={user} /> : <Login setUser={setUser} />
          }
        />
        // show all the users
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserView />} />
      </Routes>
    </div>
  );
}

export default App;
