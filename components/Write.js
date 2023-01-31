import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Layout from "./Layout";
import Sidebar from "./Sidebar";
import { BlogContext } from "../contexts/BlogContext";
import ImageUpload from "./ImageUpload";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useForm } from "react-hook-form";
const WritePage = (props) => {
  const { newBlogPost, setNewBlogPost, dataBlogPosts, setDataBlogPosts } =
    useContext(BlogContext);
  const { user, error, isLoading } = useUser();
  console.log(user);

  let currentDate = new Date().toJSON().slice(0, 10);

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setNewBlogPost((prevBlogPost) => {
      // console.log(prevBlogPost);
      return {
        ...prevBlogPost,
        // id: nanoid(),
        date: (prevBlogPost.date = currentDate),
        bodySummary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos magni suscipit iure ratione provident veritatis doloribus fugit repellendus dicta cupiditate dolorem, qui rerum nemo atque porro omnis! Suscipit, magni.",
        author: user.name,
        authorId: user.email,
        [name]: value,
      };
    });
  }

  async function handleBlogSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    setDataBlogPosts((prevDataBlogPosts) => [
      ...prevDataBlogPosts,
      newBlogPost,
    ]);
    props.onAddBlog(newBlogPost);
  }
  // var date = moment();

  // console.log(dataBlogPosts);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Layout title="Write" user={user}>
        <form onSubmit={handleBlogSubmit}>
          <h1 className="text-4xl py-4 px-10">Create your own blog post</h1>
          <div>
            {/* <div className="md:grid md:grid-cols-1 md:gap-4 px-12 ">
              <div className="md:col-span-1">
                <div className="py-2 px-4 sm:px-0">
                  <label htmlFor="title">Blog Title: </label>
                  <input
                    className="bg-gray-200 w-2/4 rounded-lg dark:text-black"
                    placeholder=" Write your title  here..."
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="category">Blog Category: </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  placeholder=" Write your category here..."
                  className="bg-gray-200 w-2/4 rounded-lg dark:text-black"
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-1"></div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <label htmlFor="body">Blog Post:</label>
                <textarea
                  className="bg-gray-200 w-full rounded-lg dark:text-black"
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  placeholder=" Write your blog post here..."
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-5  md:mt-0 md:col-span-2">
                <label htmlFor="image">Upload Image:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="image"
                  placeholder=" Enter image URL here..."
                  className="bg-gray-200 w-full rounded-lg dark:text-black"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Post Blog
                </button>
              </div>
            </div> */}
            <div class="relative min-h-screen">
              <div class="container mx-auto flex flex-col items-center justify-center">
                <div class="w-full">
                  <input
                    type="text"
                    class="dark:bg-zinc-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    placeholder=" Write your title  here..."
                    name="title"
                    id="title"
                    onChange={handleChange}
                  />
                </div>
                <div class="w-full mt-4">
                  <input
                    className="dark:bg-zinc-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="category"
                    name="category"
                    type="text"
                    placeholder=" Write your category here..."
                    onChange={handleChange}
                  />
                </div>
                <div class="w-full mt-4">
                  <textarea
                    class="h-64 dark:bg-zinc-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    name="body"
                    id="body"
                    // cols="30"
                    // rows="10"
                    placeholder=" Write your blog post here..."
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div class="w-full mt-4">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="image"
                    placeholder=" Enter image URL here..."
                    className="dark:bg-zinc-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  />
                </div>
                <div class="w-full mt-4">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Post Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default WritePage;
export const getServerSideProps = withPageAuthRequired();
