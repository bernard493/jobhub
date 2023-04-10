import React, { useState,useReducer } from "react";
import { Input, Button, IconButton } from "@material-tailwind/react";
import { BsBookmark } from "react-icons/bs";
import { JobCard } from "../../components/JobCard/JobCard";
import { Profile } from "../../pages/index";
import { useFetch } from "../../Hooks/useFetch";


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



const reducer = (jobSearch :JobSearchInter , action :JobSearchAction) =>{
      const {type ,payload} = action;
      switch (type) {
        case JobSearchActionKind.JOB_LOCATION :
          return {
            ... jobSearch,
            jobLocation : payload,
          };
     
      case JobSearchActionKind.JOB_TITTLE:
        return {
          ...jobSearch,
          jobTittle :payload
        };
      }
}













export const Dashboard = () => {
  // const [search, setSearch] = useState("");
  // const [country, setCountry] = useState("");
  const [jobSearch, dispatch] = useReducer(reducer, initialJobSearch);
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: ` ${jobSearch.jobTittle} , ${jobSearch.jobLocation}`,
    num_pages: "1",
  });

  const handleSearch = ({ target }: any) => dispatch({ type: JobSearchActionKind.JOB_TITTLE, payload: target.value });

  const handleCountry = ({ target }: any) => dispatch({ type: JobSearchActionKind.JOB_LOCATION, payload:target.value});
  
  const getJobs = () => {

  }

console.table(jobSearch)

  return (
    <div className="grid grid-cols-4 gap-8 py-[3rem]">
      <div>
        <Profile />
      </div>
      <div className="col-span-2 space-y-8">
        <div className=" bg-white rounded-xl py-[1rem] px-[2rem] space-y-5">
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
            <p className="text-center text-[0.8rem] font-Poppins font-bold py-2">
              {"66 Jobs Found"}
            </p>
          </div>
        </div>
        <JobCard />
      </div>
      <div>
        <h2>fillter</h2>
      </div>
    </div>
  );
};
