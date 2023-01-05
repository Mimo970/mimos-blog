import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Head from "next/head";
const Layout = ({ children, title }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Head>
        <title>{title ? title + " - Mimo's Blog" : "Mimo's Blog"}</title>
        <meta name="description" content="Personal Blog Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="flex px-12 py-10">
        <main>{children}</main>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
