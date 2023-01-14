import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import Blog from "../components/Blog";
import data from "../utils/data";
import Sidebar from "../components/Sidebar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { nanoid } from "nanoid";
// import { clientPromise } from "../utils/mongodb";
import { MongoClient } from "mongodb";

export default function Home({ databaseData }) {
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
  console.log(databaseData);
  // console.log(user);
  return (
    <div>
      <Layout title="Home" user={user}>
        <h1 className="text-4xl font-bold flex justify-center ">React Blog</h1>
        <div className="flex">
          <div className="py-12 px-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {databaseData.map((post) => (
              <Blog post={post}></Blog>
            ))}
          </div>
          <Sidebar></Sidebar>
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
