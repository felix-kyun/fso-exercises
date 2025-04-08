import { ServerError } from "../errors/server.error.mjs";
import { StatusCodes } from "http-status-codes";

export async function errorHandler(err, req, res, next) {
  if (err instanceof ServerError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  let message = "An unexpected error occurred";
  let status = StatusCodes.INTERNAL_SERVER_ERROR;
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
        status = StatusCodes.BAD_REQUEST;
        message = "duplicate key error";
      }
      break;

    default:
      break;
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message,
    status,
    stack: err.stack,
    error: err,
  });
}
