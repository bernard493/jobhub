import { Fragment, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Dialog, Disclosure, Menu, Tab, Transition } from "@headlessui/react";
import { Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { allUserState, userProfileUpdate } from "../../features/userSlice";
import { UserFormInterface } from "../../model";
import { useNavigate } from "react-router-dom";

export const DetailsUpdatePupUp = ({ open, setOpen }: any) => {
  const cancelButtonRef = useRef(null);
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form onSubmit={formik.handleSubmit}>
                  <div className="bg-white px-4 pb-4 pt-5 sm:p- sm:pb-4 sm:w-full">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <FiEdit
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Update Details
                        </Dialog.Title>

                        <div className="mt-2">
                          <div className="mt-4">
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
                                Update
                              </button>
                            </div>
                          </div>

                          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="User Name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                First name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="userName"
                                  id="userName"
                                  onChange={formik.handleChange}
                                  value={formik.values.userName}
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Eamil
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="email"
                                  id="email"
                                  onChange={formik.handleChange}
                                  value={formik.values.email}
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Job Title
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="job_title"
                                  id="job_title"
                                  onChange={formik.handleChange}
                                  value={formik.values.job_title}
                                  autoComplete="job_title"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="mt- grid ">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              About
                            </label>
                            <textarea
                              id="bio"
                              name="bio"
                              onChange={formik.handleChange}
                              value={formik.values.bio}
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="mt- grid ">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Experience
                            </label>
                            <div className="mt-2 md:w-[25rem]">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      // ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
