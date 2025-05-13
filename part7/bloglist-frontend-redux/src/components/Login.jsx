import { useState } from "react";
import { login, signup } from "../utils/serverFunctions.mjs";
import { InputBox } from "./InputBox";
import { Notify } from "./Notify";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user.reducer.mjs";
import { Box, Button, TextField } from "@mui/material";

export function Login() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const dispatch = useDispatch();

  function reset() {
    setUsername("");
    setPassword("");
    setName("");
  }

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      const user = await login(username, password);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setUser(user));
    } catch (error) {
      reset();
      setNotification(error.message);
    }
  }

  async function handleSignup(ev) {
    ev.preventDefault();
    try {
      const user = await signup(username, name, password);
      setNotification("User created successfully");
      reset();
    } catch (error) {
      reset();
      setNotification(error.message);
    }
  }

  return (
    <div>
      <Notify notification={notification} setNotification={setNotification} />
      <h2>Log In</h2>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "33vw",
            marginBottom: "10px",
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            slotProps={{
              htmlInput: {
                value: username,
                onChange: (ev) => {
                  setUsername(ev.target.value);
                },
              },
            }}
          />
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            slotProps={{
              htmlInput: {
                value: name,
                onChange: (ev) => {
                  setName(ev.target.value);
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            slotProps={{
              htmlInput: {
                value: password,
                onChange: (ev) => {
                  setPassword(ev.target.value);
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            type="submit"
            onClick={handleLogin}
            color="info"
          >
            Login
          </Button>
          <Button
            variant="outlined"
            type="submit"
            onClick={handleSignup}
            color="info"
          >
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
}
