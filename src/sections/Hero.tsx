import React ,{useState ,useReducer, FunctionComponent}from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {CiSearch} from 'react-icons/ci'

interface JobSearchInter {
  jobLocation :string;
  jobTittle :string
}

enum JobSearchActionKind {
  JOB_LOCATION = 'JOB_LOCATION',
  JOB_TITTLE = 'JOB_TITTLE',
}

interface  JobSearchAction {
  type :JobSearchActionKind;
  payload : string
}

const initialJobSearch : JobSearchInter = {
  jobLocation : '',
  jobTittle : ''
}

const reducer = (jobSearch:JobSearchInter,action:JobSearchAction)=>{
  const {type,payload} = action;
  switch(type){
     case JobSearchActionKind.JOB_LOCATION:
      return{
        ...jobSearch,
        jobLocation : payload
      }
      case JobSearchActionKind.JOB_TITTLE:
        return{
          ...jobSearch,
          jobTittle : payload
        }
  };

}



export const Hero :FunctionComponent = () => {

  // const [jobSearch ,setJobSearch] = useState()
  const [jobSearch ,dispatch] = useReducer( reducer,initialJobSearch )


  function handleJobTittle(e:React.FormEvent<HTMLInputElement>){
    const newValue = e.currentTarget.value;
     dispatch({type: JobSearchActionKind.JOB_TITTLE , payload : newValue})
  
  }





function  handleJobLocation(e:React.FormEvent<HTMLInputElement>){
  const newValue = e.currentTarget.value;
   dispatch({type: JobSearchActionKind.JOB_LOCATION , payload : newValue})

}

console.log(jobSearch)

  return (
    <main className='flex justify-center'>
      <div className='grid grid-cols-2 gap-2'>
        <div className='pt-[5rem] text-center'>
          <div className='w-[25rem]'>

          <h1 className='text-4xl text-gray-700 font-bold md:text-5xl'>Your dream job is waiting for you.</h1>
          </div>
          <div className='flex items-center py-[3rem]'>

          <div className="flex  items-center  ">
            <input
              className="relative text-md  bg-[#fff]  h-[1rem] py-[1.4rem] text-gray-600  pl-[4rem] w-[20rem] drop-shadow-md dark:text-[#fff]  rounded-l-lg md:h-[2.2rem] md:w-[12rem] md:text-sm md:pl-[3rem]"
              placeholder="Find your Location"
              type="text"
              value={jobSearch.jobLocation}
              onChange={handleJobLocation}
            />
           
            <IoLocationOutline className=" absolute text-2xl text-gray-600 h-2 w-2  md:h-4 md:w-4 ml-[1rem]" />
          </div>
          <div className='flex  items-center '>
          <input
              className="relative text-md  bg-[#fff]  h-[1rem] py-[1.4rem] text-gray-600  pl-[4rem] w-[20rem] drop-shadow-md dark:text-[#fff] dark:bg-[#2B3945] rounded-r-lg md:h-[2.2rem] md:w-[15rem] md:text-sm md:pl-[3rem]"
              placeholder="Job Category"
              type="text"
              value={jobSearch.jobTittle}
              onChange={handleJobTittle}
            />
            <HiOutlineBuildingOffice2 className=" absolute text-2xl text-gray-600 h-5 w-5  md:h-4 md:w-4 ml-[1rem]" />
              <button className='absolute h-[2.3rem] w-[2.3rem] bg-blue-700 ml-[12.5rem] rounded-lg'>
                <CiSearch  className=" text-center font-bold text-2xl text-white h-5 w-5  md:h-4 md:w-4 ml-[1rem]" />
              </button>
          </div>
          </div>

        </div>
        <div>
          <img src="" alt="" />
        </div>

      </div>
      
    </main>
  )
}
