import { StatusCodes } from "http-status-codes";
import { ServerError } from "../errors/server.error.mjs";
import { User } from "../models/user.model.mjs";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.mjs";

export async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password)
    throw new ServerError(
      "Username or password missing",
      StatusCodes.BAD_REQUEST,
    );

  const user = await User.findOne({ username });
  if (!user)
    throw new ServerError(
      "incorrect username or password",
      StatusCodes.UNAUTHORIZED,
    );

  const passwordCorrect = await bcrypt.compare(password, user.password);

  if (!passwordCorrect)
    throw new ServerError(
      "incorrect username or password",
      StatusCodes.UNAUTHORIZED,
    );

  return res.status(200).json({
    username: user.username,
    name: user.name,
    id: user._id,
    token: generateToken(user),
  });
}
