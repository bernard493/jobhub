import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Login,
  HomePage,
  SignUp,
  LandingPage,
  JobDetail,
  Dashboard,
  ProfileDetails,
  ContactUs,
} from "../pages";
import { allUserState } from "../features/userSlice";
import { useSelector } from "react-redux";
import { SideBarRoutes } from "./SideBarRoutes";
import { SideBar } from "../components/Sidebar/SideBar";

export const Routers = () => {
  const { isLoggedIn } = useSelector(allUserState);

  // function requireAuth(nextState, replace, next) {
  //   if (!isLoggedIn) {
  //     replace({
  //       pathname: "/login",
  //       state: {nextPathname: nextState.location.pathname}
  //     });
  //   }
  //   next();
  // }

  // function requireAuth (nextState, replace, callback) {
  //   const token = localStorage.getItem('@TOKEN')
  //   if (!isLoggedIn) replace('/')
  //   return callback()
  // }

  console.log(isLoggedIn);
  return (
    <Routes>
      {/* <SideBar/> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/searchjob"
        element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
      />

      <Route
        path="/savedjobs"
        element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/contactUs"
        element={isLoggedIn ? <ContactUs /> : <Navigate to="/login" />}
      />
      <Route
        path="/jobdetails/:id"
        element={isLoggedIn ? <JobDetail /> : <Navigate to="/login" />}
      />
      
          <Route
            path="/settings"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <ProfileDetails /> : <Navigate to="/login" />}
          />
       
    </Routes>
  );
};
