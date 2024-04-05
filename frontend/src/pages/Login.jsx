import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase'; // Import auth from firebase.js

import Nav from "../components/Nav";
import "../assets/css/style.css";
// import login from "../assets/images/loginn.jpg";
// import google from "../assets/images/google.png";
// import or from "../assets/images/or.png";
// import { Button } from "@mui/material";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState({});

  function handleCredentials(e) {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
    console.log(userCredentials);
  }

  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
  }

  return (
    <>
      <Nav />
      <div className="container">
        <section>
          <h1>Welcome to the Om Enterprises Group</h1>
          <p>Login or create an account to continue</p>
          <div className="login-type">
            <button
              className={`btn ${loginType === 'login' ? 'selected' : ''}`}
              onClick={() => setLoginType('login')}
            >
              Login
            </button>
            <button
              className={`btn ${loginType === 'signup' ? 'selected' : ''}`}
              onClick={() => setLoginType('signup')}
            >
              Signup
            </button>
          </div>
          <form className="add-form login">
            <div className="form-control">
              <label>Email</label>
              <input onChange={(e) => { handleCredentials(e) }} type="text" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input onChange={(e) => { handleCredentials(e) }} type="password" name="password" placeholder="Enter your password" />
            </div>
            {
              loginType === 'login' ?
                <button className="active btn btn-block">Login</button>
                :
                <button onClick={(e) => { handleSignup(e) }} className="active btn btn-block">Sign Up</button>
            }
            <p className="forget-password"> Forgot Password</p>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
