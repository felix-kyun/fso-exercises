import { useEffect, useState } from "react";
import { getBlogs } from "../utils/serverFunctions.mjs";
import { Blog } from "./Blog";

export function BlogsList({ user }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setBlogs(await getBlogs());
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
