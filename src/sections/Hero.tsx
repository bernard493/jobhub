import React, { useState, useRef, useReducer, FunctionComponent } from "react";

import { Input } from "@material-tailwind/react";

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


//later changed to use only one input
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
    <>
      <div className="relative overflow-hidden ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your dream job is waiting for you
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Forget the old rules. You can have the best Jobs. Right now.
                Right here.
              </p>
              <div className="w-72 flex space-x-3 py-5">
                  <Input
                    onChange={handleJobTittle}
                    value={jobSearch.jobTittle}
                    label="Job Tittle"
                  />
                 
                </div>
                <button
                  onClick={handleJobSearch}
                  className="inline-block rounded-md border border-transparent bg-[#403FF2] px-8 py-2 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Find Job
                </button>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none  lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
