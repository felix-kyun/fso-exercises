import express from "express";
import {
  createPerson,
  deletePerson,
  getAllPerson,
  getPerson,
} from "../controllers/person.controller.mjs";

const router = express.Router();

router.route("/").get(getAllPerson).post(createPerson);
router.route("/:id").get(getPerson).delete(deletePerson);

export default router;
