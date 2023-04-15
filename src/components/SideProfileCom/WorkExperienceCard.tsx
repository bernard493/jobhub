import React from "react";
import { MdEditSquare } from "react-icons/md";
import { Avatar } from "@material-tailwind/react";
import profileIMg from "../../assets/img/pretty-girl-2110243_1920.jpg";

export const WorkExperienceCard = () => {
 
  return (
    <div className="bg-white  rounded-xl p-6 space-y-4 hover:shadow-xl">
      <div className="flex justify-between items-center">
        <p className="text-orange-900 font-Poppins font-bold">
          Work Experience
        </p>
        <button className=" bg-gray-100 hover:bg-gray-300 h-[2.4rem] w-[2.4rem] rounded-full flex justify-center items-center">
          <MdEditSquare className="text-center h-4 w-4 text-blue-800" />
        </button>
      </div>
      {[1,2].map( work => <div key={work} className=" flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <Avatar src={profileIMg} alt="avatar" variant="circular" size="sm"/>
          </div>
          <div>
            <p className="text-sm  font-Poppins font-bold">Junir Ui Desinger</p>
            <p className="text-[0.7rem] text-gray-600 font-Poppins font-bold">Airbnb, Inc - Fulltime</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 font-Poppins ">2 MOs</p>
        </div>
      </div>)}
    </div>
  );
};
