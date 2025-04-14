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
}
