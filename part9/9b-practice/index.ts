import express, { Request, Response, Express } from "express";
import { toNumber } from "./utils";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const PORT: number = 3000;
const app: Express = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
    res.send("pong");
});

app.get("/hello", (_req, res) => {
    res.send("Hello Full Stack!");
});

app.get("/bmi", (req: Request, res: Response) => {
    const { height, weight } = req.query as {
        height?: string;
        weight?: string;
    };

    if (!height || !weight) {
        res.status(400).json({
            error: "malformatted parameters",
        });
        return;
    }

    try {
        const heightInCm: number = toNumber(height);
        const weightInKg: number = toNumber(weight);

        res.json({
            height: heightInCm,
            weight: weightInKg,
            bmi: calculateBmi(heightInCm, weightInKg),
        });
        return;
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({
                error: error.message,
            });
            return;
        }
    }

    res.status(500).json({
        error: "something went wrong",
    });
});

app.post("/exercises", (req: Request, res: Response) => {
    const { daily_exercises, target } = req.body as {
        daily_exercises?: number[];
        target?: number;
    };

    if (!daily_exercises || !target) {
        res.status(400).json({
            error: "parameters missing",
        });
        return;
    }

    // data type check
    try {
        const dailyData = daily_exercises.map(toNumber);
        const targetData = toNumber(target);

        res.status(200).json(calculateExercises(dailyData, targetData));
    } catch (error: unknown) {
        if (error instanceof Error)
            res.status(400).json({
                error: "malformatted parameters",
            });
        else
            res.status(500).json({
                error: "something went wrong",
            });
    }

    return;
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
