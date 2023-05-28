import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";

export const JobDetail = () => {
  const { id: jobId } = useParams();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id : jobId
  });

  console.log(data)
  console.log(error)
  return (
    <div>
      <h1>Job Details</h1>
    </div>
  );
};
