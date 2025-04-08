import express from "express";
import {
  createBlog,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  updateBlogById,
} from "../controllers/blog.controller.mjs";
import { parseUser } from "../middlewares/parseUser.middleware.mjs";

const router = express.Router();

router.route("/").get(getAllBlogs).post(parseUser, createBlog);
router
  .route("/:id")
  .get(getBlogById)
  .delete(parseUser, deleteBlogById)
  .put(updateBlogById);

export default router;
