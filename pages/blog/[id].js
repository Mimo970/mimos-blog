import React, { useContext } from "react";
import { useRouter } from "next/router";
import { BlogContext } from "../../contexts/BlogContext";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
const BlogPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const postedBlog = data.posts.find((x) => x.id === parseInt(id));
  if (!postedBlog) {
    return <div>Product Not Found</div>;
  }
  // console.log(postedBlog);
  return (
    <Layout>
      <div className="flex px-10 py-10">
        <div className="px-10 py-10">
          <img
            src={postedBlog.image}
            alt={postedBlog.body}
            // width={150}
            // height={100}
            layout="responsive"
            className="max-h-[600px] rounded-md"
          ></img>
          <div className="text-lg text-green-600">
            Author: {postedBlog.author}
          </div>
          <div className="flex justify-between pr-12 py-2">
            <div className="text-gray-500"> {postedBlog.category}</div>
            <div>{postedBlog.timeSincePosted}</div>
          </div>
          <Link href={`/blog/${postedBlog.id}`}>
            <h1 className="text-xl font-bold">{postedBlog.title}</h1>
          </Link>

          <section className="">{postedBlog.body}</section>
          <p> </p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
