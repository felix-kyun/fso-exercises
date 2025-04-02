import { StatusCodes } from "http-status-codes";
import { ServerError } from "../errors/server.error.mjs";

export async function notFound(req, res, next) {
  throw new ServerError("Not Found", StatusCodes.NOT_FOUND);
}
