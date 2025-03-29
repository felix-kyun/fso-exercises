export function CountryList({ countries, setMatch }) {
  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {countries.map((c) => (
          <li key={c.name.official}>
            {c.name.official}
            <button
              onClick={() => {
                setMatch([
                  countries.find(
                    (country) => c.name.official === country.name.official,
                  ),
                ]);
              }}
            >
              Show
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
