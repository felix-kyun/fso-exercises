import { User } from "../../src/models/user.model.mjs";

export async function createUser() {
  const user = await User.create({
    name: "Felix Kyun",
    username: "__felix",
    password: "__felix@69",
  });

  return user;
}
