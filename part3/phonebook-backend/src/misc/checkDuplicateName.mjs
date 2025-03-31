import { db } from "../../db.mjs";

export function checkDuplicateName(name) {
  return db.some((p) => p.name === name);
}
