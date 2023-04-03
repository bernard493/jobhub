import React, { useCallback, useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { checkImageURL } from "../utils/index";

interface JobDetailInter {
  employer_logo:string
  employer_name : string
  job_country : string
  job_title : string
  job_min_salary : string
  job_max_salary : string
  job_google_link : string
}


const JobCard = (job:{job:JobDetailInter}):JSX.Element => {
  return (
    <Link to={""}>
      <div className="bg-white outline outline-offset-2 outline-2 group  outline-gray-200  hover:outline-blue-500 hover:drop-shadow-xl rounded-lg">
        <div className="p-[0.5rem] space-y-2 md:p-[1rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={
                  // uri: checkImageURL(jobDetail?.employer_logo)
                  //   ?
                  job.job.employer_logo
                    // : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                }
                alt=""
                className="h-[4rem] w-[4rem] object-contain"
              />
              <div className="">
                <p className="text-gray-500 font-bold font-Poppins text-md">
                  {job.job.employer_name},{job.job.job_country}
                </p>
                <p className="text-gray-800 font-bold font-Poppins text-lg">
                  {job.job.job_title}
                </p>
                <p className="text-gray-400 font-bold text-sm">
                  Posted 10m ago
                </p>
              </div>
            </div>
            <div className="space-y-6 ">
              <div className="flex justify-end pr-3">
                <BsBookmark className="text-gray-800 font-bold  h-5 w-5 cursor-pointer " />
              </div>
              <div className="">
                <p className="text-end text-[#403FF2] font-bold font-Poppins">
                  Salary
                </p>
                <p className="text-gray-600 font-bold text-sm">
                  {job.job.job_min_salary}$ - {job.job.job_max_salary}$
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[0.5rem]">
            <div className="flex items-center space-x-2">
              <MdOutlineBusinessCenter className="text-gray-400 font-bold text-sm h-5 w-5" />
              <p className="text-gray-400 font-bold font-Poppins text-sm">
                2-3 Year experincer Full Time
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[13rem] md:w-[20rem]">
              <p className="text-gray-600 font-bold text-md">
                we are looking for loihj hjguj jmghjgmuj hm
              </p>
            </div>
            <div>
              <Link to={job.job.job_google_link}>
                <button className="bg-gray-300 text-gray-800 text-sm h-[2.5rem] w-[7rem] rounded-lg group-hover:bg-[#403FF2] group-hover:text-white">
                  <span className="font-bold font-Poppins">Apply now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const Connection = () => {
  const [checked, setChecked] = useState(false);
  const [findJobs, setFindJobs] = useState("part_time");
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useMemo(() => {
    checked ? setFindJobs("full_time") : setFindJobs("part_time");
  }, [checked]);

  console.log(data);
  return (
    <div className="py-[5rem]">
      <div className="text-center space-y-8">
        <h3 className="text-3xl text-gray-700 text-center  font-bold md:text-4xl">
          Grab there exciting offer and apply now
        </h3>
        <div className="flex items-center justify-center space-x-2 ">
          <p
            className="font-bold text-sm"
            style={{ color: `${!checked ? "#403FF2" : "#999999"}` }}
          >
            Part Time
          </p>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />

          <p
            className="font-bold text-sm"
            style={{ color: `${checked ? "#403FF2" : "#999999"}` }}
          >
            Full Time
          </p>
        </div>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-8 py-[2rem]">
        {!isLoading ? (
          data.slice(6).map((job) => <JobCard job={job} />)
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
      <div className=" flex justify-center  py-[2rem]">
        <Link to={""}>
          <button className=" text-sm h-[3rem] w-[8rem] rounded-lg bg-[#403FF2] text-white">
            <span className="font-bold font-Poppins">Browse all</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
