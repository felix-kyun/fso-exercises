import express from "express";
import "express-async-errors";
import personRouter from "./routes/person.route.mjs";
import infoRouter from "./routes/info.route.mjs";
import { notFound } from "./middlewares/notFound.middleware.mjs";
import morgan from "morgan";
import { morganCustomFormat } from "./misc/morganCustomFormat.mjs";
import { mongoConnect } from "./db/mongo.db.mjs";
import { errorHandler } from "./middlewares/errorHandler.middleware.mjs";
import path from "path";
import { PORT } from "./misc/config.mjs";

const app = express();

/* static */
// const __dirname = path.resolve(import.meta.dirname);
// const frontend = path.join(__dirname, "./../frontend/");
// app.use(express.static(frontend));

app.use(express.json());
app.use(morgan(morganCustomFormat));

/* Routes */
app.use("/api/persons", personRouter);
app.use("/api/info", infoRouter);

/* 404 handler */
app.use(notFound);

/* error handler */
app.use(errorHandler);

/* connect to MongoDB */
await mongoConnect();

/* start express */
app.listen(PORT, () => console.log(`Server started on :${PORT}`));
