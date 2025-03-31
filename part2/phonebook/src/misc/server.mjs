import axios from "axios";
const server_url = "/api/persons";

export const getAllPersons = async () => {
  const raw = await axios.get(server_url);
  return raw.data;
};

export const addPerson = async (person) => {
  const raw = await axios.post(server_url, person);
  return raw.data;
};

// only put is used in the tutorial
export const updatePerson = async (person) => {
  const raw = await axios.put(`${server_url}/${person.id}`, person);
  return raw.data;
};

export const deletePerson = async (id) => {
  try {
    return (await axios.delete(`${server_url}/${id}`)).status;
  } catch (error) {
    throw error;
  }
};
