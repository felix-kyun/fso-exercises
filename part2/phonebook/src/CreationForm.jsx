import { FormInput } from "./FormInput";
import { useState } from "react";
import { addPerson } from "./misc/server.mjs";

export function CreationForm({ persons, setPersons }) {
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

    addPerson({ name: newName, phone: newPhone }).then((p) =>
      setPersons([...persons, p]),
    );
    setName("");
    setPhone("");
  }

  return (
    <>
      <h3>Add new number</h3>
      <form>
        <FormInput
          label="Name"
          value={newName}
          onChange={handleNameChange}
          className="name"
        />
        <FormInput
          label="Phone"
          value={newPhone}
          onChange={handlePhoneChange}
          className="phone"
        />
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </form>
    </>
  );
}
