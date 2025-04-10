import { useState } from "react";
import { createBlog } from "../utils/serverFunctions.mjs";
import { InputBox } from "./InputBox";

export function BlogCreation({ user, setBlogs }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [likes, setLikes] = useState(0);

  function reset() {
    setTitle("");
    setAuthor("");
    setUrl("");
    setLikes(0);
  }

  async function handleCreateBlog(ev) {
    ev.preventDefault();
    try {
      const blog = { title, author, url, likes };
      const createdBlog = await createBlog(user, blog);

      setBlogs((prevBlogs) => [...prevBlogs, createdBlog]);
    } catch (error) {
      console.error(error.message);
    }
    reset();
  }

  return (
    <div>
      <form>
        <InputBox placeholder="Title" value={title} setValue={setTitle} />
        <InputBox placeholder="Author" value={author} setValue={setAuthor} />
        <InputBox placeholder="URL" value={url} setValue={setUrl} />
        <InputBox
          placeholder="Likes"
          value={likes}
          setValue={setLikes}
          type="number"
        />
        <button type="submit" onClick={handleCreateBlog}>
          Create
        </button>
      </form>
    </div>
  );
}
