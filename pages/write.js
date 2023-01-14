import { useRouter } from "next/router";
import React from "react";
import Write from "../components/Write";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const WritePage = () => {
  const router = useRouter();

  async function addBlogHandler(enteredBlogData) {
    const response = await fetch("/api/postBlog", {
      method: "POST",
      body: JSON.stringify(enteredBlogData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  }
  return (
    <div>
      <Write onAddBlog={addBlogHandler}></Write>
    </div>
  );
};

export default WritePage;
export const getServerSideProps = withPageAuthRequired();
