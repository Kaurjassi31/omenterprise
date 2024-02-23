import React from "react";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import "../pages/services.css";
import login from "../assets/login.png";

const Login = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="container-fluid back">
        <div className="container text-center mt-5"
        style={{padding:"5%"}}>


          <div className="row">
        <div className="col-sm-6">
        <img src={login} className="img-fluid mt-5"   />

        </div>
            <div className="col-sm-5 login">
            <h1 className=" mt-5">LOGIN</h1>
          <input type="text" placeholder="Username" className="mt-5" style={{height:"50px"}} />
         
          <input type="password" placeholder="Password" className="mt-5" style={{height:"50px"}} />
          <br/>
          <button type="submit" className="btn btn-outline-primary mt-5 mb-5">SUBMIT</button>
            </div>
            
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
