import { createSlice } from "@reduxjs/toolkit";
import {
  createBlogServer,
  deleteBlogServer,
  getBlogsServer,
  updateBlogServer,
} from "../server/blog.mjs";

const { reducer, actions } = createSlice({
  name: "blog",
  initialState: [],
  reducers: {
    set(state, action) {
      return action.payload;
    },

    append(state, action) {
      state.push(action.payload);
      console.log(state);
    },

    update(state, action) {
      const { id, title, author, url, likes } = action.payload;
      const updatedBlog = state.find((blog) => blog.id === id);

      updatedBlog.title ??= title;
      updatedBlog.author ??= author;
      updatedBlog.url ??= url;
      updatedBlog.likes ??= likes;

      return state.map((blog) => (blog.id === id ? updatedBlog : blog));
    },

    like(state, action) {
      return state.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog,
      );
    },

    remove(state, action) {
      return state.filter((blog) => blog.id !== action.payload);
    },
  },
});

export default reducer;
export const { set, append, update, like, remove } = actions;

export const initializeBlog = () => async (dispatch) => {
  const blogs = await getBlogsServer();
  dispatch(set(blogs));
};

export const createBlog = (user, blog) => async (dispatch) => {
  const createdBlog = await createBlogServer(user, blog);
  console.log(createdBlog);
  dispatch(append(createdBlog));
};

export const deleteBlog = (user, id) => async (dispatch) => {
  await deleteBlogServer(user, id);
  dispatch(remove(id));
};

export const likeBlog = (blog) => async (dispatch) => {
  const updatedBlog = { ...blog, likes: blog.likes + 1 };
  await updateBlogServer(updatedBlog);
  dispatch(like(updatedBlog));
};
