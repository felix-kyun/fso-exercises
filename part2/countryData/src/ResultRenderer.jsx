import { useEffect, useState } from "react";
import { CountryView } from "./CountryView";
import { CountryList } from "./CountryList";

export function ResultRenderer({ search, countries }) {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    setMatch(
      countries.filter(({ name: { official } }) =>
        official.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search]);

  if (search === "") {
    return null;
  }

  if (match.length === 1) {
    return <CountryView countryData={match[0]} />;
  } else if (match.length <= 10)
    return <CountryList countries={match} setMatch={setMatch} />;
  else return <p>Too many matches, specify another filter</p>;
}
