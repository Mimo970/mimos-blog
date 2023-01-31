// import React from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const BlogDetail = ({
  id,
  author,
  image,
  body,
  category,
  title,
  timeSincePosted,
  date,
  bodySummary,
}) => {
  // console.log(props);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex   px-10">
        <Link href={"/"}>
          <h1 className="pb-2 inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
            back to all posts
          </h1>
        </Link>
        <div className="px-10 py-10">
          <img
            src={image}
            alt={body}
            // width={150}
            // height={100}
            layout="responsive"
            className="max-h-[600px] rounded-md"
          ></img>
          <div className="flex items-center">
            <div className="text-lg dark:text-zinc-200">Author: {author}</div>
            <div className="text-sm dark:text-zinc-500">&nbsp; - {date}</div>
          </div>

          <div className="flex justify-start  py-2">
            <Link href={`/blog/${id}`}>
              <h1 className="text-5xl font-bold dark:text-zinc-200">
                {title}{" "}
              </h1>
            </Link>

            {/* <div className="text-lg"> {timeSincePosted}</div> */}
          </div>
          <div className="text-gray-500"> {category}</div>
          <section className="dark:text-zinc-200">{body}</section>
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default BlogDetail;
