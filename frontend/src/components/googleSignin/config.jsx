// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMWe1lc-R0rEjN-nvgjHpc1ZDc5J48Pk4",
  authDomain: "om-enterprises-jalandhar.firebaseapp.com",
  projectId: "om-enterprises-jalandhar",
  storageBucket: "om-enterprises-jalandhar.appspot.com",
  messagingSenderId: "672309613058",
  appId: "1:672309613058:web:38fced46ad20c1fb0c0d1b",
  measurementId: "G-FLFVZ0DCJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
