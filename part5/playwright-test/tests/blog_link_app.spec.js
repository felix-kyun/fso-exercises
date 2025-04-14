const { test, expect, beforeEach, describe } = require("@playwright/test");
const { signup, login, createBlog } = require("./helpers.mjs");

describe("Blog Link App", () => {
  beforeEach(async ({ page, request }) => {
    await request.post("http://localhost:3000/api/test/reset");
    await page.goto("http://localhost:5173/");
  });

  test("Login Page can be loaded", async ({ page }) => {
    const locater = page.getByText("Blog List", {
      exact: false,
    });
    await expect(locater).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Signup" })).toBeVisible();
  });

  test("signup form working", async ({ page }) => {
    await signup(page, "felixkyun", "felix@2005");
    await expect(page.getByText("User created successfully")).toBeVisible();
  });

  test("login form working", async ({ page }) => {
    await signup(page, "felixkyun", "felix@2005");

    await expect(page.getByText("Login")).toBeVisible();
    await login(page, "felixkyun", "felix@2005");

    await expect(page.getByText("Logout")).toBeVisible();
  });

  describe("after login", async () => {
    beforeEach(async ({ page }) => {
      await signup(page, "felixkyun", "felix@2005");
      await login(page, "felixkyun", "felix@2005");
    });

    test("login fails with wrong creds", async ({ page }) => {
      await page.getByRole("button", { name: "Logout" }).click();

      await page.getByPlaceholder("Username").fill("felixkyun");
      await page.getByPlaceholder("Password").fill("wrongpassword");

      await page
        .getByRole("button", {
          name: "Login",
        })
        .click();

      await expect(
        page.getByText("incorrect username or password"),
      ).toBeVisible();
    });

    test("login succeds with right creds", async ({ page }) => {
      await page.getByRole("button", { name: "Logout" }).click();
      await login(page, "felixkyun", "felix@2005");
      await expect(page.getByText("Logout")).toBeVisible();
    });

    test("blog creation form can be opened", async ({ page }) => {
      await page
        .getByRole("button", { name: "Create New Blog", exact: false })
        .click();

      await expect(page.getByPlaceholder("Title")).toBeVisible();
      await expect(page.getByPlaceholder("Author")).toBeVisible();

      await expect(
        page.getByText("Create", {
          exact: true,
        }),
      ).toBeVisible();
      await expect(
        page.getByText("Cancel", {
          exact: true,
        }),
      ).toBeVisible();
    });

    test("blog creation form can be cancelled", async ({ page }) => {
      await page
        .getByRole("button", { name: "Create New Blog", exact: false })
        .click();

      await page.getByText("Cancel").click();

      await expect(page.getByPlaceholder("Title")).not.toBeVisible();
      await expect(page.getByPlaceholder("Author")).not.toBeVisible();
    });

    test("new blog can be created", async ({ page }) => {
      await createBlog(
        page,
        "My first blog",
        "felixkyun",
        "https://google.com",
      );
      await expect(page.getByText("My first blog")).toBeVisible();
    });

    test("new blog can be liked", async ({ page }) => {
      await createBlog(
        page,
        "My first blog",
        "felixkyun",
        "https://google.com",
      );

      await page.getByText("View").click();

      const likeButton = page.getByRole("button", {
        name: "Like",
      });

      await expect(likeButton).toBeVisible();
      await likeButton.click();

      await expect(page.getByText("1")).toBeVisible();
    });

    test("new blog can be deleted by the creator", async ({ page }) => {
      await page.getByText("Logout").waitFor();

      await createBlog(
        page,
        "My first blog",
        "felixkyun",
        "https://google.com",
      );

      await page.getByText("View").click();
      await expect(page.getByText("Delete")).toBeVisible();
      page.on("dialog", (dialog) => dialog.accept());
      await page.getByText("Delete").click();
      await expect(page.getByText("My first blog")).not.toBeVisible();
    });
  });
});
