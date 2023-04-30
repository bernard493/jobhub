import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";

// Define a type for the slice state
interface UserState {
  user: {
    userName: string;
    firstName: string;
    lastName : string;
    email: string;
    bio :string;
    job_title : string;
    imageUrl: string;
    password: string;
    isLoggedIn: boolean;
    skills : string[]
    address : {
         country : string;
         street_address : string;
         city:string;
         state : string;
         zip_code : string;
    }
    email_notification : {
         new_jobs : boolean;
         offers : boolean;

    }
    push_notification : boolean
  };
}
const getUserData = JSON.parse(localStorage.getItem("SIGN_UP") || "{}");

const initialState: UserState = {
  user: {
    ...getUserData,
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
         // handle lout and routing 
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
  },
});

export const allUserState = (state: RootState) => state.user.user;
export const { userSignUp, userLogin, logOut } = userSlice.actions;
export default userSlice.reducer;
