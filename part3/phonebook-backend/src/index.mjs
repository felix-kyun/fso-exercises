import express from "express";
import personRouter from "./routes/person.route.mjs";
import infoRouter from "./routes/info.route.mjs";

const port = 3000;
const app = express();
app.use(express.json());

app.use("/api/persons", personRouter);
app.use("/api/info", infoRouter);

app.listen(port, () => console.log(`Server started on :${port}`));
