import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/services.css";
import ProductDropdown from "../components/ProductDropdown";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import DropdownMenu from "../components/UI/DropdownMenu";
const Nav = () => {
  return (
    <>
      <div className="container-fluid grad text-center p-2">
        <h5 className=" text-light mt-4">
          Promote Your Business With Om Enterprises Group
        </h5>
      </div>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          height: "85px",
          backgroundColor: " rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(25px)",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/index">
            <img
              src={logo}
              className="img-fluid"
              style={{ height: "70px", width: "70px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item product mt-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/index"
                >
                  <ProductDropdown />
                </a>
              </li>
              {/* <li
                className="nav-item mt-3 mx-2 "
                style={{ fontSize: "18px", color: "black" }}
              >
                <a className="nav-link text-dark" href="/login">
                  Sign In
                </a>
              </li> */}
              <li>
              <SignedOut>
              <SignInButton className="mt-3 p-2" style={{border:"none",fontSize:"18px",backgroundColor:"transparent"}}  />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <button
                className=" btn btn-primary  mx-3 mb-3"
                style={{
                  backgroundColor: "#023368",
                  border: "none",
                }}
              >
                <a className="nav-link" href="/account">
                  Sign Up Now
                </a>
              </button>
            </form> */}
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
