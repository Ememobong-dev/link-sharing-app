import { Navbar } from "@/components/Navbar";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Preview = () => {
  return (
    <div className="m-0 p-0">
      <div className="bg-indigo-500 px-28 py-3 h-[400px] rounded-b-4xl relative">
        <Navbar />
        <div className="flex justify-center w-full items-center">
          <div className="bg-white rounded-lg w-[400px] p-4 flex flex-col justify-center">
           
            <div className="mt-5 flex flex-col items-center justify-center">
              {/* img area */}
              <div className="rounded-full mb-8 w-28 h-28x` p-3 bg-gray-500/10"></div>
              {/* profile details */}
              <div className="rounded-lg w-[50%] py-2 px-8 bg-gray-500/10"></div>
              <div className="rounded-lg mx-auto w-[25%] mt-4 py-1 px-3 bg-gray-500/10"></div>
            </div>

            {/* social buttons */}
            <div className="flex flex-col items-center  justify-center gap-3 mt-10">
              <div className="cursor-pointer w-1/2 flex justify-between items-center text-white bg-black/90 rounded-lg py-2 px-3">
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
              <div className="cursor-pointer w-1/2 flex justify-between items-center text-white bg-red-400 rounded-lg py-2 px-3">
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
              <div className="cursor-pointer w-1/2 flex justify-between items-center text-white bg-blue-500 rounded-lg py-2 px-3">
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
