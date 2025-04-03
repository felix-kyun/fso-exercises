import { test, describe } from "node:test";
import assert from "node:assert";
import blogs from "./blogs.mjs";

import { mostBlogs } from "../src/utils/mostBlogs.mjs";

describe("Most Blogs", () => {
  test("when the input is empty", () => {
    const result = mostBlogs([]);
    assert.deepStrictEqual(result, { author: null, blogs: 0 });
  });

  test("when the input only has one blog", () => {
    const result = mostBlogs([blogs[0]]);
    assert.deepStrictEqual(result, { author: blogs[0].author, blogs: 1 });
  });

  test("when the input has multiple blogs", () => {
    const result = mostBlogs(blogs);
    assert.deepStrictEqual(result, {
      author: "Robert C. Martin",
      blogs: 3,
    });
  });
});
