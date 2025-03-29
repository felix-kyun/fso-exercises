import { useState } from "react";
import { CreationForm } from "./CreationForm";
import { PersonRenderer } from "./PersonsRenderer";
import { useEffect } from "react";
import { getAllPersons } from "./misc/server.mjs";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAllPersons().then((p) => setPersons(p));
  }, []);

  return (
    <>
      <h1>PhoneBook</h1>
      <CreationForm persons={persons} setPersons={setPersons} />
      <PersonRenderer persons={persons} setPersons={setPersons} />
    </>
  );
}

export default App;
