import React from "react";
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-sm-3 text-center">
            <img
              src={logo1}
              className="img-fluid mt-5"
              style={{ height: "5rem" }}
            />
            <h2 style={{ fontFamily: "Poppins', sans-serif" }} className="mt-4">
              Om Enterprises
              <br />
              Group
            </h2>
          </div>
          <div className="col-sm-2 mt-5">
            <h2
              style={{ fontFamily: "Poppins', sans-serif", marginLeft: "25px" }}
            >
              Products
            </h2>
            <ul
              style={{
                fontFamily: "Poppins', sans-serif",
                textDecoration: "none",
                listStyle: "none",
                textAlign: "left",
                fontSize: "19px",
              }}
            >
              <a
                href="bulksms"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Bulk Messages</li>
              </a>
              <a
                href="bulkemail"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Email Marketing</li>
              </a>
              <a
                href="digitalmarketing"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Digital marketing</li>
              </a>
              <a
                href="website"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Website Designing</li>
              </a>
              <a
                href="voicesms"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Voice Messages</li>
              </a>
            </ul>
          </div>
          <div className="col-sm-2 mt-5">
            <h2
              style={{ fontFamily: "Poppins', sans-serif", marginLeft: "23px" }}
            >
              Quick Links
            </h2>
            <ul
              style={{
                fontFamily: "Poppins', sans-serif",
                textDecoration: "none",
                listStyle: "none",
                textAlign: "left",
                fontSize: "19px",
              }}
            >
              <a
                href="about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>About Us</li>
              </a>
              <a
                href="services"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Services</li>
              </a>
              <li>Careers</li>
              <a
                href="contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Contact -Us</li>
              </a>
              <a 
                href="privacy"
                style={{ textDecoration: "none", color: "white" }}>
              <li>Privacy Policy</li>
              </a>

              <a
                href="pricing"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Plan & Pricing</li>
              </a>
            </ul>
          </div>
          <div className="col-sm-1"></div>

          <div className="col-sm-3 mt-5">
            <h2 style={{ fontFamily: "Poppins', sans-serif" }}>Contact Us</h2>
            <div>
              <form>
                <div class="mb-3" style={{ border: "2px solid grey" }}>
                  <label style={{ marginLeft: "10px" }} class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    style={{ width: "70%", marginLeft: "10px" }}
                  />
                  <label style={{ marginLeft: "10px" }} class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    style={{ width: "70%", marginLeft: "10px" }}
                  />
                  <div
                    style={{ marginLeft: "10px" }}
                    className="text-light mt-1"
                  >
                    We'll contact you soon.
                  </div>
                  <button
                    type="submit"
                    className="bt-2"
                    style={{
                      marginLeft: "10px",
                      marginTop: "7px",
                      marginBottom: "8px",
                    }}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
