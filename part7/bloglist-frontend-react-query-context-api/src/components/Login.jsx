import { useState } from "react";
import { login, signup } from "../utils/serverFunctions.mjs";
import { InputBox } from "./InputBox";
import { Notify } from "./Notify";
import { useSetNotification } from "../providers/notification.provider";
import { useUser } from "../contexts/user.context.mjs";
import { setUserAction } from "../reducers/user.reducer.mjs";

export function Login() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const setNotification = useSetNotification();
  const [_, userDispatch] = useUser();

  function reset() {
    setUsername("");
    setPassword("");
    setName("");
  }

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      const user = await login(username, password);
      userDispatch(setUserAction(user));
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
      <Notify />
      <h2>Log In</h2>
      <form>
        <InputBox
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <InputBox placeholder="name" value={name} setValue={setName} />
        <InputBox
          placeholder="Password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <button type="submit" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
}
