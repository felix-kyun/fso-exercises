// quick type guard to narrow type
export const validateObjectFields = <T>(
    obj: unknown,
    requiredFields: (keyof T)[]
): obj is T => {
    // check if the object is defined and is of type object
    if (!obj || typeof obj !== "object") {
        return false;
    }

    // check if all required fields are present and not undefined or null
    return requiredFields.every(
        (field) =>
            field in obj &&
            (obj as T)[field] !== undefined &&
            (obj as T)[field] !== null
    );
};
