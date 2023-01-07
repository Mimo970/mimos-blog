// import { Link } from "react-router-dom";
// import "./sidebar.css";
import { SocialIcon } from "react-social-icons";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-fit flex flex-col items-center bg-gray-100 rounded-3xl px-3 ">
      <div className=" flex flex-col items-center">
        <span className="mx-5 my-2 self-start text-lg font-bold">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1671385233154-e1ea05f6b548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt=""
          //   className="mt-2 "
          className="mt-2 max-h-[480px] rounded-md "
        />
        <h1 className="text-lg font-semibold px-5">
          Hey there, i'm Alex, a Web Developer
        </h1>
        <p className="px-5 py-5">
          I am a software engineer speacializing in web development.
        </p>
      </div>
      <div className=" ">
        <span className="border-b-4 pb-2">CATEGORIES</span>
        <ul className="mt-4 mb-5 grid grid-cols-2">
          <li className="hover:underline hover:text-red-600 underline-offset-8">
            <Link className=" " href="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="hover:underline hover:text-red-600 underline-offset-8 ">
            <Link className="link" href="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="hover:underline hover:text-red-600 underline-offset-8 ">
            <Link className="link" href="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className=" hover:underline hover:text-red-600 underline-offset-8 ">
            <Link className="link" href="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="hover:underline hover:text-red-600 underline-offset-8 ">
            <Link className="link" href="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="hover:underline hover:text-red-600 underline-offset-8 ">
            <Link className="link" href="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-5 ">
        <span className=" text-lg">Contacts, Socials </span>
        <div className="flex justify-evenly">
          <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
          <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />
          <SocialIcon network="pinterest" style={{ height: 25, width: 25 }} />
          <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
        </div>
      </div>
    </div>
  );
}
