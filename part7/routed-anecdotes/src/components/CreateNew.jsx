import { useState } from "react";
import { useNavigate } from "react-router";
import { useField } from "../hooks/useField";

export const CreateNew = (props) => {
  const navigate = useNavigate();

  const [content, contentReset] = useField("text");
  const [author, authorReset] = useField("text");
  const [info, infoReset] = useField("text");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });

    navigate("/", {
      replace: true,
    });
  };

  const reset = (ev) => {
    ev.preventDefault();
    contentReset();
    authorReset();
    infoReset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>
        <button onClick={reset}>reset</button>
      </form>
    </div>
  );
};
