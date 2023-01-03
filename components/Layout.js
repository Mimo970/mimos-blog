import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Mimo's Blog" : "Mimo's Blog"}</title>
        <meta name="description" content="Personal Blog Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
