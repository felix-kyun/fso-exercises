const serverUrl = "http://localhost:3000/api/blogs";

export async function getBlogsServer() {
  const response = await fetch(serverUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return await response.json();
}

export async function createBlogServer(user, blog) {
  const response = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify(blog),
  });

  const ret = await response.json();

  if (!response.ok) {
    throw new Error(ret.message || "creating blog failed");
  }

  return ret;
}

export async function deleteBlogServer(user, id) {
  const response = await fetch(`${serverUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export async function updateBlogServer(blog) {
  const response = await fetch(`${serverUrl}/${blog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
}
