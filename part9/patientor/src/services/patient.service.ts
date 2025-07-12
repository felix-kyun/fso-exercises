import { NewPatient, Patient } from "../types/patient";
import { patients } from "../data/patients";
import { v4 as uuidv4 } from "uuid";

export const getPatientsData = (): Patient[] => {
    return patients;
};

export const createPatientService = (newPatient: NewPatient): Patient => {
    const patient: Patient = {
        id: uuidv4(),
        ...newPatient,
    };

    patients.push(patient);
    return patient;
};
