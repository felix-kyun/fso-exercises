import { beforeEach } from "vitest";
import { describe } from "vitest";
import { Togglable } from "./Togglable";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Togglable />", async () => {
  let container;
  beforeEach(() => {
    container = render(
      <Togglable>
        <div>togglable content</div>
      </Togglable>,
    ).container;
  });

  test("renders its children", async () => {
    expect(await screen.findByText("togglable content")).toBeDefined();
  });

  test("childrens are not visible by default", async () => {
    const togglableContent = container.querySelector(".togglableContent");
    expect(togglableContent).toHaveStyle("display: none");
  });

  test("after clicking the button, children are visible", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("Show");
    await user.click(button);

    const togglableContent = container.querySelector(".togglableContent");
    expect(togglableContent).not.toHaveStyle("display: none");
  });

  test("toggled content can be closed", async () => {
    const user = userEvent.setup();
    const showButton = screen.getByText("Show");
    user.click(showButton);

    const closeButton = screen.getByText("Cancel");
    user.click(closeButton);

    const togglableContent = container.querySelector(".togglableContent");
    expect(togglableContent).toHaveStyle("display: none");
  });
});
