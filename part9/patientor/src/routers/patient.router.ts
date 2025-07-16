import { Router } from "express";
import {
    createPatient,
    getAllPatients,
} from "../controllers/patient.controller";
import { newPatientParser } from "../middlewares/newPatientParser.middleware";

export const patientsRouter: Router = Router();

patientsRouter
    .route("/")
    .get(getAllPatients)
    .post(newPatientParser, createPatient);
