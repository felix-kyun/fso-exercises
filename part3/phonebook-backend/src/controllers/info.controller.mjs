import { db } from "../../db.mjs";

export async function showInfo(req, res) {
  res
    .status(200)
    .send(
      `Phonebook has info for ${db.persons.length} people\n${new Date().toString()}`,
    );
}
