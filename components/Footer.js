import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow-inner md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-gray-500 sm:text-center dark:text-black">
        © 2022{" "}
        <a
          href="https://github.com/Mimo970"
          className="hover:underline"
          target="_blank"
          rel="noopener"
        >
          Alexander Rodriguez™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-black sm:mt-0">
        <li>
          <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>

        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
