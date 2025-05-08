const serverUrl = "http://localhost:3000/api/blogs";

export async function getBlogs() {
  const response = await fetch(serverUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return await response.json();
}
