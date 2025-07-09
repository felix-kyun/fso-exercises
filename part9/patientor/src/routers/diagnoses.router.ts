import express, { Router } from "express";
import { getAllDiagnoses } from "../controllers/diagnoses.controller";

export const diagnosesRouter: Router = express.Router();

diagnosesRouter.route("/").get(getAllDiagnoses);
