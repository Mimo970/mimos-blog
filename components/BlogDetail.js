// import React from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogDetail = ({ blogData }) => {
  // console.log(blogData);
  return (
    <div className="flex">
      <div className="flex px-10">
        <div className="px-10 py-10">
          <img
            src={blogData.image}
            alt={blogData.body}
            // width={150}
            // height={100}
            layout="responsive"
            className="max-h-[600px] rounded-md"
          ></img>
          <div className="text-lg text-green-600">
            Author: {blogData.author}
          </div>

          <div className="text-gray-500"> {blogData.category}</div>
          <div className="flex justify-start  py-2">
            <Link href={`/blog/${blogData.id}`}>
              <h1 className="text-xl font-bold">{blogData.title}</h1>
            </Link>
            <div className="text-lg">- {blogData.timeSincePosted}</div>
          </div>
          <section className="">{blogData.body}</section>
          <p> </p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default BlogDetail;
