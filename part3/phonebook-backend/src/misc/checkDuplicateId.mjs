import { db } from "../../db.mjs";

export function checkDuplicateId(newId) {
  return db.some((p) => Number(p.id) === newId);
}
