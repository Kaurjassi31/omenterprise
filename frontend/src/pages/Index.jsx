import React from "react";
import Nav from "../components/Nav";
import "../pages/indexnew.css";
import New from "../assets/new.gif";
import Swiperr from "../components/Swiperr";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import star5 from "../assets/star3.png";
import Feed from "../components/Feed";
import check from "../assets/check.webp";
import compare from "../assets/compare.png";
import player from "../assets/player.webp";
import text from "../assets/text.webp";
import plan from "../assets/plan.png";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";
import bulk from "../assets/mobile2.png";
import emaill from "../assets/emaill.png";
import voicee from "../assets/voicee.png";
import websitee from "../assets/websitee.png";
import businesss from "../assets/businesss.png";
import whatsappp from "../assets/whatsappp.png";
import videoo from "../assets/videoo.png";
import sociall from "../assets/sociall.png";
import seo from "../assets/seo.png";
import qrcode from "../assets/qrcode.png";

const Index = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-3 text-center">
            <img
              src={star5}
              className="img-fluid"
              style={{ height: "60px", width: "40%" }}
            />
            <p style={{ fontSize: "15px" }}>
              {" "}
              highly recommended,You exceeded our expectations.
            </p>
          </div>
          <div className="col-sm-3 text-center">
            <img
              src={star5}
              className="img-fluid"
              style={{ height: "60px", width: "40%" }}
            />
            <p style={{ fontSize: "15px" }}>
              The services and support provided are highly professional.{" "}
            </p>
          </div>
          <div className="col-sm-3 text-center">
            <img
              src={star5}
              className="img-fluid"
              style={{ height: "60px", width: "40%" }}
            />
            <p style={{ fontSize: "15px" }}>
              Best teams I’ve ever worked with great experience.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <h1
          className="text-center"
          style={{ color: "#023368", fontSize: "50px" }}
        >
          <b>
            {" "}
            INDIA’S NO. 1 BULK SMS <br /> PLATFORM
          </b>
        </h1>
      </div>
      <div className="container">
        <img src={New} className="img-fluid mt-2" />
      </div>
      <div className="container-fluid mb-5">
        <center>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4 mt-3">
              <ul>
                <h6 style={{ fontSize: "18px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-2 p-1"
                      style={{ color: "#023368" }}
                    ></i>
                  </span>
                  No Technical Skills Required
                </h6>
                <h6 style={{ fontSize: "17px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-2 p-1"
                      style={{ color: "#023368" }}
                    ></i>
                  </span>
                  Intuitive Platform for All Users{" "}
                </h6>
                <h6 style={{ fontSize: "17px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-2 p-1"
                      style={{ color: "#023368" }}
                    ></i>
                  </span>
                  Secure and Reliable Structure{" "}
                </h6>
              </ul>
            </div>
            <div className="col-sm-4 mt-3">
              <ul>
                <h6 style={{ fontSize: "18px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-1  p-1"
                      style={{ color: "#023368" }}
                    ></i>
                  </span>
                  Advanced tool Features to Scale{" "}
                </h6>
                <h6 style={{ fontSize: "17px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-2 p-1"
                      style={{ color: "#023368" }}
                    ></i>
                  </span>
                  High Customer Satisfaction at 98%{" "}
                </h6>
                <h6 style={{ fontSize: "17px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-2 p-1"
                      style={{ color: "#023368" }}
                    ></i>
                  </span>
                  Supports 2 Factor Account Access{" "}
                </h6>
              </ul>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <a href="services">
            {" "}
            <button
              type="button"
              class="btn btn-primary btn-lg mt-3 mb-3 btn p-2"
            >
              Know More About Us
            </button>
          </a>
          <div className="row mt-2 mb-5">
            <div className="col-sm-3"></div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>{" "}
                </span>
                Trusted 7,000+ Brands{" "}
              </p>
            </div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>{" "}
                </span>
                Serving from 16+ Year{" "}
              </p>
            </div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>
                </span>
                Over 15000+ Customer{" "}
              </p>
            </div>
          </div>
        </center>
      </div>

      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#142e91", marginTop: "40px" }}
      >
        <div className="row mt-5 hidn">
          <div className="col-sm-2"></div>
          <div className="col-sm-2 p-1 mx-3 block">
            <p className="text-center mt-2">
              <img
                src={check}
                className="img-fluid mt-1"
                style={{ height: "40px", width: "40px", marginRight: "20px" }}
              />
              Trusted 7,000+ Brands{" "}
            </p>
          </div>

          <div className="col-sm-2 p-1 mx-3   block">
            <p className="text-center mt-2">
              <img
                src={text}
                className="img-fluid mt-1"
                style={{ height: "40px", width: "40px", marginRight: "20px" }}
              />
              Serving from 16+ Year
            </p>
          </div>

          <div className="col-sm-2  p-1 mx-3 block">
            <p className="text-center mt-2">
              <img
                src={player}
                className="img-fluid mt-1"
                style={{ height: "40px", width: "40px", marginRight: "20px" }}
              />
              Over 15000+ Customer
            </p>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="container mt-5 mb-5" style={{ width: "60%" }}>
          <center>
            <p className="text-light mt-3">
              Great company to do business. We have worked with him on numerous
              projects-Bulk SMS,{" "}
            </p>
            <p className="text-light mt-1">
              Digital Marketing, Whatsapp Promotions, etc. They don’t just do
              what they’re told to do; they{" "}
            </p>
            <p className="text-light mt-1">
              {" "}
              really think about the product, code, and solution.Totally
              satisfied with the services{" "}
            </p>
            <p className="text-light mt-1 mb-5">
              they provide.Highly recommended.
            </p>
            <h2 className="text-light mb-5">Airtel Broadband</h2>
          </center>
        </div>
      </div>
      <div className="container-fluid text-center mb-5" >
      <div className="container">
      <Swiperr />
      </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#f8fcff" }}>
        <div className="container mt-5 mb-5 text-center">
          <h2 className="mt-5">
            <b> GROW YOUR BUSINESS💪 All you Needs is!</b>
          </h2>
          <p className="mt-3" style={{width:"70%"}}>
            OM Enterproises Group is helping to grow your business under one
            roof by addresses all
            your sales and marketing needs, saving you the hassle of using
            multiple applications. With us, you can take care of all your
            business needs in one place.
          </p>
          <div class="row row-cols-1 row-cols-md-5 mt-3 mb-5 g-4">
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={bulk}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h5 class="card-title">Bulk SMS</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={voicee}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">Voice SMS</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={emaill}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">Bulk Email</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={whatsappp}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">WhatsApp SMS</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={videoo}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">Videography</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 mt-4">
                <center>
                  <img
                    src={sociall}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">Social Media</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 mt-4">
                <center>
                  <img
                    src={qrcode}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">QR Code</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 mt-4">
                <center>
                  <img
                    src={websitee}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">Web Development</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 mt-4">
                <center>
                  <img
                    src={businesss}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title"> Business Account</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 mt-4">
                <center>
                  <img
                    src={seo}
                    class="card-img-top mt-4"
                    style={{ height: "70px", width: "70px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">SEO</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
          <a href="services">
            {" "}
            <button
              type="button"
              class="btn btn-primary btn-lg mb-3 btn p-2"
            >
              Know More About Us
            </button>
          </a>
          </div>
        <div className="container-fluid">
        <div className="row mt-2 mb-5">
          <div className="col-sm-3"></div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>{" "}
                </span>
                Trusted 7,000+ Brands{" "}
              </p>
            </div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>{" "}
                </span>
                Serving from 16+ Year{" "}
              </p>
            </div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>
                </span>
                Over 15000+ Customer{" "}
              </p>
            </div>
          </div>
        </div>
      
    
      
        
    
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2 className="text-center" style={{ padding: "1%" }}>
            <b>
              🤩 A Single Spend for Endless Possibilities with Om Enterprises{" "}
            </b>
          </h2>
          <center>
            <h6 className=" mb-5" style={{ width: "60%" }}>
              Yes, that's correct! Get Om Enterprises plan and you will have
              access to all applications without any feature
              restrictions.
            </h6>
            <img src={compare} className="img-fluid imag" />
            <a href="services">
              {" "}
              <button
                type="button"
                class="btn btn-primary btn-lg mt-5 mb-3 btn p-2"
              >
                Know More About Us
              </button>
            </a>
            <div className="row mt-2 mb-5">
              <div className="col-sm-3"></div>
              <div className="col-sm-2">
                <p style={{ fontSize: "14px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-1 p-1"
                      style={{ color: "#318e5b" }}
                    ></i>{" "}
                  </span>
                  Trusted 7,000+ Brands{" "}
                </p>
              </div>
              <div className="col-sm-2">
                <p style={{ fontSize: "14px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-1 p-1"
                      style={{ color: "#318e5b" }}
                    ></i>{" "}
                  </span>
                  Serving from 16+ Year{" "}
                </p>
              </div>
              <div className="col-sm-2">
                <p style={{ fontSize: "14px" }}>
                  <span>
                    <i
                      class="fa-solid fa-check mx-1 p-1"
                      style={{ color: "#318e5b" }}
                    ></i>
                  </span>
                  Over 15000+ Customer{" "}
                </p>
              </div>
            </div>
          </center>
        </div>
      </div>

      <div className="container-fluid " style={{ backgroundColor: "#f8fcff" }}>
        <h1 className="text-center" style={{ padding: "1%" }}>
          👨‍💻 <b>Money Flow Matrix</b>
        </h1>
        <h6 className="text-center">
          The Most Powerful Business Suite with No Feature Restriction....
          Without the High Costs 👍
        </h6>
        <center>
          <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
              <div class="col">
                <div class="card h-100">
                  <center>
                    <p className="mt-3">STANDARD</p>
                    <img
                      src={plan}
                      class="card-img-top"
                      className="img-fluid mt-1 mb-1"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </center>
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>PACKAGE 1</b>
                    </h4>
                    <strike>
                      {" "}
                      <p>normally @ ₹ 74,000</p>
                    </strike>
                    <h2>
                      <b>₹ 47,999/-</b>
                      <span>
                        <h6>/month</h6>
                      </span>
                    </h2>
                    <button
                      type="button"
                      class="btn btn-primary mb-2 mt-3"
                      style={{ width: "90%", height: "45px" }}
                    >
                      BUY NOW
                    </button>
                    <hr />
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={c1} className="img-fluid" />
                      </div>
                      <div className="col-sm-10">
                        <p style={{ fontSize: "15px" }}>
                          Bulk SMS @ 1000 / Daily ₹12,000 Monthly
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c2} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            WhatsApp SMS @ 1000/Daily ₹12,000
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c4} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Social Media 10 Posts,10 Reels ₹50,000
                          </p>
                        </div>
                      </div>
                      <strike>
                        <div className="row">
                          <div className="col-sm-2">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              SEO @ 15 keywords/month ₹35,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Website Analytical Scanning @ 2times /week ₹35,000
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Google Business Management 30 Posts/month ₹47,999
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              QR Codes for all platforms one time provider
                              ₹25,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Videography 4 visits in 9 months ₹40,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Ad Budget included ₹20,000
                            </p>
                          </div>
                        </div>
                        <div className="row mb-5">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              A.P.I integration of SMS to company
                              platforms/software ₹10,000
                            </p>
                          </div>
                        </div>
                      </strike>

                      <strike>
                        {" "}
                        <p className="mt-5 text-dark">Total Price 74,000/-</p>
                      </strike>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹47,999 / month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <center>
                    <p className="mt-3">PRO</p>
                    <img
                      src={plan}
                      class="card-img-top"
                      className="img-fluid mt-1 mb-1"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </center>
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>PACKAGE 2</b>
                    </h4>
                    <strike>
                      <p>normally @ ₹ 1,25,000</p>
                    </strike>
                    <h2>
                      <b>₹ 65,999/-</b>
                      <span>
                        <h6>/month + G.S.T</h6>
                      </span>
                    </h2>
                    <button
                      type="button"
                      class="btn btn-primary mb-2 mt-3"
                      style={{ width: "90%", height: "45px" }}
                    >
                      BUY NOW
                    </button>
                    <hr />
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={c1} className="img-fluid" />
                      </div>
                      <div className="col-sm-10">
                        <p style={{ fontSize: "15px" }}>
                          Bulk SMS @ 2000 / Daily ₹15,000 monthly
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c2} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            WhatsApp SMS @ 2000/Daily ₹15,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c3} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Voice SMS @ 2000/Daily ₹30,000
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c4} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Social Media 15 Posts,15 Reels ₹65,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            SEO @ 15 keywords/month ₹35,000
                          </p>
                        </div>
                      </div>
                      <strike>
                        <div className="row">
                          <div className="col-sm-2">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Website Analytical Scanning @ 2times /week ₹35,000
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Google Business Management 30 Posts/month ₹47,999
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              QR Codes for all platforms one time provider
                              ₹25,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Videography 4 visits in 9 months ₹40,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Ad Budget included ₹20,000
                            </p>
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col-sm-2 ">
                            <img src={c5} className="img-fluid" />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              A.P.I integration of SMS to company
                              platforms/software ₹10,000
                            </p>
                          </div>
                        </div>
                      </strike>
                      <strike>
                        {" "}
                        <p className="mt-4 text-dark">Total Price 1,25,000/-</p>
                      </strike>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹65,999 / month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <center>
                    <p className="mt-3">ULTIMATE</p>
                    <img
                      src={plan}
                      class="card-img-top"
                      className="img-fluid mt-1 mb-1"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </center>
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>PACKAGE 3</b>
                    </h4>
                    <strike>
                      <p>normally @ ₹ 366,998</p>
                    </strike>
                    <h2>
                      <b>₹ 1,99,999</b>
                      <span>
                        <h6>/month + TAX 18%</h6>
                      </span>
                    </h2>
                    <button
                      type="button"
                      class="btn btn-primary mb-2 mt-3"
                      style={{ width: "90%", height: "45px" }}
                    >
                      BUY NOW
                    </button>
                    <hr />

                    <div className="row">
                      <div className="col-sm-2">
                        <img src={c1} className="img-fluid" />
                      </div>

                      <div className="col-sm-10">
                        <p style={{ fontSize: "15px" }}>
                          Bulk SMS @ 5000/Daily ₹30,000 monthly
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c2} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            WhatsApp SMS @ 5000/Daily ₹30,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c3} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Bulk Emails @ 5000/Daily ₹25,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c4} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Social Media 30 Posts,15 Reels ₹47,999
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            SEO @ 15 keywords/month ₹35,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Website Analytical Scanning @ 2times /week ₹35,000
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Google Business Management 30 Posts/month ₹47,999
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            QR Codes for all platforms one time provider ₹25,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Videography 4 visits in 9 months ₹40,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Ad Budget included ₹20,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            A.P.I integration of SMS to company
                            platforms/software ₹10,000
                          </p>
                        </div>
                      </div>
                      <strike>
                        {" "}
                        <p className="mt-4 text-dark">Total Price 3,66,998/-</p>
                      </strike>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹1,99,999 / month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h4 className="mt-5">
              😍<b>EXTRA BONUS OFFERS</b>
            </h4>
            <p className="mt-2 text-dark">
              12 Months together -- <b> 15% Extra Off</b>
            </p>
            <p className="mt-1 text-dark">
              6 Months together -- <b>5% Extra Off</b>
            </p>
            <p className="mt-1 mb-5 text-dark">
              3 Months together -- <b>No Extra Off</b>
            </p>
          </div>
          <div className="row">
            <h4 className="">
              All Govt. registration has to be beared by the user
            </h4>
            <p className="mt-1 mb-5 text-dark">
              <b>DLT Cost -- 5000 + 18% -- 5900/-</b>
            </p>
          </div>
        </center>
      </div>

      <div className="container-fluid text-center mt-5 mb-5">
      <div className="container">
        <Feed />
      </div>
      <a href="services">
            {" "}
            <button
              type="button"
              class="btn btn-dark btn-lg  mb-3 btn p-2"
            >
              Know More About Us
            </button>
          </a>
          <div className="row mt-2 mb-5">
            <div className="col-sm-3"></div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>{" "}
                </span>
                Trusted 7,000+ Brands{" "}
              </p>
            </div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>{" "}
                </span>
                Serving from 16+ Year{" "}
              </p>
            </div>
            <div className="col-sm-2">
              <p style={{ fontSize: "14px" }}>
                <span>
                  <i
                    class="fa-solid fa-check mx-1 p-1"
                    style={{ color: "#318e5b" }}
                  ></i>
                </span>
                Over 15000+ Customer{" "}
              </p>
            </div>
          </div>
      </div>

      <div className="container-fluid text-center mt-5 mb-5" style={{backgroundColor:"#f8fcff"}}>
        <div className="container">
        <Accordion />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;
