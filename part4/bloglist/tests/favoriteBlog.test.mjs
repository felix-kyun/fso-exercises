import { test, describe } from "node:test";
import assert from "node:assert";
import { totalLikes } from "../src/utils/totalLikes.mjs";
import blogs from "./blogs.mjs";
import { favoriteBlog } from "../src/utils/favoriteBlog.mjs";

describe("Favorite Blog", () => {

  test("fav blog when list is empty", () => {
    const result = favoriteBlog([]);
    assert.deepStrictEqual(result, null);
  });

  test("total likes when list has one blog", () => {
    const result = favoriteBlog([blogs[0]]);
    assert.deepStrictEqual(result, blogs[0]);
  });

  test("total likes when list has multiple blogs", () => {
    const result = favoriteBlog(blogs);
    assert.deepStrictEqual(result, blogs[2]);
  });
});

