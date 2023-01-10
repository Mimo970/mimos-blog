import Image from "next/image";
import Link from "next/link";
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

      <div className="text-gray-500 flex">
        {post.category.map((cat) => (
          <div className="pr-1">{cat}</div>
        ))}
      </div>
      <div className="flex justify-start ">
        <Link href={`/blog/${post.id}`}>
          <h1 className="text-xl font-bold hover:text-green-800 hover:underline underline-offset-8">
            {post.title}
          </h1>
        </Link>
        <div className="text-lg"> -{post.date}</div>
      </div>
      <section>{post.bodySummary}</section>
      <p> </p>
    </div>
  );
};

export default Blog;
