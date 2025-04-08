import { StatusCodes } from "http-status-codes";
import { ServerError } from "../errors/server.error.mjs";
import { User } from "../models/user.model.mjs";
import { SALT_ROUNDS } from "../utils/config.mjs";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  const { username, name, password } = req.body;

  if (!username || !name || !password)
    throw new ServerError("Username or password missing", 400);

  if (password.length < 3)
    throw new ServerError("Password must be at least 3 characters", 400);

  const user = await User.create({
    username,
    name,
    password,
  });

  return res.status(StatusCodes.CREATED).json(user.toJSON());
}

export async function getAllUsers(req, res) {
  const users = await User.find({}).populate("blogs", {
    title: 1,
    url: 1,
    author: 1,
    id: 1,
  });

  return res.status(StatusCodes.OK).json(users);
}

/* export async function findUserById(req, res) {
  const { id } = req.params;
} */
