export function SearchBar({ search, setSearch }) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <form>
      <label htmlFor="searchInput">Search Countries: </label>
      <input
        type="text"
        className="searchInput"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}
