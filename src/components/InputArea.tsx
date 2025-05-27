"use client";

import React, { useState } from "react";
import { TfiLineDouble } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiTiktokLogoFill } from "react-icons/pi";
import { FiLink } from "react-icons/fi";

const linkOptions = [
  {
    linkIcon: <PiGithubLogoFill />,
    linkName: "GitHub",
  },
  {
    linkIcon: <PiYoutubeLogoFill />,
    linkName: "YouTube",
  },
  {
    linkIcon: <PiLinkedinLogoFill />,
    linkName: "LinkedIn",
  },
  {
    linkIcon: <PiTiktokLogoFill />,
    linkName: "Tiktok",
  },
  {
    linkIcon: <PiGithubLogoFill />,
    linkName: "GitHub",
  },
  {
    linkIcon: <PiYoutubeLogoFill />,
    linkName: "YouTube",
  },
  {
    linkIcon: <PiLinkedinLogoFill />,
    linkName: "LinkedIn",
  },
  {
    linkIcon: <PiTiktokLogoFill />,
    linkName: "Tiktok",
  },
];

export const InputArea = ({
  i,
  handleRemoveClick,
  linkError,
  linkValue,
  handleOnChange,
}: {
  i: number;
  linkError: string;
  linkValue: string;
  handleOnChange: (e: string) => void;
  handleRemoveClick: () => void;
}) => {
  const [selectOptionOpen, setSelectOptionOpen] = useState(false);
  const [selectedObjectIndex, setSelectedObjectIndex] = useState(0);

  return (
    <div className="bg-gray-500/10 p-4 rounded-lg h-auto">
      <div className="flex justify-between items-center">
        <div className="font-bold flex gap-2 items-center text-gray-600 ">
          <TfiLineDouble />
          Link #{i + 1}
        </div>
        <div>
          <p
            className="text-gray-600 cursor-pointer hover:text-red-600"
            onClick={handleRemoveClick}
          >
            Remove
          </p>
        </div>
      </div>
      {/* inputs Area */}
      <div className="flex flex-col gap-2 mt-3">
        <p className="text-black/60 font-semibold text-sm">Platform</p>
        <div className="relative">
          <div
            onClick={() => setSelectOptionOpen(!selectOptionOpen)}
            className="flex items-center justify-between bg-white border border-black/25 cursor-pointer w-full py-2 px-5 rounded-lg"
          >
            <div className="flex font-semibold gap-2 items-center text-gray-500">
              <span>{linkOptions[selectedObjectIndex].linkIcon}</span>
              <p>{linkOptions[selectedObjectIndex].linkName}</p>
            </div>
            <div className="text-indigo-700 text-3xl">
              <RiArrowDropDownLine />
            </div>
          </div>
          {selectOptionOpen && (
            <div className="w-full rounded-lg absolute z-50 bg-white border text-black">
              {linkOptions.map((item, index) => (
                <div
                  onClick={() => {
                    setSelectedObjectIndex(index);
                    setSelectOptionOpen(false);
                  }}
                  key={index}
                  className="flex cursor-pointer hover:text-white hover:bg-indigo-500 font-semibold gap-2 items-center  p-2  text-gray-500"
                >
                  <span>{item.linkIcon}</span>
                  {item.linkName}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <p className="text-black/60 font-semibold text-sm">link</p>
        <div className="">
          <div className="flex items-center justify-between bg-white border border-black/25 w-full py-2 px-5 rounded-lg">
            <div className="flex w-full font-semibold gap-2 items-center text-gray-500">
              <span>
                <FiLink />
              </span>
              <input
                type="text"
                value={linkValue}
                onChange={(e) => {
                  handleOnChange(e.target.value);
                }}
                className="w-full bg-transparent focus:border-0 placeholder-gray-500 focus:outline-0"
                placeholder="https://www.github.com/benwright"
              />
            </div>
          </div>
        </div>
      </div>
      {linkError && <p className="text-red-800 text-base"> {linkError} </p>}
    </div>
  );
};
