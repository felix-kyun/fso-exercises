import { test, after, describe, beforeEach, before } from "node:test";
import assert from "node:assert";
import supertest from "supertest";
import mongoose from "mongoose";
import app from "../src/app.mjs";
import { Blog } from "../src/models/blog.model.mjs";
import rawBlogs from "./blogs.mjs";
import { createUser } from "./helpers/createUser.mjs";
import { User } from "../src/models/user.model.mjs";

const api = supertest(app);
const dummyUser = await createUser();
const blogs = rawBlogs.map((blog) => {
  blog.id = blog._id;
  delete blog._id;
  delete blog.__v;
  blog.user = dummyUser._id;

  return blog;
});

describe("Blogs API test", async () => {
  beforeEach(async () => {
    await Blog.deleteMany({});

    for (const blog of blogs) {
      const { id, ...withoutId } = blog;
      await Blog.create({ _id: id, ...withoutId });
    }
  });

  describe("Initial tests", async () => {
    test("check if the blogs are returned as json", async () => {
      await api
        .get("/api/blogs")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    test("check if all the blogs are present", async () => {
      const response = (await api.get("/api/blogs")).body;

      assert.strictEqual(response.length, blogs.length);
    });

    test("check a random blog is present", async () => {
      const response = (await api.get("/api/blogs")).body;

      response[1].user = dummyUser._id;

      assert.deepStrictEqual(response[1], blogs[1]);
    });

    test("all the blogs have their _id property replaced with id", async () => {
      const response = (await api.get("/api/blogs").expect(200)).body;

      assert.ok(response.every((blog, index) => blogs[index].id === blog.id));
    });
  });

  describe("view specific blog", async () => {
    test("200 with valid id", async () => {
      const response = (await api.get(`/api/blogs/${blogs[2].id}`).expect(200))
        .body;

      response.user = dummyUser._id;

      assert.deepStrictEqual(response, blogs[2]);
    });

    test("404 with non exsistant id", async () => {
      await api.get(`/api/blogs/${new mongoose.Types.ObjectId()}`).expect(404);
    });

    test("400 with an invalid id", async () => {
      await api.get(`/api/blogs/1234567890`).expect(400);
    });
  });

  describe("create a new blog", async () => {
    test("success with valid data", async () => {
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
      assert.strictEqual(
        blogs.length + 1,
        responseAll.body.length,
        "Blog not created",
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

      assert.strictEqual(response.body.likes, 0, "Likes not defaulted to 0");
    });

    test("server returns 400 on missing missing title or url", async () => {
      const title = "title";
      const author = "author";
      const url = "https://example.com";

      const responseWithoutTitle = await api
        .post("/api/blogs")
        .send({ author, url });

      assert.strictEqual(responseWithoutTitle.status, 400);

      const responseWithoutURL = await api
        .post("/api/blogs")
        .send({ author, title });

      assert.strictEqual(responseWithoutURL.status, 400);
    });
  });

  describe("delete a blog", async () => {
    test("204 with a valid id", async () => {
      await api.delete(`/api/blogs/${blogs[0].id}`).expect(204);
    });

    test("404 with non exsistant id", async () => {
      await api
        .delete(`/api/blogs/${new mongoose.Types.ObjectId()}`)
        .expect(404);
    });

    test("400 with an invalid id", async () => {
      await api.delete(`/api/blogs/1234567890`).expect(400);
    });
  });

  describe("update a blog", async () => {
    test("200 with a valid id and content updated", async () => {
      const response = await api
        .put(`/api/blogs/${blogs[0].id}`)
        .send({
          ...blogs[0],
          title: "Updated title",
        })
        .expect(200);

      assert.strictEqual(response.body.title, "Updated title");
    });

    test("404 with non exsistant id", async () => {
      await api.put(`/api/blogs/${new mongoose.Types.ObjectId()}`).expect(404);
    });

    test("400 with an invalid id", async () => {
      await api.put(`/api/blogs/1234567890`).expect(400);
    });
  });

  after(async () => {
    await Blog.deleteMany({});
    await User.deleteMany({});
    await mongoose.connection.close();
  });
});
