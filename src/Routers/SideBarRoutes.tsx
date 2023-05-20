import React from 'react'
import { SideBar } from '../components/Sidebar/SideBar'
import { Routes, Route, Navigate } from "react-router-dom";
import {
    Login,
    HomePage,
    SignUp,
    LandingPage,
    JobDetail,
    Dashboard,
    ProfileDetails,
    DetailsUpdate,
    ContactUs,
  } from "../pages";
  import { allUserState } from "../features/userSlice";
  import { useSelector } from "react-redux";
  

export const SideBarRoutes = () => {
  const { isLoggedIn } = useSelector(allUserState);

  return (
    <div className='flex gap-5'>
        <SideBar/>
        <main className='max-x-5xl flex-1 max-auto py-4'>
        
          <Route
            path="/settings"
            element={isLoggedIn ? <DetailsUpdate /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <ProfileDetails /> : <Navigate to="/login" />}
          />
        
        </main>
        
    </div>
  )
}



const Router =() => {

    return(
    //     <SideBarRoutes>
    //     <Routes>
    //       <Route
    //         path="/settings"
    //         element={isLoggedIn ? <DetailsUpdate /> : <Navigate to="/login" />}
    //       />
    //       <Route
    //         path="/dashboard"
    //         element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
    //       />
    //       <Route
    //         path="/profile"
    //         element={isLoggedIn ? <ProfileDetails /> : <Navigate to="/login" />}
    //       />
    //     </Routes>
    //   </SideBarRoutes>
    <></>
    )
} 
