import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = ({ post }) => {
  const { _id, image, author, body, category, title, date, bodySummary } = post;
  // console.log(post);
  return (
    // <div className="grid gap-x-8 ">
    <div className="max-w-screen-lg  py-2" key={_id}>
      <div className="flex lg:flex-row lg:justify-center min-[240px]:flex-col max-[640px]: sm:flex-col sm:items-center md:flex-col md:items-center ">
        <div className="px-2 w-full ">
          <img
            // className="object-cover"
            className=" mb-4 rounded-md object-cover object-center w-full  md:h-64 lg:h-128"
            src={image}
            alt={body}
            layout="responsive"
          />

          {/* <img
            className="w-full mb-4 rounded-md object-cover object-center"
            src={image}
            alt={body}
          /> */}
        </div>

        <div className="px-2 flex flex-col justify-center ">
          <div className="">
            <div className="flex items-center">
              <Link href={`/blog/${_id}`}>
                <h1 className=" dark:text-zinc-300 text-base md:text-lg lg:text-xl font-bold hover:text-gray-700 hover:underline underline-offset-8">
                  {title}&nbsp;
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <div className="lg:text-sm  md:text-[10px] min-[320px]:text-[8px] max-[640px]:text-[8px]">
                {author}&nbsp;
              </div>
              <div className="text-sm md:text-base dark:text-zinc-300 lg:text-sm  md:text-[10px] sm:text-[8px] min-[320px]:text-[8px] max-[640px]:text-[8px]">
                - {date}
              </div>
            </div>

            <div className="text-gray-500 flex">
              <div
                key={category}
                className="lg:text-sm  md:text-[10px] sm:text-[8px] min-[320px]:text-[5px] max-[640px]:text-[8px]"
              >
                {category}
              </div>
            </div>

            <section className="dark:text-zinc-200 lg:text-sm  md:text-[10px] sm:text-[8px] min-[320px]:text-[8px] max-[640px]:text-[8px]">
              {bodySummary}
            </section>
          </div>

          <div>
            <Link href={`/blog/${_id}`}>
              <button className="min-[320px]:text-[5px] max-[640px]:text-[8px] md:text-xs sm:text-xs bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-1 px-2 border border-blue-600 hover:border-transparent rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>

    // <div className="grid gap-x-8 " key={_id}>
    //   <div className="flex gap-x-8">
    //     <div className="w-full md:w-3/4 lg:w-2/2">
    //       <img className="w-full mb-4 rounded-md" src={image} alt={body} />
    //     </div>

    //     <div className="flex flex-col justify-center w-full md:w-3/4 lg:w-2/2">
    //       <div className="">
    //         <div className="flex items-center">
    //           <Link href={`/blog/${_id}`}>
    //             <h1 className=" dark:text-zinc-300 text-3xl font-bold hover:text-gray-700 hover:underline underline-offset-8">
    //               {title}&nbsp;
    //             </h1>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-1">
    //         <div className="flex items-center">
    //           <div> {author}&nbsp; </div>
    //           <div className="text-sm dark:text-zinc-300"> - {date}</div>
    //         </div>

    //         <div className="text-gray-500 flex">
    //           <div key={category} className="">
    //             {category}
    //           </div>
    //         </div>

    //         <section className="dark:text-zinc-200">{bodySummary}</section>
    //       </div>

    //       <div>
    //         <Link href={`/blog/${_id}`}>
    //           <button className="bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded">
    //             Read More
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Blog;
