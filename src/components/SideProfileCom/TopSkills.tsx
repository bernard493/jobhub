import React from "react";
import { MdEditSquare } from "react-icons/md";

export const TopSkills = () => {
  return (
    <div className="bg-white  rounded-xl p-6 space-y-4 hover:shadow-xl">
      <div className="flex justify-between items-center">
        <p className="text-orange-900 font-Poppins font-bold">Top Skills</p>
        <button className=" bg-gray-100 hover:bg-gray-300 h-[2.4rem] w-[2.4rem] rounded-full flex justify-center items-center">
          <MdEditSquare className="text-center h-4 w-4 text-blue-800" />
        </button>
      </div>
      {[1, 2].map((work) => (
        <div key={work} className=" flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-800 h-2 w-2 rounded-full" />
            <p className="text-sm  font-Poppins font-bold"> Ui Desinger</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-Poppins ">1-2 years</p>
          </div>
        </div>
      ))}
    </div>
  );
};
