import { createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "../server/blog.mjs";

const { reducer, actions } = createSlice({
  name: "blog",
  initialState: [],
  reducers: {
    set(state, action) {
      return action.payload;
    },

    append(state, action) {
      state.push(action.payload);
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
      const { id } = action.payload;
      const updatedBlog = state.find((blog) => blog.id === id);
      updatedBlog.likes += 1;

      return state.map((blog) => (blog.id === id ? updatedBlog : blog));
    },
  },
});

export default reducer;
export const { set, append, update, like } = actions;

export const initializeBlog = () => async (dispatch, getState) => {
  const blogs = await getBlogs();
  dispatch(set(blogs));
};
