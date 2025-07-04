import { toNumber } from "./utils";
import { argv, exit } from "process";

const bmi = (height: number, weight: number): number =>
    weight / Math.pow(height, 2);

const toMetre = (cm: number): number => cm / 100;

export const calculateBmi = (height: number, weight: number): string => {
    const calculatedBmi = bmi(toMetre(height), weight);

    if (calculatedBmi < 16.0) return "Underweright (Severe thinness)";
    else if (calculatedBmi < 17.0) return "Underweright (Moderate thinness)";
    else if (calculatedBmi < 18.5) return "Underweright (Mild thinness)";
    else if (calculatedBmi < 25.0) return "Normal range";
    else if (calculatedBmi < 30.0) return "Overweight (Pre-obese)";
    else if (calculatedBmi < 35.0) return "Obese (Class I)";
    else if (calculatedBmi < 40.0) return "Obese (Class II)";
    else return "Obese (Class III)";
};

if (require.main === module)
    try {
        if (argv.length != 4) {
            console.error("it only accepts two values as input");
            exit(1);
        }

        const height = toNumber(argv[2]);
        const weight = toNumber(argv[3]);
        console.log(calculateBmi(height, weight));
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
