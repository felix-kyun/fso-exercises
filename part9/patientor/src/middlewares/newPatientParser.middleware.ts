import { NextFunction, Request, Response } from "express";
import { parsePatient } from "../utils/parsePatient";
import { ZodError } from "zod";
import ValidationError from "../errors/ValidationError";

export const newPatientParser = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    try {
        parsePatient(req.body);
        next();
    } catch (error: unknown) {
        if (error instanceof ZodError) throw new ValidationError(error);
        else throw error;
    }
};
