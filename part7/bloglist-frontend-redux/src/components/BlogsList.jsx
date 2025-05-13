import { useEffect, useState } from "react";
import { createBlog, deleteBlog, likeBlog } from "../reducers/blogReducer.mjs";
import { Blog } from "./Blog";
import { BlogCreation } from "./BlogCreation";
import { Notify } from "./Notify";
import { Togglable } from "./Togglable";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export function BlogsList({ user }) {
  const blogs = useSelector((state) => state.blogs);
  const [notification, setNotification] = useState(null);
  const creationRef = useRef();
  const dispatch = useDispatch();

  async function createNewBlog(blog) {
    try {
      dispatch(createBlog(user, blog));
      creationRef.current.toggleVisibility();
    } catch (error) {
      setNotification(error.message);
    }
  }

  async function incrementLikes(blog) {
    try {
      dispatch(likeBlog(blog));
    } catch (error) {
      setNotification(error.message);
    }
  }

  async function handleDelete({ id, title }) {
    try {
      const confirmation = window.confirm(
        `Do You really want to delete "${title} ?"`,
      );
      if (!confirmation) return;
      dispatch(deleteBlog(user, id));
    } catch (error) {
      setNotification(error.message);
    }
  }

  return (
    <div>
      <Notify notification={notification} setNotification={setNotification} />
      <Togglable buttonLabel="Create New Blog" ref={creationRef}>
        <h2>Create New Blog</h2>
        <BlogCreation createBlog={createNewBlog} />
      </Togglable>

      <h2>Blogs</h2>
      <List>
        {blogs
          .toSorted((a, b) => Number(b.likes) - Number(a.likes))
          .map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              incrementLikes={incrementLikes}
              user={user}
              deleteBlog={handleDelete}
            />
          ))}
      </List>
    </div>
  );
}
