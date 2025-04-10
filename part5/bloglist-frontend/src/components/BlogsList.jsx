import { useEffect, useState } from "react";
import { getBlogs } from "../utils/serverFunctions.mjs";
import { Blog } from "./Blog";
import { BlogCreation } from "./BlogCreation";
import { Notify } from "./Notify";

export function BlogsList({ user }) {
  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState(null);

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

  return (
    <div>
      <Notify notification={notification} setNotification={setNotification} />
      <h2>Create New Blog</h2>
      <BlogCreation
        user={user}
        setBlogs={setBlogs}
        setNotification={setNotification}
      />
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
