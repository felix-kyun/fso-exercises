import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { describe } from "vitest";
import { BlogCreation } from "./BlogCreation";
import { render, screen } from "@testing-library/react";

describe("<BlogCreation />", async () => {
  // 5.16 already done hehe
  test("onSubmit calls createBlog with correct  data", async () => {
    const createBlog = vi.fn();
    const user = userEvent.setup();

    render(<BlogCreation createBlog={createBlog} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const authorInput = screen.getByPlaceholderText("Author");
    const urlInput = screen.getByPlaceholderText("URL");
    const likesInput = screen.getByPlaceholderText("Likes");
    const createButton = screen.getByText("Create");

    await user.type(titleInput, "test title");
    await user.type(authorInput, "test author");
    await user.type(urlInput, "https://example.com");
    await user.type(likesInput, "5");

    await user.click(createButton);

    expect(createBlog.mock.calls).toHaveLength(1);
    expect(createBlog.mock.calls[0][0].title).toBe("test title");
    expect(createBlog.mock.calls[0][0].author).toBe("test author");
    expect(createBlog.mock.calls[0][0].url).toBe("https://example.com");
    expect(createBlog.mock.calls[0][0].likes).toBe("5");

    // Check if the inputs are reset
    expect(titleInput.value).toBe("");
    expect(authorInput.value).toBe("");
    expect(urlInput.value).toBe("");
    expect(likesInput.value).toBe("0");
  });
});
