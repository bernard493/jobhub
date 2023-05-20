import React, { useState, Fragment } from "react";
import { Badge, Button, Sidebar } from "flowbite-react";
import { Dialog, Disclosure, Menu, Tab, Transition } from "@headlessui/react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SkillsInputComp } from "../../components/SkillsInputComp/SkillsInputComp";
import { SideBar } from "../../components/Sidebar/SideBar";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { allUserState, userProfileUpdate } from "../../features/userSlice";
import { UserFormInterface } from "../../model";
import { useNavigate } from "react-router-dom";

interface Props {
  // setEdit : ():void
}

export const DetailsUpdate = (setEdit: any) => {
  const [selected, setSelected] = useState(3);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, email, imageUrl, bio, job_title } =
    useSelector(allUserState);

  const initialValue: UserFormInterface = {
    userName: userName,
    email: email,
    imageUrl: imageUrl,
    bio: bio,
    job_title: job_title,
    skills: [],
  };

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(userProfileUpdate(values));
      console.log(values);
      navigate("/profile");
      console.log("hello");
    },
  });

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <SideBar selected={selected} setSelected={setSelected} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className=" ">
          <div className="flex items-baseline justify-between  border-gray-200 ">
            <div className="flex items-center">
              <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                onClick={() => setMobileFiltersOpen(true)}
                type="button"
                className="inline-flex items-center p-2 m-2 ml-3 text-sm text-gray-500 border rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <section>
            <div className="flex ">
              <div className="hidden lg:block">
                <SideBar selected={selected} setSelected={setSelected} />
              </div>

              <div className="px-7 pt-10 w-full">
                <div className=" p-4 bg-gray-50 ">
                  <div className="">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12 space-y-4">
                          <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">
                              Update Profile
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              This information will be displayed publicly so be
                              careful what you share.
                            </p>
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
                                  name="userName"
                                  id="userName"
                                  //
                                  onChange={formik.handleChange}
                                  value={formik.values.userName}
                                  autoComplete="username"
                                  className="block flex-1 w-full border-0 rounded-md py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-4 md:flex items-center md:gap-[13rem]">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Email
                              </label>
                              <div className="mt-2 md:w-[30rem]">
                                <input
                                  type="text"
                                  name="email"
                                  id="email"
                                  //
                                  onChange={formik.handleChange}
                                  value={formik.values.email}
                                  autoComplete="email"
                                  className="block flex-1 w-full border-0 rounded-md py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="email"
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
                                  value={formik.values.bio}
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
                                htmlFor="job_title"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Job title
                              </label>
                              <div className="mt-2 md:w-[30rem]">
                                <div className="flex rounded-md shadow-sm space-x-2 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    type="text"
                                    name="job_title"
                                    id="job_title"
                                    onChange={formik.handleChange}
                                    value={formik.values.job_title}
                                    autoComplete="job_title"
                                    className="block flex-1 w-full border-0 rounded-md py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Frontend Developer"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="sm:col-span-4 md:flex items-center md:gap-[14rem]">
                              <label
                                htmlFor="job_title"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Experience
                              </label>
                              <div className="mt-2 md:w-[30rem]">
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <ul
                                    role="list"
                                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                  >
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                      <div className="flex w-0 flex-1 items-center">
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                          <span className="truncate font-medium">
                                            experience.job_title
                                          </span>
                                          <span className="flex-shrink-0 text-gray-400">
                                            experience.date
                                          </span>
                                        </div>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        <a
                                          href="#"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </dd>
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
                                  <SkillsInputComp edit={true} />
                                </div>
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
