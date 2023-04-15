import React, { useState, useReducer } from "react";
import { Input, Button, IconButton } from "@material-tailwind/react";
import { BsBookmark } from "react-icons/bs";
import { JobCard } from "../../components/JobCard/JobCard";
import { SideProfileCom } from "../../components/SideProfileCom/SideProfileCom";
import { useFetch } from "../../Hooks/useFetch";
import { JobDetailInter } from "../../model";

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
  jobTittle: "Software Engineer",
  jobLocation: "london",
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

export const Dashboard = () => {
  // const [search, setSearch] = useState("");
  // const [country, setCountry] = useState("");
  const [jobSearch, dispatch] = useReducer(reducer, initialJobSearch);
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: ` ${jobSearch.jobTittle} , ${jobSearch.jobLocation}`,
    num_pages: "5",
  });

  const handleSearch = ({ target }: any) =>
    dispatch({ type: JobSearchActionKind.JOB_TITTLE, payload: target.value });

  const handleCountry = ({ target }: any) =>
    dispatch({ type: JobSearchActionKind.JOB_LOCATION, payload: target.value });

  const getJobs = () => {
    refetch();
  };

  // console.table(jobSearch)
  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-8 py-[3rem] px-3">
      <div>
        <SideProfileCom />
      </div>
      <div className="col-span-2 space-y-8">
        <div className=" bg-white rounded-xl py-[1rem] px-[2rem] space-y-5 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-gray-900 font-Poppins font-bold">Search Job </p>
            <div className="w-50">
              <Button
                variant="outlined"
                color="blue"
                className="flex items-center gap-2"
              >
                <BsBookmark className="text-gray-400 font-bold text-sm h-4 w-4" />
                <span>Save Search</span>
              </Button>
            </div>
          </div>
          <div className=" flex items-center gap-5">
            <div className="relative flex w-full max-w-[31rem] gap-3">
              <Input
                type="email"
                label="Search Job"
                value={jobSearch.jobTittle}
                onChange={handleSearch}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Input
                type="email"
                label="Location"
                value={jobSearch.jobLocation}
                onChange={handleCountry}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
            <div className="w-57">
              <Button
                onClick={getJobs}
                variant="outlined"
                color={jobSearch.jobTittle ? "blue" : "blue-gray"}
                disabled={!jobSearch.jobTittle}
                className="flex items-center gap-2"
              >
                <span> Search</span>
              </Button>
            </div>
          </div>
          <div className="w-full h-9 bg-[#c2dff7] rounded-lg">
            {!isLoading && <p className="text-center text-[0.8rem] font-Poppins font-bold py-2">
              {`${data.length} Jobs Found`}
            </p>}
          </div>
        </div>
        {!isLoading
          ? data.map((job: JobDetailInter) => <JobCard {...job} />)
          : [1, 2, 3, 4, 5, 6, 7, 8].map((Number) => (
              <div className="border border-blue-300 shadow rounded-md p-4 h-[10rem] w-full ">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-blue-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-9 py-1">
                    <div className="h-4 bg-blue-200 rounded"></div>
                    <div className="space-y-9">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-4 bg-blue-200 rounded col-span-2"></div>
                        <div className="h-4 bg-blue-200 rounded col-span-1"></div>
                      </div>
                      <div className="h-4 bg-blue-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div>
        <h2>fillter</h2>
      </div>
    </div>
  );
};
