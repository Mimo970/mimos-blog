import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ThemeToggler from "../components/ThemeToggler";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
// const { hash } = require("bcrypt-deterministic");
// import hash from "bcrypt-deterministic";

export default function Navbar({ user }) {
  const [navbar, setNavbar] = useState(false);
  // console.log(user);
  const password = "BCryptIsCool";

  // Assume top-level await or inside an async function

  // async function test() {
  //   const hashedWithFixedSalt = await hash(data, { salt: "salty", rounds: 10 });
  //   const hashedWithDynamicSalt = await hash(data, { rounds: 10 });
  //   await compare(password, hashedWithFixedSalt); // true
  //   await compare(password, hashedWithDynamicSalt); // true
  // }

  return (
    <div>
      <nav className="w-full bg-white shadow dark:bg-zinc-800 dark:border-gray-700 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-black font-bold dark:text-zinc-400">
                  Dev Blog
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black transition duration-200 hover:text-gray-600 hover:underline underline-offset-8 dark:text-zinc-400">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-black transition duration-200 hover:text-gray-500 hover:underline underline-offset-8 dark:text-zinc-400">
                  <Link href="/write">Write</Link>
                </li>
                <li className="text-black transition duration-200 hover:text-gray-500  hover:underline underline-offset-8 dark:text-zinc-400">
                  <Link href="/about">About </Link>
                </li>
                <li className="text-black transition duration-200 hover:text-gray-500 hover:underline underline-offset-8 dark:text-zinc-400">
                  <Link href="/contact">Contact </Link>
                </li>
                {/* <li className="text-black transition duration-200 hover:text-gray-500 hover:underline underline-offset-8 ">
                  <Link href="/login">Log in</Link>
                </li> */}
                {user && (
                  <>
                    <li className="text-black transition duration-200 hover:text-gray-500 hover:underline underline-offset-8 dark:text-zinc-400">
                      <Link href="/api/auth/logout">Log out</Link>
                    </li>
                    <li className="text-black transition duration-200 hover:text-gray-500 hover:underline underline-offset-8 dark:text-zinc-400">
                      <Link href={`/user/${user.name}`}>
                        {/* <img src={user.image} alt="" /> */}
                        {user.name}
                      </Link>
                    </li>
                  </>
                )}
                {!user && (
                  <li className="text-black transition duration-200 hover:text-gray-500 hover:underline underline-offset-8 dark:text-zinc-400">
                    <Link href="/api/auth/login">Sign in</Link>
                  </li>
                )}
                <ThemeToggler />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="flex justify-center items-center mt-8">
        <h1 className="text-2xl font-bold text-purple-500">
          Create Responsive Navbar Menu in Next js with Tailwind CSS
        </h1>
      </div>   */}
    </div>
  );
}
