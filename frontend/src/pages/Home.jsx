import { useState } from "react";
import "../App.css";

import Card from "../components/UI/Card";
import whatsapp from "../assets/images/chat1.svg";
import email from "../assets/images/emailnew.png";
import sms from "../assets/images/bulk.png";
import voice from "../assets/images/voicenew.png";
import website from "../assets/images/website2.jpg";
import software from "../assets/images/bulb.png";
import social from "../assets/images/social3.png";
import digital from "../assets/images/chat2.svg";
// import business from "../assets/business3.avif";
// import user from "../assets/business2.jpg";
// import reseller from "../assets/user1.avif";
import read from "../assets/images/read.png";
import clock1 from "../assets/images/clock1.png";
import chat from "../assets/images/sms.png";
import file from "../assets/images/files.png";
import sales1 from "../assets/images/sales1.svg";
import sales2 from "../assets/images/sales2.svg";
import sales3 from "../assets/images/sales3.svg";
import star from "../assets/images/star.png";
import delivery from "../assets/images/delivery.png";
import chat2 from "../assets/images/chat2.png";
import verified from "../assets/images/verified.png";
import pricetag from "../assets/images/price.png";
import sender from "../assets/images/sender1.png";
// import drip from "../assets/drip.png";
// import lead from "../assets/lead.png";
// import generation from "../assets/generation.png";
// import url from "../assets/url.png";

import win from "../assets/images/win.png";
import search from "../assets/images/search.png";
import goal from "../assets/images/goal.png";
import desktop from "../assets/images/desktop.png";
import profile from "../assets/images/profile.png";

// import DropdownMenu from "../components/UI/DropdownMenu";
import Nav from "../components/Nav";
import Button from "../components/UI/Button";
// import Swiperr from "../components/Swiperr";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ic1 from "../assets/images/ic1.png";
import ic2 from "../assets/images/ic2.png";
import ic3 from "../assets/images/ic3.png";
import ic4 from "../assets/images/ic4.png";
import ic5 from "../assets/images/ic5.png";
import ic6 from "../assets/images/ic6.png";
import ic7 from "../assets/images/ic7.png";
import ic8 from "../assets/images/ic8.png";
import Accordion from "../components/Accordion";
import { CiLink } from "react-icons/ci";
import { MdSms, MdLeaderboard } from "react-icons/md";
import { FaReply } from "react-icons/fa";


// import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
     
      <Slider />

      <div className="container-fluid text-center">
        <div className="container">
          <h1
            className="mt-5 mb-2 text-center"
            style={{  color: "#023368" }}
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
                  <p class="card-text mt-3" style={{ fontSize: "22px" }}>
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
                  <p class="card-text mt-3" style={{ fontSize: "22px" }}>
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
                  <p class="card-text mt-3" style={{ fontSize: "22px" }}>
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
                  <p class="card-text mt-3" style={{ fontSize: "22px" }}>
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

      <div
        className="container-fluid mt-5 mb-5"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container text-center mt-5 mb-5">
          <h1
            className="text-center mb-5 text-light mt-5"
          
          >
            Effective Digital Marketing Strategy
          </h1>
          <div className="row">
            <div className="col-sm-2 zoom-in-out round mt-4 mb-5">
              <img src={search} className="img-fluid clogo" />
              <h4 className=" roundtext">RESEARCH</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5">
              <img src={desktop} className="img-fluid clogo" />
              <h4 className=" roundtext"> BUSINESS</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5">
              <img src={profile} className="img-fluid clogo" />
              <h4 className=" roundtext">BUILD</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5 ">
              <img src={win} className="img-fluid clogo" />
              <h4 className=" roundtext">IMPLEMENT</h4>
            </div>

            <div className="col-sm-2 zoom-in-out round mt-4 mb-5">
              <img src={goal} className="img-fluid clogo" />
              <h4 className=" roundtext">RESULT</h4>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
     
          backgroundColor: "white",
          color: "#023368",
        }}
      >
        <div className="row">
          <h1
            className="text-center mt-5 mb-3"
           
          >
            OUR CAMPAIGN MANAGEMENT
          </h1>
          <div className="col-sm-3  mb-5  text-center bodr">
            {/* <img
              src={url}
              className="img-fluid mt-5"
              style={{ height: "80px" }}
            /> */}
            <span style={{ fontSize: "3em" }}>
              <CiLink />
            </span>
            <h4>SHORT URL</h4>
            <p className="mt-3">
              We provide Unique and tiny URL for your every recipient. Track
              your audience with our easy tracking solutions.
            </p>
          </div>
          <div className="col-sm-3 text-center bodr  mb-5">
            {/* <img
              src={generation}
              className="img-fluid mt-5"
              style={{ height: "80px" }}
            /> */}
            <span style={{ fontSize: "3em" }}>
              <MdSms />
            </span>
            <h4>DRIP SMS MARKETING</h4>
            <p className="mt-3">
              Set up a series of messages in advance and send them to your
              prospects or customers according to you.
            </p>
          </div>
          <div className="col-sm-3  mb-5 text-center bodr">
            {/* <img
              src={drip}
              className="img-fluid mt-5"
              style={{ height: "80px" }}
            /> */}
            <span style={{ fontSize: "3em" }}>
              <FaReply />
            </span>
            <h4>AUTO REPLY</h4>
            <p className="mt-3">
              Stay connected to target audience to determine their requirements
              and decide your marketing <br />
              strategy .
            </p>
          </div>
          <div className="col-sm-3 text-center bodr">
            {/* <img
              src={lead}
              className="img-fluid mt-5"
              style={{ height: "80px" }}
            /> */}
            <span style={{ fontSize: "3em" }}>
              <MdLeaderboard />
            </span>
            <h4>LEAD GENERATION</h4>
            <p className="mt-3 ">
              We provide you better solutions to track your tiny URL and convert
              prospect into interested
              <br /> clients.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-5 mb-5"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container-fluid mb-4">
          <div className="container mb-4">
            <h1
              className="text-center mt-3 mb-3 text-light"
              
            >
              Our services
            </h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-5">
              <Card img={sms} title={"Bulk Messages"}>
                Sending of a large number of Bulk messages to multiple
                recipients.
                <hr />
                <a href="bulksms">
                  <Button />
                </a>
              </Card>
              <Card
                img={whatsapp}
                className="img-fluid"
                title={"Whatsapp Messages"}
              >
                Send large number of WhatsApp messages to multiple recipients.
                <hr />
                <a href="whatsapp">
                  <Button />
                </a>
              </Card>
              <Card img={email} title={"Bulk Emails"}>
                Send a large number of Bulk emails to a group of people or
                recipients.
                <hr />
                <a href="bulkemail">
                  {" "}
                  <Button />
                </a>
              </Card>
              <Card img={voice} title={"Voice SMS"}>
                Service given to individuals or businesses to send pre-recorded
                voice messages.
                <hr />
                <a href="voicesms">
                  {" "}
                  <Button />
                </a>
              </Card>
              <Card img={website} title={"Website Development"}>
                Developing a simple single static page of plain text to complex
                web applications.
                <hr />
                <a href="website">
                  <Button />
                </a>
              </Card>

              <Card img={social} title={"Socialmedia Management"}>
                Strategies to maintain and grow a social presence, on top of
                administrative.
                <hr />
                <a href="socialmedia">
                  {" "}
                  <Button />
                </a>
              </Card>

              <Card
                img={digital}
                title={"Digital Marketing"}
                style={{ height: "160px", width: "75%" }}
              >
                defining software solutions to one or more sets of problems.
                <hr />
                <a href="digitalmarketing">
                  {" "}
                  <Button />
                </a>
              </Card>
              <Card
                img={software}
                title={"Software Development"}
                style={{ height: "160px", width: "75%" }}
              >
                defining software solutions to one or more sets of problems.
                <hr />
                <a href="software">
                  {" "}
                  <Button />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mb-5 mt-5"
        style={{ backgroundColor: "", padding: "1%" }}
      >
        <h1
          className="text-center mt-5"
       
        >
          Enhance Your Customers Journey
        </h1>
        <div className="row mt-5 mb-5">
          <div className="col-sm-3 mx-auto mb-5">
            <Card img={sales1} title={"Marketing & Sales"}>
              Drive higher conversions , boost CSATs and reduce customer churn
              with personalised content
            </Card>
          </div>
          <div className="col-sm-3 mx-auto mb-5">
            <Card img={sales2} title={"Customer Care"}>
              Automate your customer care, handle all inbound queries with a
              self-service chatbots
            </Card>
          </div>
          <div className="col-sm-3 mx-auto mb-5">
            <Card img={sales3} title={"Customer Engagement"}>
              Build deeper engagement with your customers on any channels of
              their choice and improve CX
            </Card>
          </div>
        </div>
      </div>

      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container">
          <h1
            className="mt-5 mb-2 text-center text-light"
          
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

      <div className="container-fluid text-center">
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

      <div className="container-fluid text-center mt-5 mb-5">
        <Accordion />
      </div>
      <div
        className="container text-center mt-5 mb-5"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container">
          <h1
            className="mt-5 mb-2 text-center"
            style={{ color: "white" }}
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
}

export default App;
