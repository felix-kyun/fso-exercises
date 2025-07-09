import { diagnosis } from "../data/diagnoses";
import { Diagnosis } from "../types/diagnosis";

export const getDiagnosesData = (): Diagnosis[] => {
    return diagnosis;
};
