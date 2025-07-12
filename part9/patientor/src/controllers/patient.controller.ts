import { Request, Response } from "express";
import { patients } from "../data/patients";
import { NonSensitivePatient, Patient } from "../types/patient";
import { parsePatient } from "../utils/parsePatient";
import ServerError from "../errors/serverError.error";
import { createPatientService } from "../services/patient.service";

export const getAllPatients = (
    _req: Request,
    res: Response<NonSensitivePatient[]>
): void => {
    const nonSensitivePatients: NonSensitivePatient[] = patients.map(
        ({ ssn: _ssn, ...rest }) => rest
    );
    res.status(200).json(nonSensitivePatients);
};

export const createPatient = (
    req: Request,
    res: Response<NonSensitivePatient>
): void => {
    try {
        const newPatient: Patient = createPatientService(
            parsePatient(req.body)
        );
        const { ssn: _ssn, ...nonSensitivePatient } = newPatient;

        res.status(201).json(nonSensitivePatient);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new ServerError("Invalid patient data", 400);
        } else {
            throw new ServerError("An unexpected error occurred", 500);
        }
    }
};
