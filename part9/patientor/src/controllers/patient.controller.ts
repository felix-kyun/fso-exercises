import { Request, Response } from "express";
import { patients } from "../data/patients";
import { NewPatient, NonSensitivePatient, Patient } from "../types/patient";
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
    req: Request<unknown, unknown, NewPatient>,
    res: Response<NonSensitivePatient>
): void => {
    try {
        const newPatient: Patient = createPatientService(req.body);
        const { ssn: _ssn, ...nonSensitivePatient } = newPatient;
        void _ssn; // idk why tsc complains about this var even after being prefixed wit h underscore, suprress the warning to keep my blood pressure down

        res.status(201).json(nonSensitivePatient);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new ServerError("An unexpected error occurred", 500);
        }
    }
};
