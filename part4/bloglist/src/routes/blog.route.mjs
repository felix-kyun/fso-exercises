import express from "express";
import { createBlog, getAllBlogs } from "../controllers/blog.controller.mjs";

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);

export default router;
