import React from "react";
import Nav from "../components/Nav";
import "../pages/indexnew.css";
import New from "../assets/new.gif";
import Swiperr from "../components/Swiperr";
import chat4 from "../assets/chat4.png";
import chat5 from "../assets/chat5.png";
import coding from "../assets/coding.png";
import voice from "../assets/Voice5.png";
import email4 from "../assets/email4.png";
import read from "../assets/read.png";
import clock1 from "../assets/clock1.png";
import chat from "../assets/sms.png";
import file from "../assets/files.png";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import delivery from "../assets/delivery.png";
import chat2 from "../assets/chat2.png";
import star from "../assets/star.png";
import verified from "../assets/verified.png";
import pricetag from "../assets/price.png";
import sender from "../assets/sender1.png";
import Feed from "../components/Feed";
import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import ic3 from "../assets/ic3.png";
import ic4 from "../assets/ic4.png";
import ic5 from "../assets/ic5.png";
import ic6 from "../assets/ic6.png";
import ic7 from "../assets/ic7.png";
import ic8 from "../assets/ic8.png";

import win from "../assets/win.png";
import search from "../assets/search.png";
import goal from "../assets/goal.png";
import desktop from "../assets/desktop.png";
import profile from "../assets/profile.png";
import Video from "../components/Video";
import money from "../assets/money.png";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";

const Index = () => {
  return (
    <>
      
      <Nav />
      
      <div className="container mt-5">
        <h1
          className="text-center"
          style={{ fontSize: "60px", color: "#023368" }}
        >
          INDIA’S NO. 1 BULK SMS <br /> PLATFORM
        </h1>
      </div>
      <div className="container">
        <img src={New} className="img-fluid" />
      </div>

      <Video />

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
              <h2 className="mx-3" style={{ color: "#023368" }}>GOLD</h2>
                <ul class="price-card--features--list"  style={{textDecoration:"none",listStyle:"none"}} >
                  <li  >
                    Life Time Validity
                  </li>
                  <li >
                    Instant Sender Id Approval
                  </li>
                  <li >
                    Send SMS Multi Language Support
                  </li>
                  <li >
                    Can send 24 x 7
                  </li>
                  <li >
                    With Instant delivery report
                  </li>
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
              <h2 className="mx-3" style={{ color: "#023368" }}>SILVER</h2>
                <ul class="price-card--features--list"  style={{textDecoration:"none",listStyle:"none"}} >
                  <li  >
                    Life Time Validity
                  </li>
                  <li >
                    Instant Sender Id Approval
                  </li>
                  <li >
                    Send SMS Multi Language Support
                  </li>
                  <li >
                    Can send 24 x 7
                  </li>
                  <li >
                    With Instant delivery report
                  </li>
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
              <h2 className="mx-3" style={{ color: "#023368" }}>BRONZE</h2>
                <ul class="price-card--features--list"  style={{textDecoration:"none",listStyle:"none"}} >
                  <li  >
                    Life Time Validity
                  </li>
                  <li >
                    Instant Sender Id Approval
                  </li>
                  <li >
                    Send SMS Multi Language Support
                  </li>
                  <li >
                    Can send 24 x 7
                  </li>
                  <li >
                    With Instant delivery report
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container text-center mt-5 mb-5"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container">
          <h1
            className="mt-5 mb-2 text-center"
            style={{ fontFamily: "Poppins', sans-serif", color: "white" }}
          >
            BULK SMS SERVICE PROVIDER INDIA | WHY SMS MARKETING?
          </h1>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5">
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={chat}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <p
                    class="card-text mt-3"
                    style={{ fontSize: "22px", color: "#023368" }}
                  >
                    UNPARALLED OPEN RATE
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    98%
                  </h1>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={file}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <p
                    class="card-text mt-3"
                    style={{ fontSize: "22px", color: "#023368" }}
                  >
                    HIGHEST CLICK <br />
                    RATE
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    20%
                  </h1>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={clock1}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <p
                    class="card-text mt-3"
                    style={{ fontSize: "22px", color: "#023368" }}
                  >
                    FASTEST RESPONSE TIME
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    90s
                  </h1>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-5">
                <center>
                  <img
                    src={read}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <p
                    class="card-text mt-3"
                    style={{ fontSize: "22px", color: "#023368" }}
                  >
                    EXTREME READ <br /> RATE
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    90%
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>

      <div className="container-fluid">
        <div className="container text-center">
          <h1 className="mt-3" style={{ color: "#023368" }}>
            Services We Provide
          </h1>
        </div>
        <div className="row mt-5 text-center" style={{ color: "#023368" }}>
          <div className="col-sm-1"></div>
          <div className="col-sm-2 mt-5">
            <a href="bulksms" style={{ textDecoration: "none" }}>
              <center>
                <img
                  src={chat4}
                  className="img-fluid"
                  style={{ height: "60px", width: "60px" }}
                />
              </center>
              <h4 className="mt-4">Bulk SMS</h4>
            </a>
          </div>
          <div className="col-sm-2 mt-5">
            <a href="voicesms" style={{ textDecoration: "none" }}>
              <center>
                <img
                  src={voice}
                  className="img-fluid"
                  style={{ height: "60px", width: "60px" }}
                />
              </center>
              <h4 className="mt-4">Voice SMS</h4>
            </a>
          </div>
          <div className="col-sm-2 mt-5">
            <a href="bulkemail" style={{ textDecoration: "none" }}>
              <center>
                <img
                  src={email4}
                  className="img-fluid"
                  style={{ height: "60px", width: "60px" }}
                />
              </center>
              <h4 className="mt-4">Bulk Email</h4>
            </a>
          </div>
          <div className="col-sm-2 mt-5">
            <a href="whatsapp" style={{ textDecoration: "none" }}>
              <center>
                <img
                  src={chat5}
                  className="img-fluid"
                  style={{ height: "60px", width: "60px" }}
                />
              </center>
              <h4 className="mt-4">WhatsApp Bulk</h4>
            </a>
          </div>
          <div className="col-sm-2 mt-5">
            <a href="website" style={{ textDecoration: "none" }}>
              <center>
                <img
                  src={coding}
                  className="img-fluid"
                  style={{ height: "60px", width: "60px" }}
                />
              </center>
              <h4 className="mt-4">Web Development</h4>
            </a>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <center>
          <a href="services">
            {" "}
            <button type="button" class="btn btn-primary btn-lg mt-5 btn">
              Click to know more
            </button>
          </a>
        </center>
      </div>

      <div
        className="container mt-5 mb-5"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container text-center mt-5 mb-5">
          <h1
            className="text-center mb-5 text-light mt-5"
            style={{ fontFamily: "Poppins', sans-serif" }}
          >
            Effective Digital Marketing Strategy
          </h1>
          <div className="row">
            <div className="col-sm-2 zoom-in-out round mt-4 mb-5 mx-auto">
              <img src={search} className="img-fluid clogo" />
              <h4 className=" roundtext">RESEARCH</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5 mx-auto">
              <img src={desktop} className="img-fluid clogo" />
              <h4 className=" roundtext"> BUSINESS</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5 mx-auto ">
              <img src={profile} className="img-fluid clogo" />
              <h4 className=" roundtext">BUILD</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5 mx-auto">
              <img src={win} className="img-fluid clogo" />
              <h4 className=" roundtext">IMPLEMENT</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5 mx-auto">
              <img src={goal} className="img-fluid clogo" />
              <h4 className=" roundtext">RESULT</h4>
            </div>
          </div>
        </div>
      </div>

      

      <div className="container">
        <Feed />
      </div>
      <Swiperr />

      <div className="container-fluid text-center mt-5 mb-5">
        <Accordion />
      </div>

      <div className="container-fluid text-center mb-5 mt-5">
        <h1 className="mt-5 mb-5">WHY CHOOSE US?</h1>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
            <img
              src={star}
              className="img-fluid mb-3"
              style={{ height: "80px" }}
            />
            <h4>High reliability</h4>
          </div>

          <div className="col-sm-3">
            <img
              src={delivery}
              className="img-fluid mb-3"
              style={{ height: "80px" }}
            />
            <h4> Quick Delivery</h4>
          </div>

          <div className="col-sm-3">
            <img
              src={chat2}
              className="img-fluid mb-3"
              style={{ height: "80px" }}
            />
            <h4>Life Time Validity of SMS</h4>
          </div>

          <div className="col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-3 mt-3 mb-3">
            <img
              src={pricetag}
              className="img-fluid mb-3"
              style={{ height: "80px" }}
            />
            <h4>Competitive Pricing</h4>
          </div>

          <div className="col-sm-3 mt-3 mb-3">
            <img
              src={sender}
              className="img-fluid mb-3"
              style={{ height: "80px" }}
            />
            <h4> Dynamic Sender ID</h4>
          </div>

          <div className="col-sm-3 mt-3 mb-3">
            <img
              src={verified}
              className="img-fluid mb-3"
              style={{ height: "80px" }}
            />
            <h4>No Interface Charges</h4>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </div>

      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container">
          <h1
            className="mt-5 mb-2 text-center text-light"
            style={{ fontFamily: "Poppins', sans-serif" }}
          >
            OUR AWESOME FEATURES
          </h1>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5">
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic1}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4">
                    <b>SMS Scheduling</b>
                  </h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    {" "}
                    No Matter what you doing right now, just schedule your sms
                    according to your preferable time, SMS auto blast according
                    to schedule time. Consult Best Bulk sms Service Provider in
                    india, Bulk email service provider in india.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic4}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4">API Support</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    We Provide Standard HTTP-API, who best for any ERP, Software
                    and online application, for using it you can sent sms from
                    your own apps.For More Detail Consult Best Bulk sms Service
                    Provider in india, Bulk email service provider in india
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic2}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4">Customized Sender </h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    it provides you with Own Sender ID. It comprises of 6 alpha
                    character for Transactional Message & 6 Numeric Character
                    for Promotional Message. For More Information Visit Best
                    Bulk sms Service Provider in india
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic6}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4">Language Application</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    You can send SMS in more than 15 languages by using our
                    transliteration application. In a single SMS you can use 70
                    unicode characters and style them in best possible way. So
                    Why Are You Waiting Contact Best Bulk sms Service
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic8}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4">Tracking and Reporting</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    You can pull timely reports from the server by using your
                    Account. Tracking of SMS is enabled for live reports and
                    Scheduled Reports.Best Bulk sms Service Provider in India
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic7}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4">Load BalanceSMPP</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    The auto shwicher functions manage SMPP from backend, when
                    any SMPP have heavy load/Down then its auto switch to
                    another one. Consult Best Bulk sms Service Provider in india
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic3}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4"> Clear Delivery Report</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    With this you can check individual sms report with live
                    status, DLR give you assurity that your sms delivered
                    according to TRAI Guidelines.Consult with the Best Bulk sms
                    Service Provider in india.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic5}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body" style={{ color: "#023368" }}>
                  <h4 class="card-title mt-4">10 Services in One Panel</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                    You can manage 10 services from one web panel likes: Promo
                    sms, Trans. SMS, Voice Call, MissCall, IVR and more..
                    Consult Best Bulk sms Service Provider in india, Bulk email
                    service provider in india
                  </p>
                </div>
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
