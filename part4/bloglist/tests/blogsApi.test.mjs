import {
	test,
	after,
	describe,
	before,
	beforeEach,
	afterEach,
} from "node:test";
import assert from "node:assert";
import supertest from "supertest";
import mongoose from "mongoose";
import app from "../src/app.mjs";
import { Blog } from "../src/models/blog.model.mjs";
import rawBlogs from "./blogs.mjs";

const api = supertest(app);
const blogs = rawBlogs.map((blog) => {
	blog.id = blog._id;
	delete blog._id;
	delete blog.__v;

	return blog;
});

describe("Blogs Api Tests", () => {
	beforeEach(async () => {
		await Blog.deleteMany({});
		// as Blog.create doesn't maintain order
		for (const blog of blogs) {
			const { id, ...withoutId } = blog;
			await Blog.create({ _id: id, ...withoutId });
		}
	});

	test("GET /blogs returns all blogs in JSON format", async () => {
		const response = await api
			.get("/api/blogs")
			.expect(200)
			.expect("Content-Type", /application\/json/);

		const blogsInResponse = response.body.map((blog) => {
			return blog;
		});

		assert.strictEqual(blogs.length, blogsInResponse.length);
		assert.deepStrictEqual(blogs, blogsInResponse);
	});

	test("all the blogs have their _id property replaced with id", async () => {
		const response = await api.get("/api/blogs").expect(200);
		const blogsInResponse = response.body;

		assert.ok(
			blogsInResponse.every((blog, index) => blogs[index].id === blog.id)
		);
	});

	test("POST /api/blogs creates a new blog", async () => {
		const new_blog = {
			title: "New Blog",
			author: "Admin",
			url: "https://example.com",
			likes: 0,
		};

		let response = await api
			.post("/api/blogs")
			.send(new_blog)
			.expect(201)
			.expect("Content-Type", /application\/json/);

		delete response.body.id;

		assert.deepStrictEqual(response.body, new_blog);

		const responseAll = await api.get("/api/blogs").expect(200);
		assert.ok(
			blogs.length + 1 === responseAll.body.length,
			"Blog not created"
		);
	});

	test("likes defaults to 0 if missing", async () => {
		const new_blog = {
			title: "New Blog",
			author: "Admin",
			url: "https://example.com",
			likes: 0,
		};

		let response = await api
			.post("/api/blogs")
			.send(new_blog)
			.expect(201)
			.expect("Content-Type", /application\/json/);

		assert.ok(response.body.likes === 0, "Likes not defaulted to 0");
	});

	after(async () => {
		await Blog.deleteMany({});
		await mongoose.connection.close();
	});
});
