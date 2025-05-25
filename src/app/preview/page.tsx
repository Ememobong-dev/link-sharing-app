import { Navbar } from "@/components/Navbar";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profileImg from "../../../public/profile_pic.jpg";
import Image from "next/image";

const Preview = () => {
  return (
    <div className="m-0 p-0">
      <div className="bg-indigo-500 px-28 py-3 h-[400px] rounded-b-4xl relative">
        <Navbar />
        <div className="flex justify-center w-full items-center">
          <div className="bg-white absolute -bottom-[80%] rounded-2xl w-[300px] px-4 pt-3 pb-8 flex flex-col justify-center">
            <div className="mt-5 flex flex-col items-center justify-center">
              {/* img area */}
              <div className="">
                <Image
                  src={profileImg}
                  className="rounded-full border-4 border-indigo-700 object-cover w-32 h-32"
                  alt="profile_img"
                />
              </div>
              {/* profile details */}
              <div className="text-center mt-5 text-3xl font-bold text-black-grey">
                Benita Wright
              </div>
              <div className="mx-auto text-center mt-2 text-xs text-black/60">
                Benita@example.com
              </div>
            </div>

            {/* social buttons */}
            <div className="flex flex-col items-center justify-center gap-3 mt-10">
              <div className="cursor-pointer w-full flex justify-between items-center text-white bg-black/90 rounded-lg py-2 px-3">
                <div className="flex gap-3 items-center">
                  <span>
                    <FaGithub />
                  </span>
                  <p>Github</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="cursor-pointer w-full flex justify-between items-center text-white bg-red-400 rounded-lg py-2 px-3">
                <div className="flex gap-3 items-center">
                  <span>
                    <FaYoutube />
                  </span>
                  <p>YouTube</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="cursor-pointer w-full flex justify-between items-center text-white bg-blue-500 rounded-lg py-2 px-3">
                <div className="flex gap-3 items-center">
                  <span>
                    <FaLinkedin />
                  </span>
                  <p>Github</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
