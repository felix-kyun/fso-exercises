export const toNumber = (input: unknown) => {
    const convertedInput = Number(input);
    if (isNaN(convertedInput)) throw new Error(`Invalid Number: "${input}"`);
    return convertedInput;
};
