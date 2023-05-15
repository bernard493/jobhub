import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import { HiHome } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const SideBar = ({selected ,setSelected}: any) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-60" : "w-20 "
      } bg-gray-800 h-screen p-5  pt-8 relative duration-300`}
    >
      {open ? (
        <IoIosArrowForward
          className={`absolute cursor-pointer right-6 top-9 w-7 h-7 text-white border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <IoIosArrowBack
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 text-white border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      )}
      <div className="flex gap-x-4 items-center">
        {/* <HiHome
            
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
        <h1
          className={` text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Menu
        </h1>
      </div>
      <ul className="pt-6">
        {SidebarData.map((Menu, index) => {
          const Icon = Menu.icon;
          return (
            <Link
              to={Menu.path}
              key={index}
              className=""
              >
              <motion.button
              className={`flex w-full  rounded-md p-2 cursor-pointer hover:bg-gray-700 text-white text-sm items-center gap-x-4 
              ${index === 0 && "bg-light-white"} relative `}
              onClick={()=> setSelected(Menu.id)}
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              >
                <Icon className="h-6 w-6 relative z-10" />
                <span
                  className={`${
                    !open && "hidden "
                  } origin-left duration-200 text-lg relative z-10`}
                >
                  {Menu.title}
                </span>
               {selected == Menu.id && <motion.span
               initial={{scale:0}} 
               animate={{scale:1}}
               exit={{scale:0}}
               className="absolute inset-0 rounded-md bg-blue-400 z-0"></motion.span>}
              </motion.button>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
