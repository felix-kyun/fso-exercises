import { StatusCodes } from "http-status-codes";
import { JWT_SECRET } from "../utils/config.mjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.mjs";

export async function jwtParser(req, res, next) {
  const authHeader = req.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.replace("Bearer ", "");
    req.token = token;

    const decoded = jwt.verify(token, JWT_SECRET);
    req.auth = decoded;
  }

  next();
}
