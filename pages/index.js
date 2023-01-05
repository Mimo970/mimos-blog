import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import Blog from "../components/Blog";
import data from "../utils/data";
export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="py-12 px-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
          {data.posts.map((post) => (
            <Blog post={post} key={post.id}></Blog>
          ))}
        </div>
      </Layout>
      <div></div>
    </>
  );
}
// const [allPosts, setAllPosts] = useState(data);

// useEffect(() => {
//   // axios
//   //   .get("https://dummyjson.com/posts")
//   //   .then((response) => {
//   //     // Handle response
//   //     setAllPosts(response.data.posts);
//   //     console.log(allPosts);
//   //     // allPosts;
//   //   })
//   //   .catch((err) => {
//   //     // Handle errors
//   //     console.error(err);
//   //   });
//   // fetch("https://dummyjson.com/posts")
//   //   .then((res) => res.json())
//   //   .then(setAllPosts);
//   // console.log(allPosts.posts);
// }, []);
// console.log(data);
