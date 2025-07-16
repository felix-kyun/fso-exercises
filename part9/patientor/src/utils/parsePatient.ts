import { NewPatient, newPatientSchema } from "../types/patient";

export const parsePatient = (data: unknown): NewPatient => {
    return newPatientSchema.parse(data);
};
