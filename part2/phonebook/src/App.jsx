import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPersons([...persons, { name: newName }]);
    setNewName("");
  }

  return (
    <>
      <h1>PhoneBook</h1>
      <form>
        <div>
          name:
          <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
