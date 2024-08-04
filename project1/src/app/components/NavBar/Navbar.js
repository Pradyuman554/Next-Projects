"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {name : "Register", link: "/register"},
  {name : "Login", link: "/login"},
  {name : "Forgot Password", link: "/forgot_password"},
  {name: "Products", link: "/products"},
];

export default function NavBar() {
  const pathname = usePathname();
  const [value, setValue] = useState("");
    return (
      <div className="navbar bg-[#162E49] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

              {
                navLinks.map((links) => {
                  <Link href = {links.link}>{links.name}</Link>
                }
                )
              }
          </div>
          <Link className="btn btn-ghost text-xl" href="/">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          {
                navLinks.map((links) => {
                  const isActive = pathname.startsWith(links.link);
                  return (
                    <Link href = {links.link} className={isActive? "bg-white px-4 text-[#162E49]" : "px-4"}>{links.name}</Link>
                  );
                }
                )
              }
          </ul>
        </div>
        <div className="navbar-end width-full">
          <input className="text-black" value={value} onChange={(e)=>setValue(e.target.value)}></input>
          <a className="btn ml-2">Button</a>
        </div>
      </div>
    );
}