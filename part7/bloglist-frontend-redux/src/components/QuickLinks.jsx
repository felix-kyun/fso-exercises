import { useSelector } from "react-redux";
import { Link } from "react-router";
import { setUser } from "../reducers/user.reducer.mjs";
import { UserActions } from "./UserActions";
import { AppBar, Typography, Button, Toolbar, Container } from "@mui/material";
import { useNavigate } from "react-router";

const pages = ["Products", "Pricing", "Blog"];

export const QuickLinks = () => {
  const user = useSelector((state) => state.user);
  const nav = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Blog App
        </Typography>
        <Button color="inherit" onClick={() => nav("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => nav("/users")}>
          Users
        </Button>

        <UserActions user={user} setUser={setUser} />
      </Toolbar>
    </AppBar>
  );
};
