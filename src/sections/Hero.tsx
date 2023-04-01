import React, { useState, useRef, useReducer, FunctionComponent } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import heroImg from "../assets/img/startup-4777863_1920.jpg";
import linkdenicon from "../assets/img/icons8-linkedin-2.gif";
import instaicon from "../assets/img/icons8-instagram.gif";
import behanceicon from "../assets/img/icons8-behance-logo-24.png";
import dribbbleicon from "../assets/img/icons8-dribbble-48.png";
import teamImg from "../assets/img/team-4200837_1920.jpg";
import ReactPlayer from "react-player";

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

const VIDEO_PATH: string = "https://youtu.be/0BIaDVnYp2A";

export const Hero: FunctionComponent = () => {
  // const [jobSearch ,setJobSearch] = useState()
  const [jobSearch, dispatch] = useReducer(reducer, initialJobSearch);
  const playerRef = useRef(null);

  function handleJobTittle(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    dispatch({ type: JobSearchActionKind.JOB_TITTLE, payload: newValue });
  }

  function handleJobLocation(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    dispatch({ type: JobSearchActionKind.JOB_LOCATION, payload: newValue });
  }

  const handleJobSearch = () => {
    if (Object.keys(jobSearch).length > 0) {
      alert(
        `job location ${jobSearch.jobLocation} and job tittle ${jobSearch.jobTittle}`
      );
    } else {
      alert("please fill space");
    }
  };

  const videoStyle: {} = {
    // // borderRadius : '3.5',
    // backgroundColor : '#94D7A2',
    // // position: 'absolute',
    // // top: '20rem',
    // // left: 0,
    // // border: '1px solid black',
    // borderRadius: '50px!important'
  };

  return (
    <main className="">
      <div className="flex flex-col md:grid  md:grid-cols-2 md:gap-[8rem]">
        <div className="pt-[5rem] space-y-7 md:space-y-0">
          <div className="w-full">
            <h1 className="text-4xl text-gray-700 text-center  font-bold md:text-5xl">
              Your dream job is waiting for you.
            </h1>
          </div>

          <div className="hidden  items-center py-[3rem] md:block ">
            <div className="flex  items-center group  cursor-pointer  hover:outline outline-offset-2 outline-2 md:bg-[#fff] w-[27rem]  h-[1rem] py-[1.4rem] text-gray-600    drop-shadow-md dark:text-[#fff]  rounded-lg  md:h-[2.2rem]  md:text-sm ">
              <div className="flex items-center ">
                <input
                  className="relative text-md  h-10  pl-10 outline-none border-none"
                  placeholder="Find your Location"
                  type="text"
                  value={jobSearch.jobLocation}
                  onChange={handleJobLocation}
                />
                <IoLocationOutline className=" absolute text-2xl text-gray-600 h-4 w-4  md:h-4 md:w-4 ml-[1rem]" />
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
                <div className=" absolute sm:hidden ml-[11rem]  md:block">
                  <button
                    onClick={handleJobSearch}
                    className=" h-[2.3rem] w-[3rem] bg-blue-700  rounded-lg   flex justify-center items-center"
                  >
                    <CiSearch className=" text-center font-bold text-2xl text-white h-2 w-2  md:h-5 md:w-5  " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center py-8 md:hidden">
            <div className="space-y-4 ">
              <div className="flex items-center ">
                <input
                  className="relative text-md  h-[3rem] text-bold font-Poppins  pl-14 outline outline-offset-2 outline-2 w-[18rem]  rounded-lg border-md"
                  placeholder="Find your Location"
                  type="text"
                  value={jobSearch.jobLocation}
                  onChange={handleJobLocation}
                />
                <IoLocationOutline className=" absolute text-2xl text-gray-600   h-5 w-5 ml-[1rem]" />
              </div>
              <div className="flex items-center  ">
                <input
                  className="relative text-md h-[3rem]  pl-14 outline outline-offset-2 outline-2 w-[18rem] rounded-lg"
                  placeholder="Job category"
                  type="text"
                  value={jobSearch.jobTittle}
                  onChange={handleJobTittle}
                />
                <HiOutlineBuildingOffice2 className=" absolute text-2xl text-gray-600   h-5 w-5 ml-[1rem]" />
              </div>
              <div>
                <button
                  onClick={handleJobSearch}
                  className="flex items-center h-[3rem] w-[18rem] bg-blue-700 rounded-lg  justify-center space-x-6 font-bold md:hidden"
                >
                  <span className="font-bold font-Poppins text-white">
                    Search
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full">
          <img
            src={heroImg}
            alt=""
            className=" object-cover object-center rounded-3xl md:w-[20rem] md:h-[25rem]"
          />
          <div className=" flex justify-center outline outline-offset-6 outline-7 outline-white h-[8rem] w-[14rem] absolute top-[36rem] md:top-80 md:right-[40rem] rounded-xl">
            {/** 
          * 
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} playing={false} muted={true} width={'100%'} height={'100%'} style={ videoStyle} />
         */}
            <img
              src={teamImg}
              alt=""
              className="object-cover object-center rounded-xl w-full "
            />
          </div>
        </div>
      </div>
      <div className="md:pt-[6rem]">
        <div className="flex items-center space-x-[7rem] ">
          <div className="">
            <div className="space-y-5">
              <p className="font-bold font-Poppins text-sm">
                We are trusted by
              </p>
              <div className="flex items-center space-x-7">
                <div className="border-red-400 flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem] outline outline-offset-2 outline-2 rounded-lg outline-blue-700">
                  <img src={linkdenicon} alt="" className="w-6  h-6   " />
                </div>
                <div className="border-red-400 flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem] outline outline-offset-2 outline-2 rounded-lg outline-black-500">
                  <img src={instaicon} alt="" className="w-7  h-7   " />
                </div>
                <div className="border-red-400 flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem] outline outline-offset-2 outline-2 rounded-lg outline-blue-700">
                  <img src={behanceicon} alt="" className="w-7  h-7   " />
                </div>
                <div className="border-red-400 flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem] outline outline-offset-2 outline-2 outline-pink-500 rounded-lg">
                  <img src={dribbbleicon} alt="" className="w-7  h-7   " />
                </div>
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
