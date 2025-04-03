import { test, describe } from "node:test";
import assert from "node:assert";
import blogs from "./blogs.mjs";

import { mostLikes } from "../src/utils/mostLikes.mjs";

describe("Most Likes", () => {
  test("when the input is empty", () => {
    const result = mostLikes([]);
    assert.deepStrictEqual(result, { author: null, likes: 0 });
  });

  test("when the input only has one blog", () => {
    const result = mostLikes([blogs[0]]);
    assert.deepStrictEqual(result, { author: blogs[0].author, likes: 7 });
  });

  test("when the input has multiple blogs", () => {
    const result = mostLikes(blogs);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      likes: 17,
    });
  });
});
