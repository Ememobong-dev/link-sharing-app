import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface PhoneDisplayProps {
  profileImg?: StaticImageData;
  profileName?: boolean;
  profileEmail?: boolean;
}

export const PhoneDisplay = ({
  profileImg,
  profileName,
  profileEmail,
}: PhoneDisplayProps) => {
  return (
    <div className="bg-white rounded-lg h-full flex justify-center items-center p-28">
      <div className=" h-[600px] w-[300px] border rounded-4xl p-2">
        <div className="border flex flex-col h-full w-full rounded-4xl p-6">
          <div className="mt-5 flex flex-col items-center justify-center">
            {/* img area */}
            {profileImg ? (
              <div>
                <Image
                  src={profileImg}
                  className="rounded-full border-4 border-indigo-700 object-cover w-32 h-32"
                  alt="profile_img"
                />
              </div>
            ) : (
              <div className="rounded-full mb-8 w-32 h-32 p-3 bg-gray-500/10"></div>
            )}
            {/* profile details */}
            {profileName ? (
              <div className="text-center mt-5 text-3xl font-bold text-black-grey">
                Benita Wright
              </div>
            ) : (
              <div className="rounded-lg w-[70%] py-2 px-8 bg-gray-500/10"></div>
            )}

            {/* Email details */}
            {profileEmail ? (
              <div className="mx-auto text-center mt-2 text-xs text-black/60">
                Benita@example.com
              </div>
            ) : (
              <div className="rounded-lg mx-auto w-1/2 mt-4 py-1 px-3 bg-gray-500/10"></div>
            )}
          </div>

          {/* social buttons */}
          <div className="flex flex-col w-full gap-3 mt-10">
            <div className="cursor-pointer flex justify-between items-center text-white bg-black/90 rounded-lg w-full py-2 px-3">
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
            <div className="cursor-pointer flex justify-between items-center text-white bg-red-400 rounded-lg w-full py-2 px-3">
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
            <div className="cursor-pointer flex justify-between items-center text-white bg-blue-500 rounded-lg w-full py-2 px-3">
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
            <div className="cursor-pointer flex justify-between items-center text-white bg-gray-500/10 rounded-lg py-2 px-8 h-9 w-full"></div>
            <div className="cursor-pointer flex justify-between items-center text-white bg-gray-500/10 rounded-lg py-2 px-8 h-9 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
