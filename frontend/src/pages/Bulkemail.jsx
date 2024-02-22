import React from "react";
import "../pages/bulk.css";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";

import "../App.css";
import email from "../assets/emailnew1.png";
import Footer from "../components/Footer";
import gmail from "../assets/gmail.png";
import clock from "../assets/clock1.png";
import upload from "../assets/upload.png";
import sms from "../assets/sms.png";

const Bulkemail = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="container-fluid back">
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}
        >
          <div className="row" style={{ fontSize: "18px", color: "black" }}>
            <div className="col-sm-6 mt-5 ">
              <h1
                className="mt-5"
                style={{ fontSize: "100px", marginLeft: "-100px" }}
              >
                BULK
              </h1>

              <h1
                className="mb-5"
                style={{ fontSize: "100px", marginLeft: "50px" }}
              >
                EMAIL
              </h1>

              <h2 className="mx-5" style={{ color: "grey" }}>
                {" "}
                Top Bulk Email Provider
              </h2>
            </div>

            <div className="col-sm-6">
              <img
                src={email}
                className="img-fluid"
                
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1
            className="text-center mt-5"
            style={{ fontFamily: "Poppins', sans-serif" }}
          >
            Powerful Web Panel & Functions
          </h1>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={sms}
              className="img-fluid mt-5"
              style={{ height: "50px", width: "50px" }}
            />
            <h4 className="mt-2">Email Template</h4>
            <p className="mt-2">
              Email Template Advancement of technology is a reality of this
              ultra modern world and thus its outcome does not seem an unreal
              too.
            </p>
          </div>

          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={clock}
              className="img-fluid mt-5"
              style={{ height: "50px", width: "50px" }}
            />
            <h4 className="mt-2">Schedule Email</h4>
            <p className="mt-2">
              No Matter what you doing right now, just schedule your sms
              according to your preferable time, SMS auto blast according to
              schedule time.
            </p>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={upload}
              className="img-fluid mt-5"
              style={{ height: "50px", width: "50px" }}
            />
            <h4 className="mt-2">Easily Upload Images</h4>
            <p className="mt-2">
              The auto shwicher functions manage SMPP from backend, when any
              SMPP have heavy load/Down then its auto shwitch to another.
            </p>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={gmail}
              className="img-fluid mt-5"
              style={{ height: "50px", width: "50px" }}
            />
            <h4 className="mt-2">Email Personalization</h4>
            <p className="mt-2">
              Email Personalization That Days gone when reseller was appoint
              A-Record. Now you can direct login from your website, No need to
              appoint A-Record.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center bg-light">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h2 className="mt-5">WE PROVIDE BEST BULK EMAIL SERVICE</h2>
            <p
              className="mt-3"
              style={{
                fontFamily: "Poppins', sans-serif",
                fontSize: "20px",
                color: "black",
              }}
            >
              A bulk email is a marketing message sent by a brand to multiple
              recipients at once. It aims to promote a business, sell goods, and
              develop relationships. Sending thousands or tens of thousands of
              messages to even just a couple of email addresses would be
              draining due to the amount of time and effort required. Moreover,
              the cost of running such a campaign would not be sustainable for
              any business. Using a bulk email service is cheaper, faster, and
              much more convenient.Consult For Best Bulk Email Service Provider
              in india & Leading Bulk Email Service Provider in india.
            </p>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>

      <div className="container-fluid  bg-light">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-5 mt-5">
            <h2 className="mx-3">
              Bulk Email Marketing Software/ <br />
              Application Features:
            </h2>
            <br />
            <ol>
              <li>SPAM FREE Emails, 90% Inbox Delivery</li>
              <li>Easily create Newsletters</li>
              <li> Manage Group/Lists</li>
              <li>Manage Email IDs</li>
              <li>Sender Name – Unlimited (FREE)</li>
              <li> Reply email: End User set reply email at their end.</li>
              <li>View Sent Report by Date Search</li>
              <li>
                {" "}
                Viewer Report: In this section, we can track, how many users
                view promotional emails.
              </li>
              <li>With incoming IP address details.</li>
              <li>
                {" "}
                Email Id Database also available (All over INDIA) –
                Complimentary Available
              </li>
              <li>Validity – Unlimited </li>
              <li>
                Bulk Email Software : FREE (You have to only purchase credits of
                email)
              </li>
            </ol>
          </div>
          <div className="col-sm-5 mt-5">
            <h2 className="mx-3">
              Email Marketing Service <br /> Advantages:
            </h2>
            <br />
            <ol>
              <li>
                {" "}
                Web based mass email sending setup that you can use from
                anywhere
              </li>
              <li>
                Assistance to create and manage lists, bounced mail and also
                track responses
              </li>
              <li>
                {" "}
                Creation of personalized newsletters, mailers and promotional
                material with the right, target specific content for permission
                based mass campaigns
              </li>
              <li>
                {" "}
                Creating lists in various categories, tracking and monitoring
              </li>
              <li>
                {" "}
                Creating innovative ideas for engagement of target customers
              </li>
              <li>
                {" "}
                Technological superiority edge, proven expertise, guaranteed
                results and maximized ROIs
              </li>
              <li>Reporting and analytics</li>
              <li>
                {" "}
                Affordable packages, monthly pay as you go schemes and more
              </li>
            </ol>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Bulkemail;
