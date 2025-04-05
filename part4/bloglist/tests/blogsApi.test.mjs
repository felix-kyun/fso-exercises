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
  delete blog._id;
  delete blog.__v;

  return blog;
});

describe("Blogs Api Tests", () => {
  beforeEach(async () => {
    await Blog.deleteMany({});
    // as Blog.create doesn't maintain order
    for (const blog of blogs) await Blog.create(blog);
  });

  test("GET /blogs returns all blogs in JSON format", async () => {
    const response = await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blogsInResponse = response.body.map((blog) => {
      delete blog.id;
      return blog;
    });

    assert.strictEqual(blogs.length, blogsInResponse.length);
    assert.deepStrictEqual(blogs, blogsInResponse);
  });

  after(async () => {
    await mongoose.connection.close();
  });
});
