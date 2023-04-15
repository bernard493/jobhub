import React from "react";
import { Avatar } from "@material-tailwind/react";
import profileIMg from "../../assets/img/pretty-girl-2110243_1920.jpg";

export const ProfileCard = () => {
  return (
    <div className="bg-white  rounded-xl p-6 flex justify-center hover:shadow-xl">
      <div className="space-y-4">
        <div className="flex justify-center">
          <Avatar src={profileIMg} alt="avatar" variant="circular" size="xl" />
        </div>
        <div className="text-center space-y-2">
          <p className="text-gray-900 text-base font-bold font-Poppins">Andre Salmanan</p>
          <p className="text-gray-600 text-sm font-Poppins">Junior React Developer</p>
        </div>
        <div className="flex justify-center">
          <button
           className="bg-gray-100 hover:bg-gray-300 h-[3rem] w-[13rem] rounded-full"
           >
           <span className="text-blue-500">Edit Profile</span> 
            </button>
        </div>
      </div>
    </div>
  );
};
