import { JWT_SECRET } from "./config.mjs";
import jwt from "jsonwebtoken";

export function generateToken(user) {
  const userToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userToken, JWT_SECRET);

  return token;
}

export function extractToken(request) {
  const authHeader = request.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.replace("Bearer ", "");
  }

  return null;
}

export function decodeToken(token) {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
}
