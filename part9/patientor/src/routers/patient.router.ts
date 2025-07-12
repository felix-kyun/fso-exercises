import { Router } from "express";
import {
    createPatient,
    getAllPatients,
} from "../controllers/patient.controller";

export const patientsRouter: Router = Router();

patientsRouter.route("/").get(getAllPatients).post(createPatient);
