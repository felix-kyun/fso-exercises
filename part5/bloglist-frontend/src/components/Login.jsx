import { useState } from "react";
import { login, signup } from "../utils/serverFunctions.mjs";

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
      // reset();
      console.error(error.message);
    }
  }

  async function handleSignup(ev) {
    ev.preventDefault();
    try {
      const user = await signup(username, name, password);
      setUser(user);
    } catch (error) {
      // reset();
      console.error(error.message);
    }
  }

  return (
    <div>
      <h2>Log In</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
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
