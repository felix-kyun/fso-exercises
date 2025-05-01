import { useState } from "react";
import { useNavigate } from "react-router";
import { useField } from "../hooks/useField";
import { Button, TextField } from "@mui/material";

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
          <TextField label="content" {...content} />
        </div>
        <div>
          <TextField label="author" {...author} />
        </div>
        <div>
          <TextField label="url for more info" {...info} />
        </div>
        <div>
          <Button type="submit" variant="contained">
            create
          </Button>
          <Button variant="outlined" onClick={reset}>
            reset
          </Button>
        </div>
      </form>
    </div>
  );
};
