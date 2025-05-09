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
        {" "}
        {blog.title} - {blog.author}
      </span>{" "}
      &nbsp;
      <TogglableInline buttonLabel="View">
        <p> {blog.url}</p>
        <p>
          Likes: {blog.likes}{" "}
          <button onClick={() => incrementLikes(blog)}>like</button>
        </p>
        {user.id === blog.user.id && (
          <button onClick={() => deleteBlog(blog)}>delete</button>
        )}
      </TogglableInline>
    </div>
  );
}
