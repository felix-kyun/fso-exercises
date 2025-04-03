import express from "express";
import { PORT } from "./utils/config.mjs";
import { notFound } from "./middlewares/notFound.middleware.mjs";
import { errorHandler } from "./middlewares/errorHandler.middleware.mjs";
import { mongoConnect } from "./db/mongo.db.mjs";
import blogRouter from "./routes/blog.route.mjs";

const app = express();

/* Middleware */
app.use(express.json());

/* Routes */
app.use("/api/blogs/", blogRouter);

/* Not Found  */
app.use(notFound);

/* Error Handler */
app.use(errorHandler);

/* MongoDB Connection */
await mongoConnect();

/* Start Server */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
