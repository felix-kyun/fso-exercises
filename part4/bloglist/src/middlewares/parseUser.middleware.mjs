import { ServerError } from "../errors/server.error.mjs";
import { User } from "../models/user.model.mjs";
import { StatusCodes } from "http-status-codes";

export async function parseUser(req, res, next) {
  if (!req.token)
    throw new ServerError("Token missing or invalid", StatusCodes.UNAUTHORIZED);

  const user = await User.findById(req.auth.id);

  if (!user)
    throw new ServerError("User Doens't exsist", StatusCodes.NOT_FOUND);

  req.user = user;

  next();
}
