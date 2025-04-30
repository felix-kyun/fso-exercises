import { useState, useEffect } from "react";

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!name) {
      setCountry(null);
      return;
    }

    (async () => {
      const raw = await fetch(
        "https://studies.cs.helsinki.fi/restcountries/api/name/" + name,
      );

      if (raw.status === 404) {
        setCountry({ data: null, found: false });
        return;
      }
      const json = await raw.json();
      setCountry({ data: json, found: true });
    })();
  }, [name]);

  return country;
};

async function fetchCountry(name) {}
