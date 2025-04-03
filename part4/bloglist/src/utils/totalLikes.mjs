export function totalLikes(blogs) {
  return blogs.reduce((acc, blog) => acc + blog.likes, 0);
}
