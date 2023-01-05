import Image from "next/image";
import React, { useEffect, useState } from "react";

const Blog = ({ post }) => {
  return (
    <div>
      <img
        src={post.image}
        alt={post.body}
        // width={150}
        // height={100}
        layout="responsive"
        className="max-h-[240px] rounded-md"
      ></img>
      <div className="flex justify-between">
        <div className="text-gray-500"> {post.category}</div>
        <div>{post.timeSincePosted}</div>
      </div>

      <h1 className="text-xl font-bold">{post.title}</h1>
      <section className="">{post.body}</section>
      <p> </p>
    </div>
  );
};

export default Blog;
