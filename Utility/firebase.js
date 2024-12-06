// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF34P9TU-Fob_368NGirA9TA_R1CzyoWw",
  authDomain: "clone-e0f76.firebaseapp.com",
  projectId: "clone-e0f76",
  storageBucket: "clone-e0f76.firebasestorage.app",
  messagingSenderId: "150259500905",
  appId: "1:150259500905:web:f8a57fe8deee405ca39ff8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
