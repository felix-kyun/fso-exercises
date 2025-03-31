import express from "express";
import personRouter from "./routes/person.route.mjs";
import infoRouter from "./routes/info.route.mjs";
import { logger } from "./middlewares/logger.middleware.mjs";
import { notFound } from "./middlewares/notFound.middleware.mjs";
import morgan from "morgan";

const port = 3000;
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
// app.use(logger);

app.use("/api/persons", personRouter);
app.use("/api/info", infoRouter);

app.use(notFound);

app.listen(port, () => console.log(`Server started on :${port}`));
