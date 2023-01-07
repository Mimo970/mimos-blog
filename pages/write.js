import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
const WritePage = () => {
  return (
    <div>
      <Layout title="Write">
        <h1 className="text-4xl py-4 px-10">Create your own blog post</h1>
        <div>
          <div className="md:grid md:grid-cols-1 md:gap-4 px-12 ">
            <div className="md:col-span-1">
              <div className="py-2 px-4 sm:px-0">
                <label htmlFor="newBlogPostTitle">Blog Title: </label>
                <input
                  className="bg-gray-200 w-1/4 rounded-lg"
                  placeholder=" Write your title  here..."
                  type="text"
                  name="newBlogPostTitle"
                  id="newBlogPostTitle"
                />
              </div>
              <label htmlFor="newBlogPostCategory">Blog Category: </label>
              <input
                id="newBlogPostCategory"
                name="newBlogPostCategory"
                type="text"
                placeholder=" Write your category here..."
                className="bg-gray-200 w-1/4 rounded-lg"
              />
            </div>
            <div className="md:col-span-1"></div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <label htmlFor="newBlogPostBody">Blog Post:</label>
              <textarea
                className="bg-gray-200 w-full rounded-lg "
                name="newBlogPostBody"
                id="newBlogPostBody"
                cols="30"
                rows="10"
                placeholder=" Write your blog post here..."
              ></textarea>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
              </label>
              <input id="fileInput" type="file" />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Post Blog
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default WritePage;
