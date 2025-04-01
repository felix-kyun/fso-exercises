import { StatusCodes } from "http-status-codes";

export class ServerError extends Error {
  constructor(
    status = StatusCodes.INTERNAL_SERVER_ERROR,
    message = "An error occurred",
  ) {
    super(message);
    this.name = "ServerError";
    this.status = status;
    this.message = message;
  }
}

export function errorHandler(error, req, res, next) {
  if (error instanceof ServerError) {
    return res.status(error.status).json({ error: error.message });
  }

  console.error(error);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: "An error occurred", message: error.message });
}
