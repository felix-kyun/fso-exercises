import { useState } from "react";
import { Login } from "./components/Login";
import { BlogsList } from "./components/BlogsList";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Welcome to the Blog List</h1>
      {user ? <BlogsList user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
