import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { UserStateInterface } from "../model";
import { GoogleAuthProvider,signInWithPopup , onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Define a type for the slice state





const getUserData = JSON.parse(localStorage.getItem("SIGN_UP") || "{}");

const initialState: UserStateInterface = {
  user: {
    ...getUserData,
    
  },
};
// export const  loginUser = createAsyncThunk()

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
      createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        const user = userCredential.user;
        // state.user = user
        console.log("email n password",user)
      }) 
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      // if (getUserData) {
      //   if (password === getUserData.password) {
      //     const loginUser = {
      //       ...getUserData,
      //       isLoggedIn: true,
      //     };
      //     state.user = loginUser;
      //     localStorage.setItem("SIGN_UP", JSON.stringify(loginUser));
      //   }
      // }
    },  

    googleLogin :()=>{
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth,provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("google user",user)

          
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
      signOut(auth)
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
export const { userSignUp, userLogin, logOut, userProfileUpdate,googleLogin } =
  userSlice.actions;
export default userSlice.reducer;
