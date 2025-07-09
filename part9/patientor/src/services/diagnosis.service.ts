import diagnoses from "../data/diagnoses";
import { Diagnosis } from "../types/diagnosis";

export const getDiagnosesData = (): Diagnosis[] => {
    return diagnoses;
};
