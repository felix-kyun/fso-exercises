import { ServerError } from "../errors/server.error.mjs";
import { StatusCodes } from "http-status-codes";
import { logError } from "../utils/logger.mjs";

export async function errorHandler(err, req, res, next) {
  if (err instanceof ServerError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  let message = "An unexpected error occurred";
  let status = StatusCodes.INTERNAL_SERVER_ERROR;

  logError(err.message);
  switch (err.name) {
    case "CastError":
      status = StatusCodes.BAD_REQUEST;
      message = "invalid id";
      break;

    case "ValidationError":
      status = StatusCodes.BAD_REQUEST;
      message = err.message;
      break;

    case "JsonWebTokenError":
      status = StatusCodes.UNAUTHORIZED;
      message = "invalid token";
      break;

    case "MongoServerError":
      if (err.message.includes("E11000")) {
        status = StatusCodes.CONFLICT;
        message = "duplicate key error";
      }
      break;

    default:
      break;
  }

  return res.status(status).json({
    message,
    stack: err.stack,
    error: err,
  });
}
