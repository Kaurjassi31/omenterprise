import React from 'react'
import logo from "../assets/logo.png";


import DropdownMenu from "../components/UI/DropdownMenu";
const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: " rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(25px)",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
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
              <li className="nav-item product">
                <a className="nav-link active" aria-current="page" href="">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                
                  href="/login"
                >
                  Sign In
                </a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
            <button
    className=" btn btn-primary mt-1 mx-4"
    style={{
      backgroundColor:"#023368"
    }}
  
    >  
                 <a
                  className="nav-link"
                
                  href="/login"
                >
                Sign Up Free
                </a>
              </button>
              
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav


