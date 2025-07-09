import { Request, Response } from "express";
import { patients } from "../data/patients";
import { NonSensitivePatient } from "../types/patient";

export const getAllPatients = (
    _req: Request,
    res: Response<NonSensitivePatient[]>
): void => {
    const nonSensitivePatients: NonSensitivePatient[] = patients.map(
        ({ ssn: _ssn, ...rest }) => rest
    );
    res.status(200).json(nonSensitivePatients);
};
