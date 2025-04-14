export async function signup(page, username, password) {
  const usernameInput = page.getByPlaceholder("Username");
  await usernameInput.fill(username);
  const nameInput = page.getByPlaceholder("name", {
    exact: true,
  });
  await nameInput.fill(username);
  const passwordInput = page.getByPlaceholder("Password");
  await passwordInput.fill(password);

  await page
    .getByRole("button", {
      name: "Signup",
    })
    .click();

  await page.getByText("User created successfully").waitFor();
}

export async function login(page, username, password) {
  const usernameInput = page.getByPlaceholder("Username");
  await usernameInput.fill(username);
  const passwordInput = page.getByPlaceholder("Password");
  await passwordInput.fill(password);

  await page
    .getByRole("button", {
      name: "Login",
    })
    .click();

  await page.getByText("Logout").waitFor();
}

export async function createBlog(page, title, author, url) {
  await page
    .getByRole("button", {
      name: "Create New Blog",
    })
    .click();

  await page.getByPlaceholder("Title").fill(title);
  await page.getByPlaceholder("Author").fill(author);
  await page.getByPlaceholder("URL").fill(url);

  await page
    .getByRole("button", {
      name: "Create",
      exact: true,
    })
    .click();

  await page.getByText(title).waitFor();
}
