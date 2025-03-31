import { db } from "../../db.mjs";

export function checkDuplicateName(name) {
  return db.persons.some((p) => p.name === name);
}
