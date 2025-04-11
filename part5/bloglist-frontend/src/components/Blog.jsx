import { TogglableInline } from "./TogglableInline";

export function Blog({ blog }) {
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
      <span> {blog.title}</span> &nbsp;
      <TogglableInline buttonLabel="View">
        <p> {blog.url}</p>
        <p>
          Likes: {blog.likes} <button>like</button>
        </p>
        <p>Author: {blog.author}</p>
      </TogglableInline>
    </div>
  );
}
