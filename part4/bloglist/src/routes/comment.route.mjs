import express from "express";
import {
  createComment,
  getComments,
} from "../controllers/comment.controller.mjs";

const router = express.Router();

router.route("/:id/comments").get(getComments).post(createComment);

export default router;
