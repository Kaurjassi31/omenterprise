import React from "react";
import Nav from "../components/Nav";
import Bulk4 from "../assets/blog.png";
import rate from "../assets/rate.png";
import money from "../assets/money.png";
import global from "../assets/global.png";
import Footer from "../components/Footer";
const Blog = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mb-5">
        <h1 className="mt-3 text-center">
          Best Bulk SMS Service Provider In Jalandhar
        </h1>
        <div
          className="container text-center"
          style={{
            padding: "1%",
          }}
        >
          <div className="row">
            <img
              src={Bulk4}
              className="img-fluid"
              style={{ height: "400px" }}
            />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h6>
          Welcome to Om Enterprises Group. We are a leading company all over
          India in the field of A2P Bulk SMS services and WhatsApp Bulk message
          service & AI-based A2P Bulk SMS. We are the Best Bulk SMS Provider in
          Jalandhar. Our promotional and transactional bulk SMS service is
          hassle-free and the best & No. 1 in the entire market. Bulk SMS
          involves using specialized AI or UI software that allows users to
          compose, schedule, and send messages to multiple people at a single
          click where an organisation can even send the SMS in 27 vernacular
          languages. A2P Bulk SMS is used to send text messages and enhance
          engagement with the user and their respective clients. We produce
          several services like bulk email, digital marketing, web development,
          social media optimization, voice SMS, WhatsApp bulk SMS, verified
          WhatsApp solutions, etc. We have created results for more than 11000
          customers successfully in the last 2.5 decades. Hence we are The No.1
          SMS provider in Jalandhar, Punjab, India.
        </h6>
        </div>
        <div className="container-fluid mt-5 mb-5"  style={{backgroundColor:"#f8fcff"}}>
        <div className="container text-center  ">
        <h2 className="mt-4">BENEFITS OF BULK SMS SERVICE</h2>
        <h6 className="mt-2">
          Bulk SMS services offer a cost-effective, and highly engaging way for
          businesses to communicate with their audience. We produce the best
          bulk SMS service provider in Jalandhar.
        </h6>
        <div class="row row-cols-1 row-cols-md-3 mt-3 mb-5 g-4">
          <div class="col">
            <div class="card">
              <center>
              <img
              src={rate}
              className="img-fluid mt-3"
              style={{ height: "50px", width: "50px" }}
            />   
              </center>
                      <div class="card-body">
                <h4 class="card-title">High open rates: </h4>
                <p class="card-text mb-3">
               
          Bulk SMS or  your businesse 
          messages are more likely to be read by several people leading to more
          people engaging towards your services.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
            <center>
              <img
              src={money}
              className="img-fluid mt-3"
              style={{ height: "50px", width: "50px" }}
            />   
              </center>            <div class="card-body">
                <h4 class="card-title">Cost-Effectiveness:</h4>
                <p class="card-text mb-3">
                We are providing affordable rates and
          packages for our customers. It allows businesses to reach a large
          number of recipients in a few second.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
            <center>
              <img
              src={global}
              className="img-fluid mt-3"
              style={{ height: "50px", width: "50px" }}
            />   
              </center>               <div class="card-body">
                <h4 class="card-title">Authentic Reach:</h4>
                <p class="card-text mb-3">
                With this service, Clients reach their
          specific and targeted audience on their mobile phones directly, with
          the availability of our service 24*7 .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <h6>
            <b>Here are some unique selling points of our product:</b>
          </h6>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li> 100% High reliability</li>
              <li> 30 Seconds promised delivery time</li>
              <li> 100 % real-time authentic reports </li>
              <li>100 % real error description</li>
              <li> Competitive pricing</li>
              <li> Free UI Interface without any charges</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Lifetime validity of SMS</li>
              <li> Multiple APIs provided</li>
              <li>Easily Integra table UI and UX</li>
              <li>Single-click delivery</li>
              <li>HTTP, SMPP, and XML Integrations provided</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <h6 className="mt-4 mb-5">
            For any required information contact us at <b>+91-9872144408</b>
          </h6>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
