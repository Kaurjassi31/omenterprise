// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_yCcF0__2mcXdUvNZHHJm-rL0pJV0QEM",
  authDomain: "om-enterprises-f8add.firebaseapp.com",
  projectId: "om-enterprises-f8add",
  storageBucket: "om-enterprises-f8add.appspot.com",
  messagingSenderId: "710681432157",
  appId: "1:710681432157:web:6cdb87b96caa1250ebbdb4",
  measurementId: "G-E2XNK75GNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app,auth,analytics };