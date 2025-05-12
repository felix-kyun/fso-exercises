import { StatusCodes } from "http-status-codes";
import { ServerError } from "../errors/server.error.mjs";
import { Blog } from "../models/blog.model.mjs";
import { Comment } from "../models/comment.model.mjs";

export async function createComment(req, res) {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog || !id)
    throw new ServerError("Blog Not Found", StatusCodes.NOT_FOUND);

  const { comment } = req.body;
  if (!comment) throw new ServerError("Missing Comment Body");

  const newComment = await Comment.create({
    comment,
    date: Date.now(),
  });

  blog.comments.push(newComment);

  await blog.save();

  return res.status(StatusCodes.CREATED).json(newComment);
}

export async function getComments(req, res) {
  const { id } = req.params;
  const blog = await Blog.findById(id);

  if (!blog || !id)
    throw new ServerError("Blog Not Found", StatusCodes.NOT_FOUND);

  await blog.populate("comments");

  return res.status(StatusCodes.OK).json(blog.comments);
}
