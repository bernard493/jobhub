import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";

// Define a type for the slice state
interface UserState {
  user: {
    userName: string;
    email: string;
    imageUrl: string;
    password: string;
    isLoggedIn: boolean;
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
        }
      }
    },
         // handle lout and routing 
    logOut: (state, action) => {
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
