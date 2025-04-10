import { useState } from "react";
import { login, signup } from "../utils/serverFunctions.mjs";
import { InputBox } from "./InputBox";

export function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function reset() {
    setUsername("");
    setPassword("");
  }

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      const user = await login(username, password);
      setUser(user);
    } catch (error) {
      reset();
      console.error(error.message);
    }
  }

  async function handleSignup(ev) {
    ev.preventDefault();
    try {
      const user = await signup(username, name, password);
      setUser(user);
    } catch (error) {
      reset();
      console.error(error.message);
    }
  }

  return (
    <div>
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
