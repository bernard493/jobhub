import React, { useState } from "react";
import { Badge, Button, Sidebar } from "flowbite-react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SkillsInputComp } from "../../components/SkillsInputComp/SkillsInputComp";
import { ProfileSideBar } from "./ProfileSideBar";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { allUserState, userProfileUpdate } from "../../features/userSlice";
import { UserFormInterface } from "../../model";

export const ProfileUpdate = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const {
    userName,
    email,
    imageUrl,
    bio,
    job_title,
    skills,
    lastName,
    firstName,
    address: { country, street_address, city, state, zip_code },
  } = useSelector(allUserState);

  const initialValue: UserFormInterface = {
    userName: "",
    email: "",
    imageUrl: "",
    bio: "",
    job_title: "",
    lastName: "",
    firstName: "",
    address: { country, street_address, city, state, zip_code },
    skills: [],
  };

  const handleProfileInforUpdate = () => {};

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
     
      

      <div className="top-0 p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      This information will be displayed publicly so be careful
                      what you share.
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

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4 md:flex items-center md:gap-[13rem]">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <div className="mt-2 md:w-[30rem]">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        //
                        onChange={formik.handleChange}
                        value={edit ? formik.values.userName : userName}
                        disabled={!edit}
                        autoComplete="username"
                        className="block flex-1 w-full border-0 rounded-md py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <div className="col-span-full md:flex items-center md:gap-[15rem]">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      About
                    </label>
                    <div className="mt-2 md:w-[30rem]">
                      <textarea
                        id="bio"
                        name="bio"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.bio : bio}
                        disabled={!edit}
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div>
                  </div>
                  <div className="sm:col-span-4 md:flex items-center md:gap-[14rem]">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Job title
                    </label>
                    <div className="mt-2 md:w-[30rem]">
                      <div className="flex rounded-md shadow-sm space-x-2 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="Job_title"
                          id="Job_title"
                          onChange={formik.handleChange}
                          value={edit ? formik.values.job_title :job_title}
                          disabled={!edit}
                          autoComplete="Job_title"
                          className="block flex-1 w-full border-0 rounded-md py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Frontend Developer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4 md:flex items-center md:gap-[15rem]">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Skills
                    </label>
                    <div className="mt-2 md:w-[30rem]">
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <SkillsInputComp edit={edit} />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full md:flex items-center md:gap-[12rem]">
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Profile Photo
                    </label>
                    <div className="mt-2 flex items-center gap-x-8">
                      <img
                        className="h-[4rem] w-[4rem] rounded-full"
                        src={imageUrl}
                        alt="profile_Image"
                      />
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.firstName : firstName}
                        disabled={!edit}
                        autoComplete="given-name"
                        className="block w-full md:w-[25rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.lastName : lastName}
                        disabled={!edit}
                        autoComplete="family-name"
                        className="block w-full md:w-[25rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.email : email}
                        disabled={!edit}
                        type="email"
                        autoComplete="email"
                        className="block w-full md:w-[25rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.address.country : country}
                        disabled={!edit}
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        onChange={formik.handleChange}
                        value={formik.values.address.street_address}
                        autoComplete="street-address"
                        className="block w-full md:w-[25rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.address.city : city}
                        disabled={!edit}
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="state"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.address.state : state}
                        disabled={!edit}
                        id="state"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="zip_code"
                        id="zip_code"
                        onChange={formik.handleChange}
                        value={edit ? formik.values.address.zip_code : zip_code}
                        disabled={!edit}
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
