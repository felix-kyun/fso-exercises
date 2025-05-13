import { useNavigate } from "react-router";
import { ListItem, ListItemText, ListItemButton } from "@mui/material";

export function Blog({ blog, incrementLikes, deleteBlog, user }) {
  const nav = useNavigate();
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => nav(`/blogs/${blog.id}`)}>
          <ListItemText primary={`${blog.title} - ${blog.author}`} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
