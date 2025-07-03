interface ExerciseStats {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: 1 | 2 | 3;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (data: number[], target: number): ExerciseStats => {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
