export function favoriteBlog(blogs) {
  let fav = null;

  blogs.forEach((blog) => {
    if (!fav || blog.likes > fav.likes) {
      fav = blog;
    }
  });

  return fav;
}
