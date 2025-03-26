import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setName] = useState("");
  const [newPhone, setPhone] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (persons.some((person) => person.name === newName))
      return alert(`${newName} is already added to phonebook`);

    setPersons([...persons, { name: newName, phone: newPhone }]);
    setName("");
    setPhone("");
  }

  return (
    <>
      <h1>PhoneBook</h1>
      <form>
        <label htmlFor="inputName">Name: </label>
        <input
          type="text"
          className="inputName"
          value={newName}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="inputPhone">Phone: </label>
        <input
          type="text"
          className="inputPhone"
          value={newPhone}
          onChange={handlePhoneChange}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Numbers</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(({ name, phone }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
