import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

export async function getCountry(name) {
  const raw = await axios.get(`${baseUrl}/name/${name}`);
  const matchedCountries = raw.data;

  console.log(matchedCountries);

  return matchedCountries;
}

export async function getAllCountries() {
  const raw = await axios.get(`${baseUrl}/all`);
  const matchedCountries = raw.data;

  return matchedCountries;
}

export async function getTemperature(place) {
  const geocode = (
    await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search\?name\=${place}`,
    )
  ).data.results;
  const weather = (
    await axios.get(
      `https://api.open-meteo.com/v1/forecast\?latitude\=${geocode[0].latitude}\&longitude\=${geocode[0].longitude}\&current\=temperature_2m,windspeed_10m`,
    )
  ).data;
  return {
    temp: `${weather.current.temperature_2m} ${weather.current_units.temperature_2m}`,
    wind: `${weather.current.windspeed_10m} ${weather.current_units.windspeed_10m}`,
  };
}
