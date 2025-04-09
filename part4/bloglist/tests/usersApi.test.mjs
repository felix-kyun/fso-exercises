import { after, beforeEach, describe, test } from "node:test";
import { ok, strictEqual, deepStrictEqual } from "node:assert";
import { User } from "../src/models/user.model.mjs";
import app from "../src/app.mjs";
import supertest from "supertest";
import mongoose from "mongoose";

const api = supertest(app);

describe("Users API test", async () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("User creation", async () => {
    const user = {
      username: "testuser",
      name: "Test User",
      password: "password123",
    };

    test("201 with valid data", async () => {
      const userCountBefore = await User.find({});

      const response = await api
        .post("/api/users")
        .send(user)
        .expect(201)
        .expect("Content-Type", /application\/json/);

      const userCountAfter = await User.find({});

      strictEqual(response.body.username, user.username);
      strictEqual(response.body.name, user.name);
      strictEqual(userCountBefore.length + 1, userCountAfter.length);
    });

    test("400 with missing username", async () => {
      const { username, ...withoutUsername } = user;

      const response = await api
        .post("/api/users")
        .send(withoutUsername)
        .expect(400);
    });

    test("400 with short username", async () => {
      const response = await api
        .post("/api/users")
        .send({ ...user, username: "aa" })
        .expect(400);
    });

    test("400 with missing password", async () => {
      const { password, ...withoutPassword } = user;
      const response = await api
        .post("/api/users")
        .send(withoutPassword)
        .expect(400);
    });

    test("400 with short password", async () => {
      const faultyUser = { ...user, password: "12" };

      const response = await api
        .post("/api/users")
        .send(faultyUser)
        .expect(400);
    });
  });

  describe("query users", async () => {
    test("returns an array", async () => {
      const users = await api.get("/api/users").expect(200);
      strictEqual(Array.isArray(users.body), true);
    });

    test("it returns user with their blogs populated ", async () => {
      const user = await api.post("/api/users").send({
        username: "felix",
        name: "Felix Kyun",
        password: "password123",
      });

      const blog = {
        title: "some title",
        url: "http://smth.com",
      };

      const blogServer = await api
        .post("/api/blogs")
        .send(blog)
        .set("Authorization", `Bearer ${user.body.token}`);

      const users = await api.get(`/api/users/`).expect(200);

      strictEqual(typeof users.body[0].blogs, "object");
    });
  });

  after(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });
});
