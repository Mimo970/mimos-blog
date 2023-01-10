import React, { createContext, useState, useEffect } from "react";
import data from "../utils/data";
export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  // cart state

  const [dataBlogPosts, setDataBlogPosts] = useState(data.posts);

  const [newBlogPost, setNewBlogPost] = useState({
    // title:'',
    // category:'',
    // body:''
    id: null,
    author: " ",
    category: [],
    title: " ",
    image: " ",
    body: " ",
    bodySummary: " ",
    timeSincePosted: " ",
  });

  return (
    <BlogContext.Provider
      value={{ newBlogPost, setNewBlogPost, dataBlogPosts, setDataBlogPosts }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
