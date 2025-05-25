import React from "react";
import { PhoneDisplay } from "@/components/PhoneDisplay";
import { Col, Row } from "antd";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import profileImg from "../../../public/profile_pic.jpg";

const Profile = () => {
  return (
    <div className="w-full flex flex-col  p-0">
      <div className="mx-28">
        <Navbar />
        <div>
          <Row align={"stretch"} gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <PhoneDisplay profileEmail profileImg={profileImg} profileName />
            </Col>
            <Col xs={24} lg={12}>
              <div className="bg-white rounded-lg h-full flex flex-col">
                <div className="p-14">
                  <div>
                    <p className="text-[#1A1A1A] text-2xl font-bold">
                      Profile Details
                    </p>
                    <p className="text-black/60 mt-2">
                      Add your details to create a personal touch to your
                      profile.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 mt-14">
                    <div className="bg-gray-500/10 p-4 rounded-lg h-full">
                      <div className="flex justify-between items-center">
                        <p className="text-black/60 w-1/2 text-[12px] ">
                          Profile picture
                        </p>
                        <div className="flex gap-4 items-center ">
                          <div className="w-[200px] h-[150px] relative">
                            <Image
                              src={profileImg}
                              priority
                              className="w-full cursor-pointer rounded-xl object-center h-[150px] "
                              alt="profile_img"
                            />
                            <input
                              className="hidden"
                              placeholder="Change Image"
                              type="file"
                            />
                          </div>
                          <p className="text-black/60 text-[12px]">
                            Images must be below 1024x1024. Use PNG, JPG, or MBP
                            format
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* NEWER LINK TABS */}
                    <div className="bg-gray-500/10 p-4 rounded-lg h-auto">
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between">
                          <p className="w-1/2 text-[12px] text-black/60">
                            First Name*
                          </p>
                          <input
                            type="text"
                            className="bg-white border border-black/25 w-full py-2 px-5 rounded-lg text-gray-500 placeholder-gray-500 focus:outline-none focus:shadow shadow-indigo-700"
                            placeholder="Benita"
                          />
                        </div>
                        <div className="flex justify-between">
                          <p className="w-1/2 text-[12px] text-black/60">
                            Last Name*
                          </p>
                          <input
                            type="text"
                            className="bg-white border border-black/25 w-full py-2 px-5 rounded-lg focus:border-0 text-gray-500 placeholder-gray-500 focus:outline-none focus:shadow shadow-indigo-700"
                            placeholder="Wright"
                          />
                        </div>
                        <div className="flex justify-between">
                          <p className="w-1/2 text-[12px] text-black/60">
                            Email
                          </p>

                          <input
                            type="text"
                            className="bg-white border border-black/25 w-full py-2 px-5 rounded-lg focus:border-0 text-gray-500 placeholder-gray-500 focus:outline-none focus:shadow shadow-indigo-700"
                            placeholder="Benita@example.com"
                          />
                        </div>
                      </div>
                    </div>
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
};

export default Profile;
