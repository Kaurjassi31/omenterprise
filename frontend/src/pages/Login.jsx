import React from "react";
import Nav from "../components/Nav";
import "../pages/services.css";
import login from "../assets/loginn.jpg";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid" style={{ padding: "1%" }}>
        <div className="container text-center ">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={login}
                className="img-fluid"
                style={{ height: "600px",width:"100%" }}
              />
            </div>
            <div className="col-sm-6">
              <form action="https://formspree.io/f/mvoerake" method="POST">
                <h2 className=" mt-5 text-primary">Login</h2>
                <div className="row">
                  <div className="col-sm-4">


                  </div>
                  <div className="col-sm-8">

                     
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Username"
                  className="mt-4"
                  name="username"
                  style={{ height: "50px",width:"80%" }}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-4"
                  name="password"
                  style={{ height: "50px",width:"80%" }}
                />
                <br />

                <button
                  type="submit"
                  className=" btn btn-primary mt-4 mb-3"
                  style={{
                    backgroundColor: "#1875fd",
                  }}
                >
                  SUBMIT
                </button>
              </form>
              <center>
                <hr style={{ width: "80%" }} />
              </center>
              <h6 className="mt-4">
                Don't have Account?
                <a href="account" style={{ textDecoration: "none" }}>
                  Create Account
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
