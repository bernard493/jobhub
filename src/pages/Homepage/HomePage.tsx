import React from "react";
import {
  Talent,
  Connection,
  Hero,
  EasySteps,
  ExcitingJobs,
  JobCategory,
  Review,
} from "../../sections/index";
import { NavbarComp } from "../../components/Navbar/NavbarComp";
import svg from "../../assets/img/blob.svg";

export const HomePage = () => {
  return (
    <div>
      <div className=" hidden absolute -top-[7rem]  -right-[0rem] md:block">
        <img src={svg} alt="" className="h-[40rem] w-[40rem] " />
      </div>
      <div className=" relative ">
        
        <div className=" relative px-6 md:px-[8rem] xl:px-[15rem]">
          <Hero />
          <Talent />
          <Connection />
          <EasySteps />
          <ExcitingJobs />
          <Review />
        </div>
      </div>
    </div>
  );
};
