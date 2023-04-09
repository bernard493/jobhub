import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export const NavbarComp = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={''} className="flex items-center">
          Find a Job
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={''} className="flex items-center">
          Companies
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={''} className="flex items-center">
          Abouts Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={''} className="flex items-center">
          Post a Job
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-30 h-max max-w-full rounded-none py-2 px-4 lg:px-[10rem] lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center  text-blue-gray-900 space-x-[10rem]">
            <Typography
              as="a"
              href="/"
              className="mr-4 cursor-pointer py-1.5 font-bold font-Poppins"
            >
             JobHub
            </Typography>
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block "
            >
              <span>Sign In</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="md" fullWidth className="mb-2">
            <span>Sign In</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
};
