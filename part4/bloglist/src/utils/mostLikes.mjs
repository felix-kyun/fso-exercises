export function mostLikes(blogs) {
  const map = new Map();
  blogs.forEach((blog) => {
    const author = blog.author;

    if (map.has(author)) map.set(author, map.get(author) + blog.likes);
    else map.set(author, blog.likes);
  });

  let max = { key: null, value: 0 };

  map.forEach((value, key) => {
    if (value > max.value) {
      max = { key, value };
    }
  });

  return { author: max.key, likes: max.value };
}
