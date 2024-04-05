// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCAuXUT_CGWzyO7N-mYukWb4j5FHBykf3w",
  authDomain: "new-om-enterprises.firebaseapp.com",
  projectId: "new-om-enterprises",
  storageBucket: "new-om-enterprises.appspot.com",
  messagingSenderId: "1037844891558",
  appId: "1:1037844891558:web:2713843ea9fee66d303167",
  measurementId: "G-ZFG765DFYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);
