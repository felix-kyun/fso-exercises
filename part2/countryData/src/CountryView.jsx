import { useState, useEffect } from "react";
import { getTemperature } from "./misc/api.mjs";

export function CountryView({ countryData }) {
  const [tempData, setTempData] = useState({});
  if (!countryData) {
    return null;
  }

  const {
    area,
    capital: [capital],
    name: { official },
    flags: { png: flag, alt },
    languages,
  } = countryData;

  useEffect(() => {
    getTemperature(capital).then(setTempData);
  }, [countryData]);

  return (
    <div>
      <h1>{official}</h1>
      <p> Capital: {capital} </p>
      <p> Area: {area}</p>

      <h2>Languages</h2>
      <ul>
        {Object.values(languages).map((l) => (
          <li key={l}> {l} </li>
        ))}
      </ul>
      <br />
      <img src={flag} alt={alt} />
      <h2> Weather in {capital} </h2>
      Temperature: {tempData?.temp}
      <br />
      Wind: {tempData?.wind}
    </div>
  );
}
