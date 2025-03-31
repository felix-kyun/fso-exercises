import { db } from "../../db.mjs";

export function checkDuplicateId(newId) {
  return db.persons.some((p) => Number(p.id) === newId);
}
