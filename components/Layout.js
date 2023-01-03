import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
