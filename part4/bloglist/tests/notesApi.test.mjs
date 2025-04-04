import { test, after } from "node:test";
import supertest from "supertest";
import mongoose from "mongoose";
import app from "../src/app.mjs";

const api = supertest(app);
test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

after(async () => await mongoose.connection.close());
