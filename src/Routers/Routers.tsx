import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, HomePage, SignUp, Dashboard,JobDetail } from '../pages';
import { allUserState } from '../features/userSlice';
import {useSelector} from 'react-redux'

export const Routers= () => {
  const {isLoggedIn} = useSelector(allUserState)

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


  console.log(isLoggedIn)
  return (
   <Routes>
    <Route  path='/' element={!isLoggedIn ? <HomePage/> : <Navigate to="/dashboard"/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='/signup' element={<SignUp/>}/>
    <Route  path='/dashboard' element={isLoggedIn ? <Dashboard/> : <Navigate to="/login"/> }  />
    <Route  path='/jobdetails/:id' element={<JobDetail/>}/>
   </Routes>
  )
}
