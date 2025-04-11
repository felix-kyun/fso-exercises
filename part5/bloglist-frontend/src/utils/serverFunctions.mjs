const SERVER_URL = "http://localhost:3000";

export async function login(username, password) {
  const response = await fetch(`${SERVER_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  window.localStorage.setItem("user", JSON.stringify(data));
  return data;
}

export async function signup(username, name, password) {
  const response = await fetch(`${SERVER_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, name, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data;
}

export async function getBlogs() {
  const response = await fetch(`${SERVER_URL}/api/blogs`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Fetching blogs failed");
  }

  return data;
}

export async function createBlog(user, blog) {
  const response = await fetch(`${SERVER_URL}/api/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Creating blog failed");
  }

  return await response.json();
}

export async function updateBlog(blog) {
  const response = await fetch(`${SERVER_URL}/api/blogs/${blog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
}

export async function deleteBlog(user, id) {
  const response = await fetch(`${SERVER_URL}/api/blogs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
}
