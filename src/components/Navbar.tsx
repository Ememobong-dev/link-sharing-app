import React from "react";
import { BsLink } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="bg-white p-4  w-full flex justify-between items-center border border-sky-100">
        <div className="flex items-center gap-4">
            <div className="bg-purple-900 rounded-xl p-2 flex justify-center items-center">
                 <BsLink size={24} />
            </div>
             <p className="text-blue-950">devlinks</p>
        </div>
        hello
    </div>
 
  );
};
