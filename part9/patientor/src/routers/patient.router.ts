import { Router } from "express";
import { getAllPatients } from "../controllers/patient.controller";

export const patientsRouter: Router = Router();

patientsRouter.route("/").get(getAllPatients);
