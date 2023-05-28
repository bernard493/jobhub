// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcFStM8WOIcQhj30p52iwzXvduVgIMwz8",
  authDomain: "jobhub-4a3b7.firebaseapp.com",
  projectId: "jobhub-4a3b7",
  storageBucket: "jobhub-4a3b7.appspot.com",
  messagingSenderId: "1066100258175",
  appId: "1:1066100258175:web:66bbb229789fe37229164a",
  measurementId: "G-0PGL46X6PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
