export enum PatientGender {
    Male = "male",
    Female = "female",
    Others = "others",
}

export type Patient = {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: PatientGender;
    occupation: string;
};

export type NonSensitivePatient = Omit<Patient, "ssn">;
export type NewPatient = Omit<Patient, "id">;
