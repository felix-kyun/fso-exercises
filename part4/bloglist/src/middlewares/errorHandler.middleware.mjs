import { ServerError } from "../errors/server.error.mjs";
import { StatusCodes } from "http-status-codes";

export async function errorHandler(err, req, res, next) {
  if (err instanceof ServerError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "An unexpected error occurred",
    stack: err.stack,
    error: err,
  });
}
