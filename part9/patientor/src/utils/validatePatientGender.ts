import { PatientGender } from "../types/patient";

export function validatePatientGender(gender: string): boolean {
    return Object.values(PatientGender)
        .map((value) => value.toString())
        .includes(gender);
}
