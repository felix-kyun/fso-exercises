export function mostBlogs(blogs) {
  const map = new Map();
  blogs.forEach((blog) => {
    const author = blog.author;

    if (map.has(author)) map.set(author, map.get(author) + 1);
    else map.set(author, 1);
  });

  let max = { key: null, value: 0 };

  map.forEach((value, key) => {
    if (value > max.value) {
      max = { key, value };
    }
  });

  return { author: max.key, blogs: max.value };
}
