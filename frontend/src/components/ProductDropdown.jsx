// ProductDropdown.js
import React from "react";
import "../assets/css/services.css";
import logo from "../assets/images/logo.png";
import text from "../assets/images/text.webp";
import sms from "../assets/images/mail.png";
import voice from "../assets/images/voice6.png";
import globe from "../assets/images/globe2.png";
import fb from "../assets/images/fb.png";

function ProductDropdown() {
  return (
    <div className="product-dropdown">
      <button className="dropbtn" style={{ fontSize: "18px" }}>
        Products<span className="arrow">&#11167;</span>
      </button>
      <div className="dropdown-content" style={{ textAlign: "left" }}>
        <div className="container">
          <div className="row hvr">
            <div className="col-sm-2">
              <a className="navbar-brand" href="/index">
                <img
                  src={logo}
                  className="img-fluid mt-2"
                  style={{ height: "80px", width: "80px" }}
                />
              </a>
            </div>
            <div className="col-sm-10">
              <p className="mt-1">
                Om Enterprises Group is a leading company in bulk SMS and
                promoting business. We provide bulk SMS service in all over
                India.We provide services for promotion with advanced technology
                and techniques for business Growth.
              </p>
            </div>
          </div>
          <div className="row mt-1">
            <div className="row mt-2">
              <div className="col-sm-4 hvr">
              <a href="bulksms" style={{textDecoration:"none",color:"black"}}>
                <h6 class="card-title mt-2">
                  <img
                    src={text}
                    className="img-fluid mx-2"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <b>Bulk Sms</b>
                </h6>
                <p className="mt-2">
                  Sending of a large number of messages to multiple recipients.
                </p>
                    </a>
              </div>
              <div className="col-sm-4 hvr">
              <a href="bulkemail" style={{textDecoration:"none",color:"black"}}>
                <h6 class="card-title mt-2">
                  <img
                    src={sms}
                    className="img-fluid mx-2"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <b>Email </b>
                </h6>
                <p className="mt-2">Send email newsletters to your subscribers and customers.</p>

               </a>
              </div>
              <div className="col-sm-4 hvr">
              <a href="voicesms" style={{textDecoration:"none",color:"black"}}>
                <h6 class="card-title mt-2">
                  <img
                    src={voice}
                    className="img-fluid mx-2"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <b>Voice Sms</b>
                </h6>
                <p className="mt-2">Sends a pre-recorded message to a list of contacts.</p>
                </a>
              </div>
              <div className="col-sm-4 hvr">
              <a href="website" style={{textDecoration:"none",color:"black"}}>
                <h6 class="card-title mt-2">
                  <img
                    src={globe}
                    className="img-fluid mx-2"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <b>Website</b>
                </h6>
                <p className="mt-2">
                  {" "}
                  Interaction between staff, customers and general public.{" "}
                </p>

                
                </a>
              </div>
              <div className="col-sm-4 hvr">
              <a href="socialmedia" style={{textDecoration:"none",color:"black"}}>
                <h6 class="card-title mt-2">
                  <img
                    src={fb}
                    className="img-fluid mx-2"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <b>Social Media</b>
                </h6>
                <p className="mt-2">
                  Offer management solutions tailored to your business needs.
                </p>

               </a>
              </div>
              <div className="col-sm-4 hvr">
                    <a href="account">
                    <button
                      type="button"
                      class="btn btn-primary mt-3"
                      style={{ }}
                    >
                    Signup Now
                    </button></a>
                    <p className="mt-2">Signup to buy package at exicting prices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDropdown;
