import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = ({ post }) => {
  const { _id, image, author, body, category, title, date, bodySummary } = post;
  // console.log(post);
  return (
    <div className="grid gap-x-8" key={_id}>
      <div className="flex gap-x-8">
        <div>
          <img
            src={image}
            alt={body}
            // width={150}
            // height={100}
            layout="responsive"
            className="rounded-md w-full"
          ></img>
        </div>

        <div className="flex flex-col justify-center ">
          <div className="">
            <div className="flex items-center">
              <Link href={`/blog/${_id}`}>
                <h1 className=" dark:text-zinc-300 text-3xl font-bold hover:text-gray-700 hover:underline underline-offset-8">
                  {title}&nbsp;
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <div> {author}&nbsp; </div>
              <div className="text-sm dark:text-zinc-300"> - {date}</div>
            </div>

            <div className="text-gray-500 flex">
              <div key={category} className="">
                {category}
              </div>
            </div>

            <section className="dark:text-zinc-200">{bodySummary}</section>
          </div>

          <div>
            <Link href={`/blog/${_id}`}>
              <button className="bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
