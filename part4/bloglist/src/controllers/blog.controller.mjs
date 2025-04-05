import { Blog } from "../models/blog.model.mjs";

export async function getAllBlogs(req, res) {
	const blogs = await Blog.find({});

	return res.status(200).json(blogs);
}

export async function createBlog(req, res) {
	const { title, author, url, likes } = req.body;

	const blog = await Blog.create({
		title,
		author,
		url,
		likes,
	});

	return res.status(201).json(blog);
}
