import React from "react";
import Nav from "../components/Nav";
import "../pages/indexnew.css";
import New from "../assets/new.gif";
import Swiperr from "../components/Swiperr";
import Footer from "../components/Footer";
import check from "../assets/check.webp";
import player from "../assets/player.webp";
import text from "../assets/text.webp";
import money from "../assets/money.png";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";

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
            <button type="button" class="btn btn-primary btn-lg mt-3 mb-3 btn">
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
      <Swiperr />

      <div className="container mt-5">
        <h1 style={{ color: "#023368" }}>
          <img
            src={money}
            className="img-fluid"
            style={{ height: "60px", width: "60px" }}
          />
          <span className="mx-5">MONEY FLOW MATRIX</span>
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-5">
          <div class="col text-center">
            <div class="card">
              <center>
                <img
                  src={gold}
                  className="img-fluid mt-4"
                  style={{ height: "60px", width: "60px" }}
                />
              </center>
              <div class="card-body">
                <h2 className="mx-3" style={{ color: "#023368" }}>
                  GOLD
                </h2>
                <ul
                  class="price-card--features--list"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>Life Time Validity</li>
                  <li>Instant Sender Id Approval</li>
                  <li>Send SMS Multi Language Support</li>
                  <li>Can send 24 x 7</li>
                  <li>With Instant delivery report</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col text-center">
            <div class="card">
              <center>
                <img
                  src={silver}
                  class="card-img-top mt-4"
                  style={{ height: "60px", width: "60px" }}
                  alt="..."
                />
              </center>

              <div class="card-body">
                <h2 className="mx-3" style={{ color: "#023368" }}>
                  SILVER
                </h2>
                <ul
                  class="price-card--features--list"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>Life Time Validity</li>
                  <li>Instant Sender Id Approval</li>
                  <li>Send SMS Multi Language Support</li>
                  <li>Can send 24 x 7</li>
                  <li>With Instant delivery report</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col text-center">
            <div class="card">
              <center>
                <img
                  src={bronze}
                  class="card-img-top mt-4"
                  style={{ height: "60px", width: "60px" }}
                  alt="..."
                />
              </center>

              <div class="card-body">
                <h2 className="mx-3" style={{ color: "#023368" }}>
                  BRONZE
                </h2>
                <ul
                  class="price-card--features--list"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  <li>Life Time Validity</li>
                  <li>Instant Sender Id Approval</li>
                  <li>Send SMS Multi Language Support</li>
                  <li>Can send 24 x 7</li>
                  <li>With Instant delivery report</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-5 mb-5"
        style={{ backgroundColor: "#f8fcff" }}
      >
        <h1 className="text-center mt-5" style={{ padding: "1%" }}>
          👨‍💻 <b>Pabbly Caters to All Your Business Needs!</b>
        </h1>
        <center>
          <p className=" mb-5" style={{ width: "70%" }}>
            Pabbly Plus is a comprehensive business management bundle that
            addresses all your sales and marketing needs, saving you the hassle
            of using multiple applications. With Pabbly Plus, you can take care
            of all your business needs in one place.
          </p>
        </center>

        <div className="container text-center">
          <div class="row row-cols-1 row-cols-md-5 g-1 mb-5">
            <div class="col">
              <div class="card bdr" style={{width:"90%"}}>
                <center>
                  <img
                    src={c1}
                    class="card-img-top mt-4"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title">
                      <b>
                        Pabbly <br />
                        Connect
                      </b>
                    </h6>

                    <p
                      class="card-text mt-3"
                      style={{ fontSize: "15px", width: "60%" }}
                    >
                      Effortlessly create automated workflows and seamlessly
                      transfer data between applications.
                    </p>
                    <button type="button" class="btn btn-outline-primary mb-2">
                      LEARN MORE
                    </button>
                  </div>
                </center>
              </div>
            </div>
            <div class="col">
              <div class="card bdr" style={{width:"90%"}}>
                <center>
                  <img
                    src={c2}
                    class="card-img-top mt-4"
                    alt="..."
                    style={{ height: "40px", width: "40px" }}
                  />
                  <div class="card-body">
                    <h6 class="card-title">
                      <b>
                        Pabbly <br /> Subscription Billing{" "}
                      </b>
                    </h6>

                    <p
                      class="card-text mt-3"
                      style={{ fontSize: "15px", width: "60%" }}
                    >
                      Recurring billing and subscription management solution
                      with the built-in affiliate management.
                    </p>
                    <button type="button" class="btn btn-outline-primary mb-2">
                      LEARN MORE
                    </button>
                  </div>
                </center>
              </div>
            </div>
            <div class="col">
              <div class="card bdr" style={{width:"90%"}}>
              <center>
                <img
                  src={c3}
                  class="card-img-top mt-4"
                  alt="..."
                  style={{ height: "40px", width: "40px" }}
                />
                <div class="card-body">
                  <h6 class="card-title">
                    <b>
                      Pabbly Email <br /> Marketing
                    </b>
                  </h6>
                    <p
                      class="card-text mt-3"
                      style={{ fontSize: "15px", width: "60%" }}
                    >
                      Experience a comprehensive email marketing solution that
                      simplifies sending emails.
                    </p>
                    <button type="button" class="btn btn-outline-primary mb-2">
                      LEARN MORE
                    </button>
                </div>
                </center>
              </div>
            </div>
            <div class="col">
              <div class="card bdr" style={{width:"90%"}}>
                <center>
                  <img
                    src={c4}
                    class="card-img-top mt-4"
                    alt="..."
                    style={{ height: "40px", width: "40px" }}
                  />
                  <div class="card-body">
                    <h6 class="card-title">
                      <b>
                        Pabbly Form
                        <br />
                        Builder
                      </b>
                    </h6>
 <p class="card-text mt-3" style={{ fontSize: "15px", width: "60%" }} >
                      Harness power online form builder to effortlessly
                      collect payments, leads, surveys and more.
                    </p>
                    <button type="button" class="btn btn-outline-primary mb-2">
                      LEARN MORE
                    </button>
                  </div>
                </center>
              </div>
            </div>
            <div class="col">
              <div class="card bdr" style={{width:"90%"}}>
                <center>
                  <img
                    src={c5}
                    class="card-img-top mt-4 "
                    alt="..."
                    style={{ height: "40px", width: "40px" }}
                  />
                  <div class="card-body">
                    <h6 class="card-title">
                      <b>
                        {" "}
                        Pabbly Email <br /> Verification{" "}
                      </b>{" "}
                    </h6>
                    <p
                      class="card-text"
                      style={{ fontSize: "15px", width: "60%" }}
                    >
                      Boost your delivery and open rates by verifying your email
                      list to remove invalid email addresses.
                    </p>
                    <button type="button" class="btn btn-outline-primary mt-1 mb-2">
                      LEARN MORE
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Footer />
    </>
  );
};

export default Index;
