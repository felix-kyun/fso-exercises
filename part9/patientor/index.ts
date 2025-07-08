import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const PORT: number = 3001;

app.use(cors());

app.get("/api/ping", (_req: Request, res: Response) => {
    res.status(200).send("pong");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
