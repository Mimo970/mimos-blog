import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Head from "next/head";
const Layout = ({ children, title, user }) => {
  // console.log(user);
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Head>
        <title>{title ? title + " - Mimo's Blog" : "Mimo's Blog"}</title>
        <meta name="description" content="Personal Blog Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar user={user}></Navbar>
      </header>
      <div className=" ">
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
