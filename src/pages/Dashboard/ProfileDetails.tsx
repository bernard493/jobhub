import { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Badge, Button, Sidebar } from "flowbite-react";
import { DetailsUpdate } from "./DetailsUpdate";
import { allUserState } from "../../features/userSlice";
import { useSelector } from "react-redux";

export const ProfileDetails = () => {
  const { userName, email, imageUrl, bio, job_title, skills } =
    useSelector(allUserState);
  const [edit, setEdit] = useState(false);

  return (
    <>
      {!edit ? (
        <div className="px-7 pt-10">
          <div className="px-4 flex items-center justify-between sm:px-0 ">
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Profile Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal details
              </p>
            </div>
            <div>
              <Button
                gradientDuoTone="purpleToBlue"
                onClick={() => setEdit(true)}
              >
                Edit Profile
              </Button>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  User Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {userName}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Profile Photo
                </dt>
                <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <img
                    className="h-[4rem] w-[4rem] rounded-full"
                    src={imageUrl}
                    alt="profile_Image"
                  />
                </div>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Job Title
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {job_title}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Skills
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {skills}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {bio}
                </dd>
              </div>
             
            </dl>
          </div>
        </div>
      ) : (
        <DetailsUpdate />
      )}
    </>
  );
};
