import { StatusCodes } from "http-status-codes";

export class ServerError extends Error {
  constructor(
    message = "An error occured",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
  ) {
    super(message);
    this.name = "ServerError";
    this.status = statusCode;
    this.message = message;
  }
}
