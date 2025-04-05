import express from "express";
import {
	createBlog,
	deleteBlogById,
	getAllBlogs,
	getBlogById,
	updateBlogById,
} from "../controllers/blog.controller.mjs";

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router
	.route("/:id")
	.get(getBlogById)
	.delete(deleteBlogById)
	.put(updateBlogById);

export default router;
