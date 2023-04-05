import React from "react";
import img1 from "../assets/img/pretty-girl-2110243_1920.jpg";
import { Link } from "react-router-dom";
export const EasySteps = () => {
  return (
    <div className="grid sm:grid-rows-2 space-y-[5rem]  md:grid md:grid-cols-2  md:grid-rows-none md:space-x-[6rem] md:space-y-0">
      <div className="">
        <div className="flex justify-center">
          <div className="absolute z-10  h-[22rem] w-[17rem] md:h-[18rem] md:w-[16rem] bg-[#fff] p-2 rounded-xl">
            <img
              src={img1}
              alt=""
              className="h-[15rem]  md:h-[12rem]  object-center rounded-xl"
            />
            <div className="text-center pt-[1.5rem]">
              <p className="font-bold font-Poppins text-lg">Bonolota</p>
              <p className="font-bold font-Poppins text-gray-400 text-sm">
                Illustration designer
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-20 -left-6 md:left-[3.5rem] md:-top-2 h-[5rem] w-[5rem] md:h-[4rem] md:w-[4rem]  bg-[#fff] p-1 rounded-xl">
          <img
            src={img1}
            alt=""
            className="h-[4.5rem] md:h-[3.5rem]   object-center rounded-xl"
          />
        </div>

        <div className="relative  h-[5rem] w-[5rem] -right-[17rem] -top-[7rem] md:-right-[23rem] md:-top-[5rem] z-0 bg-[#fff] p-1 md:h-[4rem] md:w-[4rem] rounded-xl">
          <img
            src={img1}
            alt=""
            className="h-[4.5rem] md:h-[3.5rem]   object-center rounded-xl"
          />
        </div>
        <div className="relative z-20 -left-2 h-[5rem] w-[5rem] bg-[#fff] p-1 md:h-[4rem] md:w-[4rem] md:left-[5rem] md:top-[3rem] rounded-xl">
          <img
            src={img1}
            alt=""
            className="h-[4.5rem] md:h-[3.5rem]   object-center rounded-xl"
          />
        </div>
        <div className="relative h-[5rem] w-[5rem] -right-[17rem] bg-[#fff] p-1 md:h-[4rem] md:w-[4rem] md:-right-[24.5rem] rounded-xl">
          <img
            src={img1}
            alt=""
            className="h-[4.5rem] md:h-[3.5rem]   object-center rounded-xl"
          />
        </div>
        <div className="relative z-20 h-[5rem] w-[5rem] -right-[13rem] -bottom-5 bg-[#fff] p-1 md:h-[4rem] md:w-[4rem] md:-right-[19rem] rounded-xl">
          <img
            src={img1}
            alt=""
            className="h-[4.5rem] md:h-[3.5rem]   object-center rounded-xl"
          />
        </div>
      </div>
      <div className="">
        <div className="md:w-[20rem] md:pt-6 space-y-7">
          <h3 className="text-center text-gray-800 font-Poppins font-bold text-4xl md:text-start">
            Over 10,000+ Talented People Registered in Our Website
          </h3>
          <div className="flex justify-center md:justify-start">
            <Link to={""}>
              <button className=" text-sm h-[2.8rem] w-[8rem] rounded-lg bg-[#403FF2] text-white">
                <span className=" font-Poppins">Explore More</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
