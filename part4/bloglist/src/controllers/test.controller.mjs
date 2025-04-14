import { StatusCodes } from "http-status-codes";
import { Blog } from "../models/blog.model.mjs";
import { User } from "../models/user.model.mjs";

export async function reset(req, res) {
  await User.deleteMany({});
  await Blog.deleteMany({});

  res.status(StatusCodes.NO_CONTENT).send();
}
