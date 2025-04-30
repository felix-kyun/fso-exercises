import { useState } from "react";
import { useNavigate } from "react-router";
import { useField } from "../hooks/useField";
import { Form, Button } from "react-bootstrap";

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
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>content</Form.Label>
          <Form.Control {...content} />
        </Form.Group>
        <Form.Group>
          <Form.Label>author</Form.Label>
          <Form.Control {...author} />
        </Form.Group>
        <Form.Group>
          <Form.Label>url for more info</Form.Label>
          <Form.Control {...info} />
        </Form.Group>

        <Button variant="primary" type="submit">
          create
        </Button>
        <Button variant="secondary" onClick={reset}>
          reset
        </Button>
      </Form>
    </div>
  );
};
