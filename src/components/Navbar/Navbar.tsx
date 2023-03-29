import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="py-[2rem] px-[7rem] font-Poppins">
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <p className="text-3xl text-[#403FF2] font-bold ">JobHub</p>
          </div>
          <div className="text-sm font-bold text-[#00334E] flex items-center justify-between">
            <Link to={""}>
              <p className="">Find a Job</p>
            </Link>
            <Link to={""}>
              <p>Companies</p>
            </Link>
            <Link to={""}>
              <p>About Us</p>
            </Link>
          </div>
        </div>
        <div className=" flex justify-end">
          <div>
            <button className="w-[10rem] h-[3.1rem] bg-[#00334E] hover:bg-slate-200 hover:text-gray-900 text-white font-bold rounded-xl">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
