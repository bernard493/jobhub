import React from "react";
import { Routers } from "../../Routers/Routers";
import { Footer } from "../Footer/Footer";
import { NavbarComp } from "../Navbar/NavbarComp";

export const Layouts = () => {
  return (
    <div className="bg-[#f7f5f5]">
      <NavbarComp />
      <div className="">
        <Routers />
        <Footer />
      </div>
    </div>
  );
};
