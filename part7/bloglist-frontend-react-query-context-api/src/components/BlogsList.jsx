import { useEffect, useState } from "react";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog as blogDelete,
} from "../utils/serverFunctions.mjs";
import { Blog } from "./Blog";
import { BlogCreation } from "./BlogCreation";
import { Notify } from "./Notify";
import { Togglable } from "./Togglable";
import { useRef } from "react";
import { useSetNotification } from "../providers/notification.provider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function BlogsList({ user }) {
  const setNotification = useSetNotification();
  const creationRef = useRef();
  const queryClient = useQueryClient();

  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  // creation mutation
  const creationMutation = useMutation({
    mutationFn: createBlog,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      // or
      // queryClient.setQueryData(["blogs"], (oldBlogs) => {
      //   return [...oldBlogs, data];
      // });
    },
  });

  async function createNewBlog(blog) {
    try {
      // const createdBlog = await createBlog(user, blog);
      // dispatch(appendBlogAction(createdBlog));
      creationMutation.mutate({ user, blog });
      creationRef.current.toggleVisibility();
    } catch (error) {
      setNotification(error.message);
    }
  }

  async function incrementLikes({ id, likes, author, title, url }) {
    try {
      await updateBlog({ id, author, title, url, likes: likes + 1 });
      const updatedBlogs = blogs.map((blog) => {
        if (blog.id === id) {
          return { ...blog, likes: blog.likes + 1 };
        }

        return blog;
      });
      setBlogs(updatedBlogs);
    } catch (error) {
      setNotification(error.message);
    }
  }

  async function deleteBlog({ id, title }) {
    try {
      const confirmation = window.confirm(
        `Do You really want to delete "${title} ?"`,
      );
      if (!confirmation) return;
      await blogDelete(user, id);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      setNotification(error.message);
    }
  }

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>err</div>;
  return (
    <div>
      <Notify />
      <Togglable buttonLabel="Create New Blog" ref={creationRef}>
        <h2>Create New Blog</h2>
        <BlogCreation createBlog={createNewBlog} />
      </Togglable>

      <h2>Blogs</h2>
      {blogs
        .toSorted((a, b) => Number(b.likes) - Number(a.likes))
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            incrementLikes={incrementLikes}
            user={user}
            deleteBlog={deleteBlog}
          />
        ))}
    </div>
  );
}
