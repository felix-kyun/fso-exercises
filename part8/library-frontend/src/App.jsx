import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { Routes } from "react-router";
import { Route } from "react-router";
import { useNavigate } from "react-router";

const App = () => {
  const nav = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => nav("/authors")}>authors</button>
        <button onClick={() => nav("/books")}>books</button>
        <button onClick={() => nav("/add")}>add book</button>
      </div>

      <br />

      <Routes>
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add" element={<NewBook />} />
      </Routes>
    </div>
  );
};

export default App;
