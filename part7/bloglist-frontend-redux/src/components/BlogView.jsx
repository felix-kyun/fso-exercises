import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useMatch } from "react-router";
import { likeBlog } from "../reducers/blogReducer.mjs";
import { CommentView } from "./CommentView";

export const BlogView = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  const match = useMatch("/blogs/:id");
  if (!match) return <div>Invalid Path</div>;

  const blog = blogs.find(({ id }) => id === match.params.id);
  if (!blog) return <div>Not Found</div>;

  return (
    <>
      <div>
        <h1>{blog.title}</h1>
        <a href={blog.url}>{blog.url}</a>
        <p>
          {blog.likes} likes
          <button onClick={() => dispatch(likeBlog(blog))}>Like</button>
        </p>
        added by {blog.author}
      </div>
      <CommentView />
    </>
  );
};
