import { Request, Response } from "express";
import { getDiagnosesData } from "../services/diagnosis.service";
import { Diagnosis } from "../types/diagnosis";

export const getAllDiagnoses = (
    _req: Request,
    res: Response<Diagnosis[]>
): void => {
    const diagnosis: Diagnosis[] = getDiagnosesData();
    res.status(200).json(diagnosis);
};
