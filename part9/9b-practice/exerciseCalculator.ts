import { toNumber } from "./utils";
import { argv, exit } from "process";

interface ExerciseStats {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: 1 | 2 | 3;
    ratingDescription: string;
    target: number;
    average: number;
}

export const calculateExercises = (
    data: number[],
    target: number
): ExerciseStats => {
    const average = data.reduce((prev, cur) => prev + cur, 0) / data.length;
    const trainingDays = data.filter((n) => n != 0).length;
    const rating = average >= target ? 3 : data.every((n) => n != 0) ? 2 : 1;
    const ratingDescription =
        average >= target
            ? "Well done"
            : data.every((n) => n != 0)
              ? "Try to acheive target everyday"
              : "You seriously need to start working regularly";

    return {
        periodLength: data.length,
        success: average >= target,
        trainingDays,
        average,
        target,
        rating,
        ratingDescription,
    };
};

if (require.main === module)
    try {
        if (argv.length < 4) {
            console.error("two or more values required");
            exit(1);
        }

        const [, , target, ...daily] = argv;
        const parsedDaily = daily.map(toNumber);
        const parsedTarget = toNumber(target);

        console.log(calculateExercises(parsedDaily, parsedTarget));
    } catch (error: any) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
