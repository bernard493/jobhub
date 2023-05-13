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

export const LandingPage = () => {
  return (
    <div>
      {/* <div className=" hidden absolute -top-[7rem]  -right-[9rem] md:block">
        <img src={svg} alt="" className="h-[40rem] w-[40rem] " />
      </div> */}
      {/* <div className=" relative "> */}
        
        <div className=" relative px-6 md:px-[4rem] xl:px-[rem]">
          <Hero />
          <Talent />
          <Connection />
        </div>
          <EasySteps />
          <div className=" relative px-6 md:px-[4rem] xl:px-[rem]">
          <ExcitingJobs />
          <Review />
        </div>

      </div>
    // </div>
  );
};
