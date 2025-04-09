import { User } from "../../src/models/user.model.mjs";

export async function createUser(api) {
  const userSchema = {
    name: "Felix Kyun",
    username: "__felix",
    password: "__felix@69",
  };

  const user = await api.post("/api/users").send(userSchema).expect(201);
  return { ...userSchema, ...user.body };
}

export async function getToken(api, user) {
  const {
    body: { token },
  } = await api.post("/api/login").send({
    username: user.username,
    password: user.password,
  });

  return token;
}
