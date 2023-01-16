import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = ({ post }) => {
  const { _id, image, body, category, title, date, bodySummary } = post;
  // console.log(post);
  return (
    <div key={_id}>
      <img
        src={image}
        alt={body}
        // width={150}
        // height={100}
        layout="responsive"
        className="max-h-[240px] rounded-md"
      ></img>

      <div className="text-gray-500 flex">
        {/* {post.category.map((cat) => (
          <div key={cat} className="pr-1">
            {cat}
          </div>
        ))} */}
        <div key={category} className="pr-1">
          {category}
        </div>
      </div>
      <div className="flex justify-start ">
        <Link href={`/blog/${_id}`}>
          <h1 className="dark:text-zinc-300 text-xl font-bold hover:text-green-800 hover:underline underline-offset-8">
            {title}
          </h1>
        </Link>
        <div className="text-lg dark:text-zinc-300"> -{date}</div>
      </div>
      <section className="dark:text-zinc-200">{bodySummary}</section>
      <p> </p>
    </div>
  );
};

export default Blog;
