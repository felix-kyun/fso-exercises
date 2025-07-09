import express, { Express } from "express";
import cors from "cors";
import { diagnosesRouter } from "./routers/diagnoses.router";
import { errorHandler } from "./middlewares/errorHandler.middlewares";

const app: Express = express();
const PORT: number = 3001;

app.use(cors());
app.use(express.json());

// routes
app.use("/api/diagnoses", diagnosesRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
});
