import { useEffect, useState } from "react";
import { createBlog, getBlogs } from "../utils/serverFunctions.mjs";
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

  return (
    <div>
      <Notify notification={notification} setNotification={setNotification} />
      <Togglable buttonLabel="Create New Blog" ref={creationRef}>
        <h2>Create New Blog</h2>
        <BlogCreation createBlog={createNewBlog} />
      </Togglable>

      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
