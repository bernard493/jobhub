import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Tab, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { SideBar } from "../../components/Sidebar/SideBar";
import { useSelector, useDispatch } from "react-redux"; 
import {fetchDashboardDate, userSelector} from "../../features/dashboardSlice"
import { AppDispatch } from "../../app/store";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data,loading} = useSelector(userSelector)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selected, setSelected] = useState(1);


  useEffect(()=>{
    dispatch(fetchDashboardDate())
  },[])

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setSelectedIndex(newValue);
  //   console.log(newValue);
  // };
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

          <section aria-labelledby="products-heading" className=" ">
            <div className="flex item-center">
              <div className="hidden lg:block">
                <SideBar selected={selected} setSelected={setSelected} />
              </div>
              <div className=" flex-1 p-7">
                <div className="sm:p-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                  +
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                      +
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        +
                      </p>
                    </div>
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
