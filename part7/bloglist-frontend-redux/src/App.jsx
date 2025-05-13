import { useState } from "react";
import { Login } from "./components/Login";
import { BlogsList } from "./components/BlogsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNotify } from "./reducers/notifyReducer.mjs";
import { initializeBlog } from "./reducers/blogReducer.mjs";
import { useSelector } from "react-redux";
import { setUser } from "./reducers/user.reducer.mjs";
import { Routes } from "react-router";
import { Route } from "react-router";
import { UserList } from "./components/UserList";
import { QuickLinks } from "./components/QuickLinks";
import { UserView } from "./components/UserView";
import { BlogView } from "./components/BlogView";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <QuickLinks />
        <h2>Welcome to the Blog List</h2>
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
          <Route path="/blogs/:id" element={<BlogView />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
