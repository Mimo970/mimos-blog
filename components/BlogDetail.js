// import React from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const BlogDetail = (props) => {
  console.log(props);
  return (
    <div className="flex">
      <div className="flex px-10">
        <div className="px-10 py-10">
          <img
            src={props.image}
            alt={props.body}
            // width={150}
            // height={100}
            layout="responsive"
            className="max-h-[600px] rounded-md"
          ></img>
          <div className="text-lg text-green-600">Author: {props.author}</div>

          <div className="text-gray-500"> {props.category}</div>
          <div className="flex justify-start  py-2">
            <Link href={`/blog/${props.id}`}>
              <h1 className="text-xl font-bold">{props.title}</h1>
            </Link>
            <div className="text-lg">- {props.timeSincePosted}</div>
          </div>
          <section className="">{props.body}</section>
          <p> </p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default BlogDetail;
