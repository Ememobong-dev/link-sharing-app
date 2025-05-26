"use client";

import { Navbar } from "@/components/Navbar";
import { PhoneDisplay } from "@/components/PhoneDisplay";
import { Col, Row } from "antd";
import { TfiLineDouble } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
// import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [arrayLength, setArrayLength] = useState(1);
  return (
    <div className="w-full flex flex-col  p-0">
      <div className="mx-28">
        <Navbar />
        <div>
          <Row align={"stretch"} gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <PhoneDisplay />
            </Col>
            <Col xs={24} lg={12}>
              <div className="bg-white rounded-lg h-full flex flex-col">
                <div className="p-14">
                  <div>
                    <p className="text-[#1A1A1A] text-2xl font-bold">
                      Customize your links
                    </p>
                    <p className="text-black/60 mt-2">
                      Add/edit/remove links below and then share all your
                      profiles with the world!
                    </p>
                    <div className="mt-5 mb-4">
                      <button
                        onClick={() => setArrayLength((prev) => prev + 1)}
                        className="text-indigo-600 border border-indigo-700 w-full py-2 px-6 rounded-lg cursor-pointer font-bold hover:bg-indigo-600 hover:text-white"
                      >
                        + Add new link
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {[...Array(arrayLength)].map((_, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-500/10 p-4 rounded-lg h-auto"
                      >
                        <div className="flex justify-between items-center">
                          <div className="font-bold flex gap-2 items-center text-gray-600 ">
                            <TfiLineDouble />
                            Link #{idx + 1}
                          </div>
                          <div>
                            <p className="text-gray-600">Remove</p>
                          </div>
                        </div>
                        {/* inputs Area */}
                        <div className="flex flex-col gap-2 mt-3">
                          <p className="text-black/60 font-semibold text-sm">
                            Platform
                          </p>
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
                          <p className="text-black/60 font-semibold text-sm">
                            link
                          </p>
                          <div className="">
                            <div className="flex items-center justify-between bg-white border border-black/25 cursor-pointer w-full py-2 px-5 rounded-lg">
                              <div className="flex font-semibold gap-2 items-center text-gray-500">
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
                    ))}

                    
                  </div>
                </div>
                {/* SAVE BUTTON AREA */}
                <hr className="border-b border-gray-500/10" />
                <div className="flex justify-end mt-5 px-14">
                  <button className="bg-indigo-700 py-2 px-5 rounded-lg text-white hover:bg-transparent hover:text-black cursor-pointer border border-indigo-700">
                    Save
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
