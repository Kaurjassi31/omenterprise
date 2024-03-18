// ProductDropdown.js
import React from "react";
import "../pages/services.css";
import logo from "../assets/logo.png";

function ProductDropdown() {
  return (
    <div className="product-dropdown">
      <button className="dropbtn" style={{fontSize:"18px"}}>
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
              Om Enterprises Group is a leading company in bulk SMS
              and promoting business. We provide bulk SMS service in all over
              India.We provide services for  promotion with advanced technology and
              techniques for business Growth.
            </p>
            </div>
          </div>
          <div className="row mt-1">
            <center>
            <h5><b>Money Flow Matrix</b></h5>
            </center>
          
          <div className="row mt-2">
            <div className="col-sm-4 hvr">
              <h6 class="card-title">
                      <b>STANDARD</b>
                    </h6>
                    <p className="mt-2" style={{ fontSize: "15px" }}>
                    * Bulk SMS
                          <br/> *  WhatsApp SMS <br/>
                          * Social Media<br/>+ More
                         
                          <strike>
                      {" "}
                      <p>normally  ₹ 74,000</p>
                    </strike>
                        </p>
                    <h5>
                      <b>₹ 47,999/-</b>
                      <span>
                        <h6>/month</h6>
                      </span>
                    </h5>
                    <a href="pricing">
                    <button
                      type="button"
                      class="btn btn-primary mb-3"
                      style={{ }}
                    >
                      BUY NOW
                    </button></a>
            </div>

            <div className="col-sm-4 hvr">
            <h6 class="card-title">
                      <b>PRO</b>
                    </h6>
                    <p className="mt-2" style={{ fontSize: "15px" }}>
                    * Bulk SMS
                          <br/> *  WhatsApp SMS <br/>
                          * Social Media<br/>+ More
                          <strike>
                      {" "}
                      <p>normally ₹ 1,25,000</p>
                    </strike>
                        </p>
                    <h5>
                      <b>₹ 65,999/-</b>
                      <span>
                        <h6>/month+GST</h6>
                      </span>
                    </h5>
                    <a href="pricing">
                    <button
                      type="button"
                      class="btn btn-primary mb-3"
                      style={{ }}
                    >
                      BUY NOW
                    </button></a>
            </div>

            <div className="col-sm-4 hvr">
            <h6 class="card-title">
                      <b>ULTIMATE</b>
                    </h6>
                    <p className="mt-2" style={{ fontSize: "15px" }}>
                   * Bulk SMS
                          <br/> *  WhatsApp SMS <br/>
                          * Social Media<br/>+ More
                          <strike>
                      {" "}
                      <p>normally ₹ 366,998</p>
                    </strike>
                        </p>
                    <h5>
                      <b>₹ 1,99,999/-</b>
                      <span>
                        <h6>/month+ Tax</h6>
                      </span>
                    </h5>
                    <a href="pricing">
                    <button
                      type="button"
                      class="btn btn-primary mb-3"
                      style={{ }}
                    >
                      BUY NOW
                    </button>
                    </a>
                    
            </div>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default ProductDropdown;
