import { deletePerson } from "./misc/server.mjs";
import "./PersonTableView.css";

export function PersonTableView({ persons, setPersons, setMessage }) {
  const handleDelete = (id) => () => {
    const confirm = window.confirm(
      `Do you really want to delete ${persons.find((p) => p.id === id)?.name}?`,
    );

    if (confirm) {
      deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          if (error.status === 404) {
            setMessage({
              level: "error",
              data: `Information of ${persons.find((p) => p.id === id)?.name} has already been removed from the server`,
            });

            setPersons(persons.filter((person) => person.id !== id));
          } else {
            setMessage({
              level: "error",
              data: `Error deleting ${persons.find((p) => p.id === id)?.name}`,
            });
          }
        });
      setMessage({
        level: "error",
        data: `Deleted ${persons.find((p) => p.id === id)?.name}`,
      });
    }
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
