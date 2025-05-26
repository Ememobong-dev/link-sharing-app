import React from "react";
import { TfiLineDouble } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FiLink } from "react-icons/fi";

export const InputArea = ({ i, handleRemoveClick } : {i : number; handleRemoveClick: () => void}) => {
  return (
    <div className="bg-gray-500/10 p-4 rounded-lg h-auto">
      <div className="flex justify-between items-center">
        <div className="font-bold flex gap-2 items-center text-gray-600 ">
          <TfiLineDouble />
          Link #{i + 1}
        </div>
        <div>
          <p className="text-gray-600 cursor-pointer hover:text-red-600" onClick={handleRemoveClick} >Remove</p>
        </div>
      </div>
      {/* inputs Area */}
      <div className="flex flex-col gap-2 mt-3">
        <p className="text-black/60 font-semibold text-sm">Platform</p>
        <div className="">
          <div className="flex items-center justify-between bg-white border border-black/25 cursor-pointer w-full py-2 px-5 rounded-lg">
            <div className="flex font-semibold gap-2 items-center text-gray-500">
              <span>
                <PiGithubLogoFill />
              </span>
              <p>GitHub</p>
            </div>
            <div className="text-indigo-700 text-3xl">
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <p className="text-black/60 font-semibold text-sm">link</p>
        <div className="">
          <div className="flex items-center justify-between bg-white border border-black/25 cursor-pointer w-full py-2 px-5 rounded-lg">
            <div className="flex w-full font-semibold gap-2 items-center text-gray-500">
              <span>
                <FiLink />
              </span>
              <input
                type="text"
                className="w-full bg-transparent focus:border-0 placeholder-gray-500 focus:outline-0"
                placeholder="https://www.github.com/benwright"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
