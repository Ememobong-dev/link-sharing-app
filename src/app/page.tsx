"use client";

import { Navbar } from "@/components/Navbar";
import { PhoneDisplay } from "@/components/PhoneDisplay";
import { Col, Row } from "antd";
import { InputArea } from "@/components/InputArea";
import { useAddLink } from "@/store/addLinksStore";
import { useEffect } from "react";

export default function Home() {
  const {links, updateLink, setLinks, saveLinks, loadLinks  } = useAddLink();

  const handleAdd = () => {
    setLinks([...links, { platform: "GitHub", link: "" }]);
  };

const handleRemove = (index: number) => {
  const updated = [...links];
  updated.splice(index, 1);
  setLinks(updated);
  saveLinks(); 
};

  const handleChange = (
    index: number,
    newData: Partial<{ platform: string; link: string }>
  ) => {
    updateLink(index, newData);
  };

  const handleSave = () => {
  saveLinks();
};

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="w-full flex flex-col  p-0">
      <div className="mx-28">
        <Navbar />
        <Row align={"stretch"} gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <PhoneDisplay />
          </Col>
          <Col xs={24} lg={12}>
            <div className="bg-white rounded-lg h-full flex flex-col">
              <div className="p-14">
                <p className="text-[#1A1A1A] text-2xl font-bold">
                  Customize your links
                </p>
                <p className="text-black/60 mt-2">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </p>

                <div className="mt-5 mb-4">
                  <button
                    onClick={handleAdd}
                    className="text-indigo-600 border border-indigo-700 w-full py-2 px-6 rounded-lg cursor-pointer font-bold hover:bg-indigo-600 hover:text-white"
                  >
                    + Add new link
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {links.map((link, idx) => (
                    <InputArea
                      key={idx}
                      i={idx}
                      linkValue={link}
                      handleOnChange={(newData) => handleChange(idx, newData)}
                      handleRemoveClick={() => handleRemove(idx)}
                    />
                  ))}
                </div>
              </div>

              {/* SAVE BUTTON */}
              <hr className="border-b border-gray-500/10" />
              <div className="flex justify-end mt-5 px-14">
                <button
                  onClick={handleSave}
                  className="bg-indigo-700 py-2 px-5 rounded-lg text-white hover:bg-transparent hover:text-black cursor-pointer border border-indigo-700"
                >
                  Save
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
