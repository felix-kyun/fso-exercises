import axios from "axios";
const server_url = 'http://localhost:3000/persons';

export const getAllPersons = async () => {
  const raw = await axios.get(server_url);
  return raw.data;
}

export const addPerson = async (person) => {
  const raw = await axios.post(server_url, person);
  return raw.data;
}

export const updatePerson = async (person) => {
  const raw = await axios.put(`${server_url}/${person.id}`, person);
  return raw.data;
}

