import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { BlogContext } from "../contexts/BlogContext";
import ImageUpload from "../components/ImageUpload";
import { useUser } from "@auth0/nextjs-auth0/client";

const WritePage = () => {
  const { newBlogPost, setNewBlogPost, dataBlogPosts, setDataBlogPosts } =
    useContext(BlogContext);
  const { user, error, isLoading } = useUser();
  console.log(user);

  let currentDate = new Date().toJSON().slice(0, 10);

  const handleRandom = () => {
    setDataBlogPosts((prev) =>
      prev.map((item) => {
        if (item) {
          return {
            ...item,
            date: currentDate,
          };
        }
      })
    );
  };

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setNewBlogPost((prevBlogPost) => {
      console.log(prevBlogPost);
      // prevBlogPost.title = "hola";
      return {
        ...prevBlogPost,
        id: nanoid(),
        date: (prevBlogPost.id = currentDate),
        bodySummary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos magni suscipit iure ratione provident veritatis doloribus fugit repellendus dicta cupiditate dolorem, qui rerum nemo atque porro omnis! Suscipit, magni.",
        author: user.name,
        image:
          "https://images.unsplash.com/photo-1671725779260-8d17bc0e3f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    setDataBlogPosts((prevDataBlogPosts) => [
      ...prevDataBlogPosts,
      newBlogPost,
    ]);
  }
  // var date = moment();

  console.log(dataBlogPosts);

  return (
    <div>
      <Layout title="Write">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl py-4 px-10">Create your own blog post</h1>
          <div>
            <div className="md:grid md:grid-cols-1 md:gap-4 px-12 ">
              <div className="md:col-span-1">
                <div className="py-2 px-4 sm:px-0">
                  <label htmlFor="title">Blog Title: </label>
                  <input
                    className="bg-gray-200 w-2/4 rounded-lg"
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
                  className="bg-gray-200 w-2/4 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-1"></div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <label htmlFor="body">Blog Post:</label>
                <textarea
                  className="bg-gray-200 w-full rounded-lg "
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  placeholder=" Write your blog post here..."
                  onChange={handleChange}
                ></textarea>
              </div>
              {/* <div className="mt-5  md:mt-0 md:col-span-2">
                 
                <label htmlFor="file">Upload Image</label>

                <ImageUpload id="file" />
              </div> */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Post Blog
                </button>
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
