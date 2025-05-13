import { useState } from "react";
import { InputBox } from "./InputBox";
import { Box, Button, TextField } from "@mui/material";

export function BlogCreation({ createBlog }) {
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
    createBlog({ title, author, url, likes });
    reset();
  }

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="33vw"
          marginY="20px"
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            margin="normal"
            slotProps={{
              htmlInput: {
                value: title,
                onChange: (ev) => {
                  setTitle(ev.target.value);
                },
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Author"
            variant="outlined"
            margin="normal"
            slotProps={{
              htmlInput: {
                value: author,
                onChange: (ev) => {
                  setAuthor(ev.target.value);
                },
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Url"
            variant="outlined"
            margin="normal"
            slotProps={{
              htmlInput: {
                value: url,
                onChange: (ev) => {
                  setUrl(ev.target.value);
                },
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Likes"
            variant="outlined"
            margin="normal"
            slotProps={{
              htmlInput: {
                value: likes,
                onChange: (ev) => {
                  setLikes(ev.target.value);
                },
              },
            }}
          />
          <Button
            variant="outlined"
            type="submit"
            onClick={handleCreateBlog}
            color="info"
          >
            Create
          </Button>
        </Box>
      </form>
    </div>
  );
}
