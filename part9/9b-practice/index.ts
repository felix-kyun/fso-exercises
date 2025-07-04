import express, { Request, Response, Express } from "express";
import { toNumber } from "./utils";
import { calculateBmi } from "./bmiCalculator";

const PORT: number = 3000;
const app: Express = express();

app.get("/ping", async (_req, res) => {
    res.send("pong");
});

app.get("/hello", async (_req, res) => {
    res.send("Hello Full Stack!");
});

app.get("/bmi", async (req: Request, res: Response) => {
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

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
