import React, { createContext, useState, useEffect } from "react";
import data from "../utils/data";
export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  // cart state

  const [BlogPosts, setBlogPosts] = useState(data.posts);

  return (
    <BlogContext.Provider value={{ BlogPosts, setBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
