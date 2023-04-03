import React from "react";
import { Routers } from "../../Routers/Routers";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import svg from "../../assets/img/blob.svg";
export const Layouts = () => {
  return (
    <div className="bg-[#f8f6f6]">
      <div className="">
        <div className=" hidden absolute -top-[7rem]  -right-[0rem] md:block">
          <img src={svg} alt="" className="h-[40rem] w-[40rem] " />
        </div>
        <div className=" relative ">
          <Navbar />
        <div className=" relative px-6 md:px-[8rem] xl:px-[15rem]">

          <Routers />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
