import { NewPatient } from "../types/patient";
import { validateObjectFields } from "./validateObjectFields";
import { validatePatientDateOfBirth } from "./validatePatientDateOfBirth";
import { validatePatientGender } from "./validatePatientGender";

const PATIENT_FIELDS: (keyof NewPatient)[] = [
    "name",
    "dateOfBirth",
    "ssn",
    "occupation",
    "gender",
];

export const parsePatient = (data: unknown): NewPatient => {
    if (!data || typeof data !== "object") {
        throw new Error("Invalid data format");
    }

    if (!validateObjectFields<NewPatient>(data, PATIENT_FIELDS))
        throw new Error("Missing required fields");

    const { dateOfBirth, gender } = data;

    if (!validatePatientDateOfBirth(dateOfBirth))
        throw new Error("Invalid date of birth");

    if (!validatePatientGender(gender)) throw new Error("Invalid gender");

    return data;
};
