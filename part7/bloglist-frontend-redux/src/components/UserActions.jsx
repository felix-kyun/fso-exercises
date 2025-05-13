import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeUser } from "../reducers/user.reducer.mjs";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

export function UserActions() {
  const user = useSelector((state) => state.user);
  const nav = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(removeUser());
    localStorage.removeItem("user");
  }

  if (!user) {
    return (
      <Button color="inherit" onClick={() => nav("/")}>
        Log In
      </Button>
    );
  }

  return (
    <>
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        Logged in as {user.name}
      </Typography>
      <Button color="inherit" onClick={logout}>
        Logout
      </Button>
    </>
  );
}
