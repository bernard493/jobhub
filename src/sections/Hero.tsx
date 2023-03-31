import React, { useState, useReducer, FunctionComponent } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import heroImg from "../assets/img/startup-4777863_1920.jpg";

interface JobSearchInter {
  jobLocation: string;
  jobTittle: string;
}

enum JobSearchActionKind {
  JOB_LOCATION = "JOB_LOCATION",
  JOB_TITTLE = "JOB_TITTLE",
}

interface JobSearchAction {
  type: JobSearchActionKind;
  payload: string;
}

const initialJobSearch: JobSearchInter = {
  jobLocation: "",
  jobTittle: "",
};

const reducer = (jobSearch: JobSearchInter, action: JobSearchAction) => {
  const { type, payload } = action;
  switch (type) {
    case JobSearchActionKind.JOB_LOCATION:
      return {
        ...jobSearch,
        jobLocation: payload,
      };
    case JobSearchActionKind.JOB_TITTLE:
      return {
        ...jobSearch,
        jobTittle: payload,
      };
  }
};

export const Hero: FunctionComponent = () => {
  // const [jobSearch ,setJobSearch] = useState()
  const [jobSearch, dispatch] = useReducer(reducer, initialJobSearch);

  function handleJobTittle(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    dispatch({ type: JobSearchActionKind.JOB_TITTLE, payload: newValue });
  }

  function handleJobLocation(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    dispatch({ type: JobSearchActionKind.JOB_LOCATION, payload: newValue });
  }

  const handleJobSearch = () => {
    if (Object.keys(jobSearch).length === 0) {
      alert(
        `job location ${jobSearch.jobLocation} and job tittle ${jobSearch.jobTittle}`
      );
    } else {
      alert("please fill space");
    }
  };

  return (
    <main className="">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-[5rem]">
          <div className="pt-[5rem] text-center">
            <div className="w-[25rem]">
              <h1 className="text-4xl text-gray-700 font-bold md:text-5xl">
                Your dream job is waiting for you.
              </h1>
            </div>
            <div className="flex items-center py-[3rem] ">
              <div className="flex  items-center group  cursor-pointer  hover:outline outline-offset-2 outline-2 bg-[#fff] w-full  h-[1rem] py-[1.4rem] text-gray-600    drop-shadow-md dark:text-[#fff]  rounded-lg  md:h-[2.2rem]  md:text-sm ">
                <div className="flex items-center ">
                  <input
                    className="relative text-md  h-10  pl-10 outline-none border-none"
                    placeholder="Find your Location"
                    type="text"
                    value={jobSearch.jobLocation}
                    onChange={handleJobLocation}
                  />
                  <IoLocationOutline className=" absolute text-2xl text-gray-600 h-2 w-2  md:h-4 md:w-4 ml-[1rem]" />
                </div>
                <div className="h-6 bg-black w-[0.1rem]" />
                <div className="flex items-center ">
                  <input
                    className="relative text-md  h-11  pl-10 outline-none border-none"
                    placeholder="Job category"
                    type="text"
                    value={jobSearch.jobTittle}
                    onChange={handleJobTittle}
                  />
                  <HiOutlineBuildingOffice2 className=" absolute text-2xl text-gray-600 h-2 w-2  md:h-4 md:w-4 ml-[1rem]" />
                  <button
                    onClick={handleJobSearch}
                    className="absolute h-[2.3rem] w-[2.3rem] bg-blue-700 ml-[10rem] rounded-lg flex justify-center items-center font-bold"
                  >
                    <CiSearch className=" text-center font-bold text-2xl text-white h-2 w-2  md:h-5 md:w-5  " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20rem] h-[25rem] rounded-full">
            <img
              src={heroImg}
              alt=""
              className=" object-cover object-center rounded-3xl w-[20rem] h-[25rem]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2">
            <div>
              <p>We are trusted</p>
              <div className="flex items-center">
                <div className="border-red-400 h-4 w-4">p66</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

{
  /** <input
              className="relative text-md   "
              placeholder="Find your Location"
              type="text"
              value={jobSearch.jobLocation}
              onChange={handleJobLocation}
            />
           
            <IoLocationOutline className=" absolute text-2xl text-gray-600 h-2 w-2  md:h-4 md:w-4 ml-[1rem]" />
        
          
              <button className='absolute h-[2.3rem] w-[2.3rem] bg-blue-700 ml-[12.5rem] rounded-lg'>
                <CiSearch  className=" text-center font-bold text-2xl text-white h-5 w-5  md:h-4 md:w-4 ml-[1rem]" />
              </button> */
}
