import { Patient } from "../types/patient";
import { patients } from "../data/patients";

export const getPatientsData = (): Patient[] => {
    return patients;
};
