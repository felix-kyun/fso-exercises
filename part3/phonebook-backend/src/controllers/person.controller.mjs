import { checkDuplicateName } from "../misc/checkDuplicateName.mjs";
import { db } from "../../db.mjs";
import { Person } from "../models/person.model.mjs";
import { ServerError } from "../middlewares/errorHandler.middleware.mjs";
import { StatusCodes } from "http-status-codes";

export async function getAllPerson(req, res) {
  const persons = await Person.find({});
  res.status(200).json(persons);
}

export async function getPerson(req, res) {
  const { id } = req.params;
  const person = await Person.findById(id);

  if (!id || !person) {
    throw new ServerError(404, "Person doesn't exsist");
  }

  return res.status(StatusCodes.OK).json(person);
}

export async function deletePerson(req, res) {
  const { id } = req.params;

  const deletedPerson = await Person.findByIdAndDelete(id);

  if (!deletedPerson) {
    throw new ServerError(StatusCodes.NOT_FOUND, "Person doesn't exsist");
  }

  return res.status(StatusCodes.NO_CONTENT).send();
}

export async function createPerson(req, res) {
  const { name, number } = req.body;

  if (!name || !number) {
    throw new ServerError(StatusCodes.BAD_REQUEST, "name or number is invalid");
  }

  const newPerson = await Person.create({ name, number });

  return res.status(StatusCodes.CREATED).send(newPerson);
}

export async function updatePerson(req, res) {
  const { id } = req.params;
  const { name, number } = req.body;

  if (!name || !number) {
    throw new ServerError(StatusCodes.BAD_REQUEST, "name or number is invalid");
  }

  const person = await Person.findById(id);
  person.name = name ?? person.name;
  person.number = number ?? person.number;

  await person.save();

  return res.status(StatusCodes.OK).send(person);
}
