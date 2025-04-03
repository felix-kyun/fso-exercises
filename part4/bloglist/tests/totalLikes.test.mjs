import { test, describe } from "node:test";
import assert from "node:assert";
import { totalLikes } from "../src/utils/totalLikes.mjs";
import blogs from "./blogs.mjs";

describe("Total Likes", () => {

  test("total likes when list is empty", () => {
    const result = totalLikes([]);
    assert.strictEqual(result, 0);
  });

  test("total likes when list has one blog", () => {
    const result = totalLikes([blogs[0]]);
    assert.strictEqual(result, 7);
  });

  test("total likes when list has multiple blogs", () => {
    const result = totalLikes(blogs);
    assert.strictEqual(result, 36);
  });
});
