import { useEffect, useState } from "react";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog as blogDelete,
} from "../utils/serverFunctions.mjs";
import { Blog } from "./Blog";
import { BlogCreation } from "./BlogCreation";
import { Notify } from "./Notify";
import { Togglable } from "./Togglable";
import { useRef } from "react";

export function BlogsList({ user }) {
  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState(null);
  const creationRef = useRef();

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setBlogs(await getBlogs());
      } catch (error) {
        setNotification("Error fetching blogs:" + error.message);
      }
    }

    fetchBlogs();
  }, []);

  async function createNewBlog(blog) {
    try {
      const createdBlog = await createBlog(user, blog);
      setBlogs([...blogs, createdBlog]);
      creationRef.current.toggleVisibility();
    } catch (error) {
      setNotification(error.message);
    }
  }

  async function incrementLikes({ id, likes, author, title, url }) {
    try {
      await updateBlog({ id, author, title, url, likes: likes + 1 });
      const updatedBlogs = blogs.map((blog) => {
        if (blog.id === id) {
          return { ...blog, likes: blog.likes + 1 };
        }

        return blog;
      });
      setBlogs(updatedBlogs);
    } catch (error) {
      setNotification(error.message);
    }
  }

  async function deleteBlog({ id, title }) {
    try {
      const confirmation = window.confirm(
        `Do You really want to delete "${title} ?"`,
      );
      if (!confirmation) return;
      await blogDelete(user, id);
      setBlogs(blogs.filter((blog) => blog.id !== id));
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
      {blogs
        .toSorted((a, b) => Number(b.likes) - Number(a.likes))
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            incrementLikes={incrementLikes}
            user={user}
            deleteBlog={deleteBlog}
          />
        ))}
    </div>
  );
}
