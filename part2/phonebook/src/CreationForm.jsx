import { FormInput } from "./FormInput";
import { useState } from "react";
import { addPerson, updatePerson } from "./misc/server.mjs";

export function CreationForm({ persons, setPersons, setMessage }) {
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

    // check if person exsists
    let person = persons.find((person) => person.name === newName);
    if (person) {
      updatePerson({ ...person, phone: newPhone }).then((p) => {
        setPersons(persons.map((person) => (person.id === p.id ? p : person)));
        setMessage({ level: "success", data: `Updated ${p.name}` });
      });
    } else {
      addPerson({ name: newName, phone: newPhone }).then((p) => {
        setPersons([...persons, p]);
        setMessage({ level: "success", data: `Added ${p.name}` });
      });
    }
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
