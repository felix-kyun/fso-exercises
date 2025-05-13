import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
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
      <Box display="flex" paddingX="10px" marginY="20px">
        <TextField
          id="outlined-basic"
          label="Comment"
          variant="outlined"
          sx={{ paddingX: "10px" }}
          slotProps={{
            htmlInput: {
              value: input,
              onChange: (ev) => {
                setInput(ev.target.value);
              },
            },
          }}
        />
        <Button
          variant="outlined"
          type="comment"
          onClick={handleCreation}
          color="info"
        >
          Create
        </Button>
      </Box>
      <List>
        {comments.map(({ comment, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemText primary={comment} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
