import { generateRandomId } from "../misc/generateRandomId.mjs";
import { checkDuplicateId } from "../misc/checkDuplicateId.mjs";
import { checkDuplicateName } from "../misc/checkDuplicateName.mjs";
import { db } from "../../db.mjs";

export async function getAllPerson(req, res) {
  res.status(200).json(db.persons);
}

export async function getPerson(req, res) {
  const { id } = req.params;
  const person = db.persons.find(({ id: pid }) => pid === id);

  if (!id || !person) {
    res.statusMessage = "Person doesn't exsist";
    return res.status(404).send();
  }

  return res.status(200).json(person);
}

export async function deletePerson(req, res) {
  const { id } = req.params;

  const newData = db.persons.filter((p) => p.id !== id);

  if (newData.length === db.persons.length) {
    // res.statusMessage = "Person doesn't exsist";
    return res.status(404).send();
  }

  db.persons = newData;
  return res.status(204).send();
}

export async function createPerson(req, res) {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({
      error: "name or number is invalid",
    });
  }

  if (checkDuplicateName(name)) {
    return res.status(409).json({
      error: "Person with the name already exsists",
    });
  }

  let newId = generateRandomId();

  while (checkDuplicateId(newId)) {
    newId = generateRandomId();
  }

  const newPerson = { id: newId, name, number };
  db.persons.push(newPerson);

  return res.status(201).send(newPerson);
}
