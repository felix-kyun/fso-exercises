import { useState } from "react";
import { CreationForm } from "./CreationForm";
import { PersonRenderer } from "./PersonsRenderer";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/persons")
      // .then((res) => res.json()) // only for fetch
      .then(raw => raw.data)
      .then((data) => setPersons(data));
  }, []);

  return (
    <>
      <h1>PhoneBook</h1>
      <CreationForm persons={persons} setPersons={setPersons} />
      <PersonRenderer persons={persons} />
    </>
  );
}

export default App;
