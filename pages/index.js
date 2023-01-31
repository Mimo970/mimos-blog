import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../components/Blog";

import Sidebar from "../components/Sidebar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { nanoid } from "nanoid";
// import { clientPromise } from "../utils/mongodb";
import { MongoClient } from "mongodb";
import Cookies from "js-cookie";
export default function Home({ databaseData }) {
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
  // console.log(databaseData);
  // console.log(user);
  // Cookies.set("hola", "me llamo");

  return (
    <div className="">
      <Layout title="Home" user={user}>
        <h1 className="py-4 text-4xl font-bold flex justify-center dark:text-zinc-400">
          React Blog
        </h1>

        <div className="py-4 flex min-[240px]:flex-col max-[700px]:items-center md:flex-row lg:flex-row lg:justify-center mx-2 my-2 ">
          <div className="py-6 px-6 mx-12  rounded-xl   dark:bg-zinc-800 dark:border-gray-700">
            {databaseData.map((post, index) => (
              <Blog post={post} key={index}></Blog>
            ))}
          </div>
          <div className="">
            <Sidebar></Sidebar>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const Client = await MongoClient.connect(
    "mongodb+srv://mimo1500:35309105Adr@cluster0.gryelc8.mongodb.net/NextJs-Blog?retryWrites=true&w=majority"
  );
  const database = await Client.db();

  const blogPostsCollection = database.collection("blog-posts");

  const blogPosts = await blogPostsCollection.find().toArray();

  const dbBlogPosts = JSON.parse(JSON.stringify(blogPosts));

  // const newdbBlogPosts = blogPosts.map((blog) => ({
  //   author: blog.author,
  //   category: blog.category,
  //   title: blog.title,
  //   date: blog.date,
  //   body: blog.body,
  // }));

  // console.log(newdbBlogPosts);

  Client.close();
  return {
    props: {
      databaseData: dbBlogPosts,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   // const { db } = await clientPromise();
//   // const data = await db.collection("blog-posts").find({}).limit(20).toArray();

//   // const properties = JSON.parse(JSON.stringify(data));
//   let res = await fetch("http://localhost:3000/api/blog-posts", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let allPosts = await res.json();
//   let dbdata = allPosts.data;
//   return {
//     props: { dbdata },
//   };
// }
