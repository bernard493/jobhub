import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import {UserStateInterface} from '../model'
// Define a type for the slice state

const getUserData = JSON.parse(localStorage.getItem("SIGN_UP") || "{}");

const initialState: UserStateInterface = {
  user: {
    ...getUserData,
    firstName: "" ,
    lastName : "" ,
    bio :"" ,
    job_title : "" ,
    skills : [''] ,
    address : {
         country : "Ghana" ,
         street_address : "" ,
         city:"" ,
         state : "" ,
         zip_code : "" ,
    },
    
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignUp: (state, action) => {
      const userData = {
        ...action.payload,
        isLoggedIn: false,
      };
      // console.table(userData);
      localStorage.setItem("SIGN_UP", JSON.stringify(userData));
    },

    userLogin: (state, action) => {
      const getUserData = JSON.parse(localStorage.getItem("SIGN_UP") || "{}");
      const { email, password } = action.payload;
      if (getUserData) {
        if (password === getUserData.password) {
          const loginUser = {
            ...getUserData,
            isLoggedIn: true,
          };
          state.user = loginUser;
          localStorage.setItem("SIGN_UP", JSON.stringify(loginUser));
          // history.push('/home');  
        }
      }
    },
         // handle logout and routing 
    logOut: (state) => {
      const getUserData = JSON.parse(localStorage.getItem("SIGN_UP") || "{}");
      if (getUserData) {
        const logOutUser = {
          ...getUserData,
          isLoggedIn: false,
        };
        state.user.isLoggedIn = false;
        localStorage.setItem("SIGN_UP", JSON.stringify(logOutUser));
      }
    },

    userProfileUpdate : (state ,action) => {

    }
  },
});

export const allUserState = (state: RootState) => state.user.user;
export const { userSignUp, userLogin, logOut ,userProfileUpdate } = userSlice.actions;
export default userSlice.reducer;
