import React from "react";
import { Routers } from "../../Routers/Routers";
import { Footer } from "../Footer/Footer";
import { NavbarComp } from "../Navbar/NavbarComp";

export const Layouts = () => {
  return (
    <div className=" bg-gray-100">
      <NavbarComp />
      <div className="">
        <Routers />
        <Footer />
      </div>
    </div>
  );
};
