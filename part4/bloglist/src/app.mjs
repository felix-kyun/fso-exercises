import express from "express";
import { PORT } from "./utils/config.mjs";
import { notFound } from "./middlewares/notFound.middleware.mjs";
import { errorHandler } from "./middlewares/errorHandler.middleware.mjs";
import { mongoConnect } from "./db/mongo.db.mjs";
import blogRouter from "./routes/blog.route.mjs";
import userRouter from "./routes/user.route.mjs";
import { logSuccess } from "./utils/logger.mjs";

const app = express();

/* Middleware */
app.use(express.json());

/* Routes */
app.use("/api/blogs/", blogRouter);
app.use("/api/users/", userRouter);

/* Not Found  */
app.use(notFound);

/* Error Handler */
app.use(errorHandler);

/* MongoDB Connection */
await mongoConnect();

/* Start Server */
if (process.env.NODE_ENV !== "test")
  app.listen(PORT, () => logSuccess(`Server running on port ${PORT}`, "express"));

export default app;
