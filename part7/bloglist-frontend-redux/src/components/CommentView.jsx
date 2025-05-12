import { useEffect } from "react";
import { useState } from "react";
import { useMatch } from "react-router";

export const CommentView = () => {
  const match = useMatch("/blogs/:id");
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const id = match?.params.id;

  useEffect(() => {
    async function fetchComments(id) {
      const res = await fetch(`http://localhost:3000/api/blogs/${id}/comments`);

      if (!res.ok) return;

      const data = await res.json();
      setComments(data);
    }

    fetchComments(id);
  }, [id]);

  async function handleCreation(ev) {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: input }),
    });

    const createdComment = await res.json();
    setComments([...comments, createdComment]);
    setInput("");
  }

  if (!match) return null;

  return (
    <div>
      <h3>Comments</h3>
      <input
        type="text"
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
      <button onClick={handleCreation}>Comment</button>
      <ul>
        {comments.map(({ comment, id }) => (
          <li key={id}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};
