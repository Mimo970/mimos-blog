import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

import Link from "next/link";
// import axios from "axios";
import Router from "next/router";
// import getConfig from "next/config";
// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import auth0 from "auth0";

// import { MongoClient } from "mongodb";

const UserPage = () => {
  const { user, error, isLoading } = useUser();

  const [userProfile, setUserProfile] = useState({
    name: user.name,
    email: user.email,
    authorId: user.email,
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setUserProfile((prevUserProfile) => {
      return {
        ...prevUserProfile,
        [name]: value,
      };
    });
  }

  // useEffect(() => {
  //   if (!user) {
  //     Router.push("/api/auth/login");
  //   }
  // }, []);

  // console.log(userProfile);

  // var options = {
  console.log(user.picture);
  //   method: "POST",
  //   url: "https://dev-pdlrh2yvym44io0q.us.auth0.com/dbconnections/change_password",
  //   headers: { "content-type": "application/json" },
  //   data: {
  //     client_id: "f9KvKxY2vdOjkdHk7mtfTs26SiH8zomp",
  //     email: user.email,
  //     connection: "c",
  //   },
  // };
  // const changePassword = () => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  return (
    <Layout user={user}>
      <form className="mx-auto max-w-screen-md">
        <img
          src={user.picture}
          alt={user.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="mb-4 text-xl">Blog Profile</h1>

        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="h-8 w-full bg-zinc-200 rounded border border-black text-black focus:ring-0 "
            id="name"
            autoFocus
            value={userProfile.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full bg-zinc-200 rounded border border-black  text-black focus:ring-0"
            id="email"
            value={userProfile.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </Layout>
  );
};

export default UserPage;
// export const getServerSideProps = withPageAuthRequired();

// export async function getStaticPaths() {
//   const Client = await MongoClient.connect(
//     "mongodb+srv://mimo1500:35309105Adr@cluster0.gryelc8.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const database = Client.db();

//   const blogPostsCollection = database.collection("blog-posts");

//   // const blogPosts = await blogPostsCollection
//   //   .find({ authorId: "12345" }, { authorId: 1 })
//   //   .toArray();

//   // const findBlogPosts = async (authorId) => {
//   const blogPosts = await blogPostsCollection
//     .find({}, { authorId: 1 })
//     .toArray();

//   Client.close();

//   return {
//     fallback: "blocking",

//     // fallback: false,
//     paths: blogPosts.map((blog) => ({
//       params: { authorId: blog.authorId },
//     })),
//   };
// }

// export async function getStaticProps(context) {
//   //fetch daa for a single meetup
//   const findBlogPosts = async (authorId) => {
//     const blogPosts = await blogPostsCollection
//       .find({ authorId: authorId }, { authorId: 1 })
//       .toArray();
//     return blogPosts;
//   };

//   const authorId = context.params.authorId;

//   const Client = await MongoClient.connect(
//     "mongodb+srv://mimo1500:35309105Adr@cluster0.gryelc8.mongodb.net/NextJs-Blog?retryWrites=true&w=majority"
//   );
//   const database = await Client.db();

//   const blogPostsCollection = database.collection("blog-posts");

//   // const blogPosts = await blogPostsCollection.find({}, { _id: 1 }).toArray();

//   const selectedBlog = await blogPostsCollection
//     .find({}, { authorId: authorId })
//     .toArray();
//   const blogPosts = await findBlogPosts(context.params.authorId);
//   const result = JSON.parse(JSON.stringify(blogPosts));
//   console.log(result);
//   Client.close();

//   return {
//     props: { result },
//     revalidate: 1,
//   };
// }
