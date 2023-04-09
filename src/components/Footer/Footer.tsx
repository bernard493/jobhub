import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

export const Footer = () => {
  return (
    <footer className="w-full pt-[5rem] p-8 md:px-[8rem]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-bold font-Poppins"
        >
          JobHub
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#403FF2] focus:text-[#403FF2]"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#403FF2] focus:text-[#403FF2]"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#403FF2] focus:text-[#403FF2]"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#403FF2] focus:text-[#403FF2]"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-500" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 by Bernard
      </Typography>
    </footer>
  );
};
