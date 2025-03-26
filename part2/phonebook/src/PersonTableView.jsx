export function PersonTableView({ persons }) {
  return (
    <table>
      <tbody>
        {persons.map(({ name, phone }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
