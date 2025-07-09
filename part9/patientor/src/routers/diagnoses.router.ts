import { Router } from "express";
import { getAllDiagnoses } from "../controllers/diagnoses.controller";

export const diagnosesRouter: Router = Router();

diagnosesRouter.route("/").get(getAllDiagnoses);
