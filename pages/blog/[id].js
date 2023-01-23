import React, { useContext } from "react";
import { useRouter } from "next/router";
import { BlogContext } from "../../contexts/BlogContext";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import { MongoClient, ObjectId } from "mongodb";
import BlogDetail from "../../components/BlogDetail";
const BlogPage = (props) => {
  // const { query } = useRouter();
  // const { id } = query;
  // const postedBlog = data.posts.find((x) => x.id === parseInt(id));
  // if (!postedBlog) {
  //   return <div>Product Not Found</div>;
  // }
  console.log(props.blogData);
  return (
    <Layout>
      {/* <div>hi</div> */}
      <BlogDetail
        id={props.blogData.id}
        title={props.blogData.title}
        author={props.blogData.author}
        image={props.blogData.image}
        body={props.blogData.body}
        category={props.blogData.category}
        date={props.blogData.date}
        bodySummary={props.blogData.bodySummary}
      ></BlogDetail>
    </Layout>
  );
};

export default BlogPage;

export async function getStaticPaths() {
  const Client = await MongoClient.connect(
    "mongodb+srv://mimo1500:35309105Adr@cluster0.gryelc8.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const database = Client.db();

  const blogPostsCollection = database.collection("blog-posts");

  const blogPosts = await blogPostsCollection.find({}, { _id: 1 }).toArray();

  console.log(blogPosts);

  Client.close();

  return {
    fallback: "blocking",

    // fallback: false,
    paths: blogPosts.map((blog) => ({
      params: { id: blog._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch daa for a single meetup

  const blogId = context.params.id;

  const Client = await MongoClient.connect(
    "mongodb+srv://mimo1500:35309105Adr@cluster0.gryelc8.mongodb.net/NextJs-Blog?retryWrites=true&w=majority"
  );
  const database = await Client.db();

  const blogPostsCollection = database.collection("blog-posts");

  // const blogPosts = await blogPostsCollection.find({}, { _id: 1 }).toArray();

  const selectedBlog = await blogPostsCollection.findOne({
    _id: ObjectId(blogId),
  });
  // console.log(selectedBlog);
  Client.close();

  return {
    props: {
      blogData: {
        id: selectedBlog._id.toString(),
        author: selectedBlog.author,
        image: selectedBlog.image,
        body: selectedBlog.body,
        category: selectedBlog.category,
        title: selectedBlog.title,
        date: selectedBlog.date,
        bodySummary: selectedBlog.bodySummary,
      },
    },
    revalidate: 1,
  };
}
