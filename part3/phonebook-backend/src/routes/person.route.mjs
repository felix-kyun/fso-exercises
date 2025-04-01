import express from "express";
import {
  createPerson,
  deletePerson,
  getAllPerson,
  getPerson,
  updatePerson,
} from "../controllers/person.controller.mjs";
import { asyncHandler } from "../middlewares/asyncHandler.middleware.mjs";

const router = express.Router();

router.route("/").get(getAllPerson).post(createPerson);
router.route("/:id").get(getPerson).delete(deletePerson).put(updatePerson);

export default router;
