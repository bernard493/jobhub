import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { UserStateInterface } from "../model";

// Define a type for the slice state

const getUserData = JSON.parse(localStorage.getItem("SIGN_UP") || "{}");

const initialState: UserStateInterface = {
  user: {
    userName: "",
    email: "",
    imageUrl: "",
    isLoggedIn: false,
    bio: "",
    job_title: "",
    skills: [],
  },
};
// export const  loginUser = createAsyncThunk()

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = {
        ...action.payload,
        isLoggedIn: true,
      };
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
      // signOut(auth);
    },

    userProfileUpdate: (state, action) => {
      const { userName, email, imageUrl, bio, job_title, skills } =
        action.payload;
      const getUserData = JSON.parse(localStorage.getItem("SIGN_UP") || "{}");
      if (getUserData) {
        const newProfileInfor = {
          ...getUserData,
          ...action.payload,
        };
        // console.table(newProfileInfor)
        localStorage.setItem("SIGN_UP", JSON.stringify(newProfileInfor));
      }
    },
  },
});

export const allUserState = (state: RootState) => state.user.user;
export const { userLogin, logOut, userProfileUpdate } = userSlice.actions;
export default userSlice.reducer;
