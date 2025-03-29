import { useState } from "react";
import { FormInput } from "./FormInput";
import { PersonTableView } from "./PersonTableView";

export function PersonRenderer({ persons, setPersons, setMessage }) {
  const [search, setSearch] = useState("");

  // make the final list of person
  const finalPersons =
    search === ""
      ? persons
      : persons.filter(({ name }) => name.includes(search));

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h3>Numbers</h3>
      <FormInput
        label="Search"
        value={search}
        onChange={changeSearch}
        className="search"
      />
      <PersonTableView persons={finalPersons} setPersons={setPersons} setMessage={setMessage} />
    </div>
  );
}
