export type Patient = {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: "male" | "female" | "other";
    occupation: string;
};

export type NonSensitivePatient = Omit<Patient, "ssn">;
