import React from "react";
import { Routers } from "../../Routers/Routers";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import svg from '../../assets/img/blob.svg'
export const Layouts = () => {
  return (
    <div className="bg-[#FBFBFF]">
    <div className=''>
        <div className="absolute -top-[7rem]  -right-[0rem]">
          <img src={svg} alt=""  className="h-[40rem] w-[40rem] "/>
        </div>
        <div className=" relative">

      <Navbar />
      <Routers />
        </div>
    </div>
      <Footer />
    </div>
  );
};
