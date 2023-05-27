import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';

export const JobDetail = () => {
  const {id : jobId}  = useParams() 
  // const { data, isLoading, error, refetch } = useFetch("search", {
  //   query: ` ${jobSearch.jobTittle} , ${jobSearch.jobLocation}`,
  //   num_pages: "5",
  // });
  console.log(jobId)
  return (
    <div>{jobId}</div>
  )
}
