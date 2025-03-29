import { deletePerson } from "./misc/server.mjs";
import "./PersonTableView.css";

export function PersonTableView({ persons, setPersons }) {
  const handleDelete = (id) => () => {
    deletePerson(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  return (
    <table>
      <tbody>
        {persons.map(({ id, name, phone }) => (
          <tr key={id}>
            <td>
              <button className="deletePersonButton" onClick={handleDelete(id)}>
                X
              </button>
            </td>
            <td>{name}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
