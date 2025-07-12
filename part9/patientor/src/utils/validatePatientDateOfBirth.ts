export function validatePatientDateOfBirth(dateOfBirth: string): boolean {
    return Boolean(Date.parse(dateOfBirth));
}
