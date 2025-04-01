import { StatusCodes } from "http-status-codes";
import { Person } from "../models/person.model.mjs";

export async function showInfo(req, res) {
  return res
    .status(StatusCodes.OK)
    .send(
      `Phonebook has info for ${(await Person.find({})).length} people\n${new Date().toString()}`,
    );
}
