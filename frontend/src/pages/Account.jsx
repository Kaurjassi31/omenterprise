import React from "react";
import "../pages/indexnew.css";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import login from "../assets/pswd.png";

const Account = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="container-fluid mt-5" style={{ padding: "5%" }}>
        <div className="container text-center mt-3">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={login}
                className="img-fluid"
             
              />
            </div>
            <div className="col-sm-5 login">
            <form
  action="https://formspree.io/f/mvoerake"
  method="POST"
>
              <h1 className=" mt-5 text-primary">CREATE ACCOUNT</h1>

              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="mt-4 my-2"
                style={{ height: "45px",width:"72%" }}
              />
              <input
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                className="mt-4 my-2"
                style={{ height: "45px",width:"72%" }}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="mt-3 my-2"
                style={{ height: "45px",width:"72%" }}
              />

              <input
                type="password"
                placeholder="Password"
                className="mt-3"
                name="password"
                style={{ height: "45px",width:"72%" }}
              />
              <br />

              <button
                type="submit"
                className=" btn btn-primary mt-4 mb-2"
                style={{
                  backgroundColor: "#1875fd",
                }}
              >
                SUBMIT
              </button>
              <h6 className="mt-3">
                Already have an Account?{" "}
                <a href="login" style={{ textDecoration: "none" }}>
                 Login Here
                </a>{" "}
              </h6>
              <center>
                <hr style={{ width: "80%" }} />
              </center>
             <center>
              <h6 className="mt-2" style={{ width: "80%" }}>
              By Signing up you automatically agrees to the
                <a href="terms" style={{ textDecoration: "none" }}>
                 Terms and Conditions.
                </a>{" "}
              </h6>
              </center>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Account;
