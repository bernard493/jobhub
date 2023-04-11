import React from "react";
import { JobDetailInter } from "../../model";
import { Input, Button, IconButton } from "@material-tailwind/react";
import { BsBookmark } from "react-icons/bs";

export const JobCard: React.FC<JobDetailInter> = (job) => {
  return (
    <div key={job.job_id} className="bg-[#fff] p-6 rounded-xl space-y-5">
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
        <p className="text-gray-500 font-bold text-sm line-clamp-2 ">
          {job.job_description}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-gray-300 p-3 rounded-lg">
          <p className="text-[0.7rem] text-gray-700 font-bold font-Poppins">
            {job.job_employment_type}
          </p>
        </div>
        <div className="bg-gray-300 p-3 rounded-lg">
          <p className="text-[0.7rem] text-gray-700 font-bold font-Poppins">
            {job.job_is_remote && "Remote"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3"><p>100000$</p></div>
        <div className="flex items-center gap-3"><p>55 people</p></div>
        <div className="flex items-center gap-3"></div>
      </div>
    </div>
  );
};
