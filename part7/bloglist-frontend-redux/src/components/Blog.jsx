import { Link } from "react-router";
import { TogglableInline } from "./TogglableInline";

export function Blog({ blog, incrementLikes, deleteBlog, user }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        width: "fit-content",
        minWidth: "25%",
      }}
    >
      <span>
        <Link to={`/blogs/${blog.id}`}>
          {blog.title} - {blog.author}
        </Link>
      </span>
      &nbsp;
    </div>
  );
}
