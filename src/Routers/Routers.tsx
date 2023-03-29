import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login, HomePage, SignUp, Dashboard } from '../pages';



export const Routers= () => {
  return (
   <Routes>
    <Route  path='/' element={<HomePage/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='/signup' element={<SignUp/>}/>
    <Route  path='/dashboard' element={<Dashboard/>}/>
   </Routes>
  )
}
