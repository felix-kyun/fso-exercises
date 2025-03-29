import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { useEffect } from "react";
import { getAllCountries } from "./misc/api.mjs";
import { ResultRenderer } from "./ResultRenderer";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCountries().then((c) => setCountries(c));
  }, []);

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <ResultRenderer search={search} countries={countries} />
    </>
  );
}
