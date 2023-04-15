import React, { useState } from "react";
import { JobDetailInter } from "../../model";
import { Input, Button, IconButton } from "@material-tailwind/react";
import { BsBookmark } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const JobCard: React.FC<JobDetailInter> = (job) => {
const [peopleApplied ,setPeopleApplied] = useState(10)




  return (
    <div
      key={job.job_id}
      className="bg-[#fff] p-6 rounded-xl space-y-5 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src={
              // uri: checkImageURL(jobDetail?.employer_logo)
              //   ?
              job.employer_logo
              // : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }
            alt=""
            className="h-[4rem] w-[4rem] object-contain rounded-xl"
          />
          <div className="md:w-[20rem]">
            <p className="text-gray-800 font-bold font-Poppins text-sm">
              {job.job_title}
            </p>
            <p className="text-gray-400 font-bold font-Poppins text-sm ">
              {job.employer_name}, {job.job_city}
            </p>
          </div>
        </div>
        <div>
          <Button
            variant="outlined"
            color="blue"
            className="flex items-center gap-2"
          >
            <span>Save Job</span>
            <BsBookmark className="text-gray-400 font-bold text-sm h-4 w-4" />
          </Button>
        </div>
      </div>
      <div>
        <p className="text-gray-500 font-bold text-sm  line-clamp-2 ">
          {job.job_description}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-gray-300 p-3 rounded-lg">
          <p className="text-[0.7rem] text-gray-700 font-bold font-Poppins">
            {job.job_employment_type === "FULLTIME" ? "Fulltime" : "Contract"}
          </p>
        </div>
        <div className="bg-gray-300 p-3 rounded-lg">
          <p className="text-[0.7rem] text-gray-700 font-bold font-Poppins">
            {job.job_job_title}
          </p>
        </div>
        <div className="bg-gray-300 p-3 rounded-lg">
          <p className="text-[0.7rem] text-gray-700 font-bold font-Poppins">
            {job.job_is_remote ? "Remote" : "Onsite"}
          </p>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 h-1" />
      <div className="flex items-center justify-between gap-4 space-x-6 ">
        <div className="flex items-center gap-4 space-x-6 ">
          <div className="flex items-center gap-3">
            {job.job_min_salary !== null ? (
              <div className="flex items-center gap-3">
                <RiMoneyDollarCircleLine className="h-6  w-6 text-blue-500" />
                <p>
                  ${job.job_min_salary} - ${job.job_max_salary} 
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center gap-3">
            <IoPeopleOutline className="h-6  w-6 text-blue-500" />
            <p>{peopleApplied} people Apply</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to={job.job_apply_link}>
            <button className="h-[3rem] w-[10rem] bg-orange-900 hover:bg-orange-700 rounded-xl">
              <span className="text-white text-sm">Apply Now</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
