import express from "express";
import { MODE, PORT } from "./utils/config.mjs";
import { notFound } from "./middlewares/notFound.middleware.mjs";
import { errorHandler } from "./middlewares/errorHandler.middleware.mjs";
import { mongoConnect } from "./db/mongo.db.mjs";
import blogRouter from "./routes/blog.route.mjs";
import userRouter from "./routes/user.route.mjs";
import loginRouter from "./routes/login.route.mjs";
import testRouter from "./routes/test.route.mjs";
import { logSuccess } from "./utils/logger.mjs";
import { jwtParser } from "./middlewares/jwtParser.middleware.mjs";
import morgan from "morgan";
import { morganFormat } from "./utils/morganFormat.mjs";
import cors from "cors";

const app = express();

/* Middleware */
app.use(cors());
app.use(morgan(morganFormat));
app.use(express.json());
app.use(jwtParser);

/* Routes */
app.use("/api/blogs/", blogRouter);
app.use("/api/users/", userRouter);
app.use("/api/login/", loginRouter);
if (MODE === "test" || MODE === "development")
  app.use("/api/test/", testRouter);
/* Not Found  */
app.use(notFound);

/* Error Handler */
app.use(errorHandler);

/* MongoDB Connection */
await mongoConnect();

/* Start Server */
if (process.env.NODE_ENV !== "test")
  app.listen(PORT, () =>
    logSuccess(`Server running on port ${PORT}`, "express"),
  );

export default app;
