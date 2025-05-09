import { render, screen } from "@testing-library/react";
import { Blog } from "./Blog";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import mockUser from "@testing-library/user-event";

describe("<Blog />", () => {
  let mockHandler;

  beforeEach(() => {
    const blog = {
      author: "felix kyun",
      url: "https://google.com",
      likes: 0,
      title: "test title",
      id: "123",
      user: {
        username: "felixkyun",
        name: "Felix Kyun",
        id: "123",
      },
    };

    const user = {
      username: "felixkyun",
      name: "Felix Kyun",
      id: "123",
    };

    mockHandler = vi.fn();

    render(
      <Blog
        blog={blog}
        user={user}
        incrementLikes={mockHandler}
        deleteBlog={mockHandler}
      />,
    );
  });

  test("renders content", async () => {
    const mockUser = userEvent.setup();
    const likeButton = screen.getByText("like");
    const deleteButton = screen.getByText("delete");

    await mockUser.click(likeButton);
    await mockUser.click(deleteButton);

    expect(mockHandler.mock.calls).toHaveLength(2);

    const element = screen.getByText("test title", {
      exact: false,
    });

    expect(element).toBeDefined();
  });

  test("by default only the title and author is shown and not the url or likes", async () => {
    const titleAndAuthor = screen.getByText("test title - felix kyun", {
      exact: false,
    });
    const url = screen.getByText("https://google.com");
    const likes = screen.getByText("Likes: 0");

    expect(url).not.toBeVisible();
    expect(likes).not.toBeVisible();
    expect(titleAndAuthor).toBeVisible();
  });

  test("url and likes are shown after clicking the button", async () => {
    const user = mockUser.setup();
    const showButton = screen.getByText("View");

    await user.click(showButton);

    const url = screen.getByText("https://google.com");
    const likes = screen.getByText("Likes: 0");

    expect(url).toBeVisible();
    expect(likes).toBeVisible();
  });

  test("if the like button is clikced twice, the event handler is called twice", async () => {
    const user = userEvent.setup();
    const likeButton = screen.getByText("like");

    await user.click(likeButton);
    await user.click(likeButton);

    expect(mockHandler.mock.calls).toHaveLength(2);
  });
});
