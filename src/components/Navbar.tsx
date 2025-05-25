"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsLink } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white p-4 my-5 shadow-xl rounded-lg w-full flex justify-between items-center border border-sky-100">
      <div className="flex items-center gap-4">
        <div className="bg-indigo-700 rounded-xl p-2 flex justify-center items-center">
          <BsLink size={24} style={{ color: "white" }} />
        </div>
        <p className="text-[#1A1A1A] text-2xl font-bold">devlinks</p>
      </div>
      <div className="flex gap-10">
        <Link
          href={"/"}
          className={` ${
            pathname === "/"
              ? "text-indigo-600 font-bold bg-indigo-200/80"
              : "text-gray-500 bg-transparent"
          }  flex items-center justify-center gap-2  py-2 px-6 rounded-lg  `}
        >
          <FiLink />
          <p>Links</p>
        </Link>
        <Link
          href={"/profile"}
          className={` ${
            pathname === "/profile"
              ? "text-indigo-600 font-bold bg-indigo-200/80"
              : "text-gray-500 bg-transparent"
          }  flex items-center justify-center gap-2 py-2 px-6 rounded-lg  `}
        >
          <RxAvatar />
          <p>Profile Details</p>
        </Link>
      </div>
      <div className="bg-transparent border font-bold border-indigo-700 py-2 px-6  rounded-lg flex justify-center items-center text-indigo-600">
        Preview
      </div>
    </div>
  );
};
