import { useState } from "react";
import { CreationForm } from "./CreationForm";
import { PersonRenderer } from "./PersonsRenderer";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <>
      <h1>PhoneBook</h1>
      <CreationForm persons={persons} setPersons={setPersons} />
      <PersonRenderer persons={persons} />
    </>
  );
}

export default App;
