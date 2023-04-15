import React from "react";
import { ProfileCard } from "./ProfileCard";
import { TopSkills } from "./TopSkills";
import { WorkExperienceCard } from "./WorkExperienceCard";

export const SideProfileCom = () => {
  return (
    <div className="space-y-6 pl-6">
      <ProfileCard />

      <WorkExperienceCard />

      <TopSkills />
    </div>
  );
};
