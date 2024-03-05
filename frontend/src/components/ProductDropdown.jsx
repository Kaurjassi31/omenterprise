// ProductDropdown.js
import React from "react";
import "../pages/services.css";
import logo from "../assets/logo.png";

function ProductDropdown() {
  return (
    <div className="product-dropdown">
      <button className="dropbtn" style={{fontSize:"20px"}}>
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
            <p className="mt-2">
              Om Enterprises Group is a leading company in bulk SMS
              and promoting business. We provide bulk SMS service in all over
              India.We provide services for  promotion with advanced technology and
              techniques for business Growth.
            </p>
            </div>
           
          </div>
          <div className="row">
            <div className="col-sm-4 hvr">
              <a href="bulksms" style={{textDecoration:"none"}}>
                <div className="product">
                <h3 className="mt-2">Bulk SMS </h3>
                <p>
                  Bulk messages refer to the sending of a large number of
                  messages simultaneously to multiple recipients.
                </p>
                {/* Add any additional information */}
              </div>
              </a>
            </div>
            {/* <div className="col-sm-1"></div> */}

            <div className="col-sm-4 hvr">
            <a href="bulkemail" style={{textDecoration:"none"}}>
              <div className="product">
                <h3 className="mt-2">Bulk Email</h3>
                <p>
                  {" "}
                  Bulk email refer to sending email marketing message sent by a
                  brand to multiple recipients.
                </p>
                {/* Add any additional information */}
              </div></a>
            </div>
            {/* <div className="col-sm-1"></div> */}

            <div className="col-sm-4 hvr">
            <a href="website" style={{textDecoration:"none"}}>
              <div className="product">
                <h3 className="mt-2">Website Development</h3>
                <p>
                  Website development refers to the process of creating,
                  building, and maintaining websites.
                </p>
                {/* Add any additional information */}
              </div></a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 hvr">
            <a href="voicesms" style={{textDecoration:"none"}}>
              <div className="product">
                <h3 className="mt-2">Voice SMS</h3>
                <p>
                  A Voice Messaging service sends a pre-recorded message to a
                  list of contacts by an individual or an organization.
                </p>
                {/* Add any additional information */}
              </div></a>
            </div>
            {/* <div className="col-sm-1"></div> */}

            <div className="col-sm-4 hvr">
            <a href="whatsapp" style={{textDecoration:"none"}}>
              <div className="product">
                <h3 className="mt-2">WhatsApp Bulk</h3>
                <p>
                  Bulk WhatsApp sms has become increasingly popular among
                  businesses and organizations as an efficient tool.
                </p>
                {/* Add any additional information */}
              </div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDropdown;
