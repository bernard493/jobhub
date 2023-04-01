import React from "react";
import { FiUser,FiUploadCloud,FiSearch } from "react-icons/fi";
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
export const Talent = () => {
  return (
    <div className="pt-[5rem]">
      <div className="flex flex-col  space-x-[10rem] md:flex-row space-y-[4rem]">
        <div className=" w-[20rem] space-y-6 md:pt-[8rem]">
          <p className="text-center md:text-start">How it works</p>
          <h3 className="text-4xl text-gray-700 text-center md:text-start  font-bold md:text-3xl">
            Follow <br /> Easy 4 steps
          </h3>
          <p className="text-center md:text-start text-gray-400 md:text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            illo, doloribus nam unde assumenda quibusdam aliquam veniam
            consequuntur,
          </p>
        </div>
        <div className="flex items-center">
          <div className="space-y-5">

          <div className="bg-[#fff] h-[10rem] w-[10rem] rounded-lg ">
            <div className="py-5  px-4 text-center space-y-3">
              <div className=" flex justify-center">
                <FiUser className=" h-9 w-9 text-[#403FF2]" />
              </div>
              <div>
                <p className="text-gray-700 text-sm font-bold font-Poppins">
                  Create Account
                </p>
                <p className="text-gray-400 text-[0.8rem]">
                  First you have to create an account here
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] h-[10rem] w-[10rem] rounded-lg  ">
            <div className="py-5  px-4 text-center space-y-3">
              <div className=" flex justify-center">
                <FiUploadCloud className=" h-9 w-9 text-[#f2693f]" />
              </div>
              <div>
                <p className="text-gray-700 text-sm font-bold font-Poppins">
                  CV/Resume
                </p>
                <p className="text-gray-400 text-[0.8rem]">
                  For you job you have to upload your CV or Resume
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="space-y-5">

          <div className="bg-[#fff] h-[10rem] w-[10rem] rounded-lg ">
            <div className="py-5  px-4 text-center space-y-3">
              <div className=" flex justify-center">
                <FiSearch className=" h-9 w-9 text-[#47a530]" />
              </div>
              <div>
                <p className="text-gray-700 text-sm font-bold font-Poppins">
                  Search job
                </p>
                <p className="text-gray-400 text-[0.8rem]">
                  Find your job using Sear or categories
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] h-[10rem] w-[10rem] rounded-lg ">
            <div className="py-5  px-4 text-center space-y-3">
              <div className=" flex justify-center">
                <IoCheckmarkDoneCircleOutline className=" h-9 w-9 text-gray-700" />
              </div>
              <div>
                <p className="text-gray-700 text-sm font-bold font-Poppins">
                  Apply Them
                </p>
                <p className="text-gray-400 text-[0.8rem]">Finally apply to job </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
