import React from "react";
import { Talent, Connection, Hero, EasySteps, ExcitingJobs, JobCategory, Review } from "../../sections/index";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Talent />
      <Connection />
      <EasySteps/>
      <ExcitingJobs/>
      <JobCategory/>
      <Review/>
    </>
  );
};
