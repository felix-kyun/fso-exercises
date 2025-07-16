import z from "zod";

export enum PatientGender {
    Male = "male",
    Female = "female",
    Others = "other",
}

export const newPatientSchema = z.object({
    name: z.string(),
    dateOfBirth: z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid Date Format"),
    ssn: z.string(),
    gender: z.enum(PatientGender),
    occupation: z.string(),
});

export type Patient = {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: PatientGender;
    occupation: string;
};

export type NonSensitivePatient = Omit<Patient, "ssn">;
export type NewPatient = z.infer<typeof newPatientSchema>;
