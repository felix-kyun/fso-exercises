import { ServerError } from "../errors/server.error.mjs";
import { Blog } from "../models/blog.model.mjs";
import { validateMongooseId } from "../utils/validateMongooseId.mjs";

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

	if (!title || !url) throw new ServerError("Missing title or url", 400);

	return res.status(201).json(blog);
}

export async function getBlogById(req, res) {
	const { id } = req.params;
	if (!validateMongooseId(id)) throw new ServerError("Invalid Id", 400);

	const blog = await Blog.findById(id);
	if (!blog) throw new ServerError("Blog not found", 404);

	return res.status(200).json(blog);
}

export async function deleteBlogById(req, res) {
	const { id } = req.params;
	if (!validateMongooseId(id)) throw new ServerError("Invalid Id", 400);

	const { deletedCount } = await Blog.deleteOne({ _id: id });
	if (!deletedCount) throw new ServerError("Blog not found", 404);

	return res.status(204).send();
}

export async function updateBlogById(req, res) {
	const { id } = req.params;
	if (!validateMongooseId(id)) throw new ServerError("Invalid Id", 400);

	const blog = await Blog.findById(id);
	if (!blog) throw new ServerError("Blog not found", 404);

	const { title, author, url, likes } = req.body;

	blog.title = title ?? blog.title;
	blog.author = author ?? blog.author;
	blog.url = url ?? blog.url;
	blog.likes = likes ?? blog.likes;

	await blog.save();

	return res.status(200).json(blog);

	// await Blog.replaceOne({ _id: id }, { title, author, url, likes });
}
