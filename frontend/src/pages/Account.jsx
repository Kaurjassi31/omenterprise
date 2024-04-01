import React from "react";
import "../pages/indexnew.css";
import Nav from "../components/Nav";
import login from "../assets/create.jpg";
import google from "../assets/google.png";
import or from "../assets/or.png";

const Account = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid" style={{ padding: "1%" }}>
        <div className="container text-center ">
          <div className="row mt-5 mb-5">
            <div className="col-sm-6">
              <img
                src={login}
                className="img-fluid"
                style={{ height: "600px" }}
              />
            </div>
            <div className="col-sm-6 accountform">
              <form action="https://formspree.io/f/mvoerake" method="POST">
                <h2 className=" mt-4">Create Account</h2>
                <center>
                  <div
                    className="row mt-3"
                    style={{
                      backgroundColor: "#1875fd",
                      width: "80%",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="col-sm-2"
                      style={{
                        backgroundColor: "#1875fd",
                        borderRadius: "4px",
                      }}
                    >
                      <div
                        className="whte bg-light mt-2"
                        style={{
                          height: "37px",
                          width: "40px",
                          borderRadius: "4px",
                        }}
                      >
                        <img
                          src={google}
                          className="img-fluid  mt-1"
                          style={{ height: "30px", width: "30px" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <p className="text-light text-center mt-3">
                        Login with Google
                      </p>
                    </div>
                  </div>
                </center>
                <center>
                  <img
                    src={or}
                    className="img-fluid mt-2"
                    style={{ height: "30px", width: "30px" }}
                  />
                </center>
                <input
                  type="text"
                  placeholder="Username"
                  className="mt-3"
                  name="Your Name"
                  style={{ height: "45px", width: "80%", borderRadius: "4px" }}
                />

                <br />

                <input
                  type="text"
                  placeholder="Email"
                  className="mt-3"
                  name="Email"
                  style={{ height: "45px", width: "80%", borderRadius: "4px" }}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-4"
                  name="password"
                  style={{ height: "45px", width: "80%", borderRadius: "4px" }}
                />
                <br />
                <button
                  type="submit"
                  className=" btn btn-primary mt-4 mb-3"
                  style={{
                    backgroundColor: "#1875fd",
                    width: "80%",
                    height: "50px",
                    fontSize: "20px",
                  }}
                >
                  Create Account
                </button>
              </form>
              <h6 className="mt-2">
                Already have an Account?
                <a href="login" style={{ textDecoration: "none" }}>
                  Login Here
                </a>
              </h6>
              <center>
              <hr style={{ width: "80%" }} />
              </center>
              <center>
                <h6 className="mt-2" style={{ width: "80%" }}>
                  By Signing up you automatically agrees to the
                  <a href="terms" style={{ textDecoration: "none" }}>
                    Terms and Conditions.
                  </a>
                </h6>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
