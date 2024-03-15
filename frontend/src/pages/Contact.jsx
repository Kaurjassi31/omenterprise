import React from "react";
import "../components/Nav";
import Nav from "../components/Nav";
import contactus from "../assets/contactus.png";
import contact from "../assets/support2.png";
import "../pages/services.css";
import Footer from "../components/Footer";
import call from "../assets/call2.png";
import care from "../assets/care.png";
import query from "../assets/query.png";
import office from "../assets/office.png";
import "../pages/indexnew.css";
import ms from "../assets/marketing.png";
import Button from "../components/UI/Button";
const Contact = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mb-5">
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}
        >
          <div className="row" style={{ fontFamily: "Poppins', sans-serif" }}>
            <img
              src={contactus}
              className="img-fluid mt-5"
              style={{ height: "450px" }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid text-center mt-5 mb-5">
        <h1 style={{ fontFamily: "Poppins', sans-serif" }}>Om Enterprises</h1>
        <h5 className="mt-3">
          (Our support team is happy to assist you regarding any query)
        </h5>
        <center>
          <div className="square mt-5" style={{ backgroundColor: "" }}>
            <img src={contact} className="img-fluid" />
          </div>
        </center>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <center>
                <img
                  src={office}
                  class="card-img-top mt-3"
                  style={{ height: "60px", width: "60px" }}
                  alt="..."
                />
              </center>
              <div class="card-body">
                <h4 class="card-title">Head Office </h4>
                <h6 class="card-text">
                  770, Mota Singh Nagar , Near Bus <br /> Stand, Jalandhar
                  -144001{" "}
                </h6>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <center>
                <img
                  src={ms}
                  class="card-img-top mt-3"
                  style={{ height: "60px", width: "60px" }}
                  alt="..."
                />
              </center>
              <div class="card-body">
                <h4 class="card-title">For Marketing / Sales </h4>
                <h6 class="card-text">
                  Call Now
                  <br />
                  +91-9872144408
                </h6>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <center>
                <img
                  src={query}
                  class="card-img-top mt-3"
                  style={{ height: "60px", width: "60px" }}
                  alt="..."
                />
              </center>
              <div class="card-body">
                <h4 class="card-title">For All Queries</h4>
                <h6 class="card-text">
                  info@omenterprisesgroup.in,
                  <br />
                  hrhead@omenterprisesgroup.in
                </h6>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <center>
                <img
                  src={care}
                  class="card-img-top mt-3"
                  style={{ height: "60px", width: "60px" }}
                  alt="..."
                />
              </center>
              <div class="card-body">
                <h4 class="card-title">Support</h4>
                <h6 class="card-text">
                  Call Now
                  <br />
                  +91-1814603134
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#f8fcff" }}>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-5 mt-3">
            <img src={call} className="img-fluid" />
          </div>

          <div
            className="col-sm-4 mt-5 mb-5"
            style={{
              borderRadius: "12px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <form action="https://formspree.io/f/mvoealkr" method="POST">
              <h2 className="mt-3 text-center">CONTACT US</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label mt-4">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="phone"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  {" "}
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  {" "}
                  Your Message/Enquery/feedback
                </label>

                <textarea
                  name="message"
                  form="usrform"
                  style={{ width: "99%" }}
                ></textarea>
              </div>

              <center>
                <button
                  className=" btn btn-primary mt-4 mb-4"
                  style={{
                    backgroundColor: "#023368",
                  }}
                >
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-2 mb-2">
        {/* <div className="responsive-map"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27265.57006795245!2d75.56397823201634!3d31.325952605393123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b3b79997171%3A0x2a17d9f210b903a!2sOm%20Enterprises%20Group!5e0!3m2!1sen!2sin!4v1707371931685!5m2!1sen!2sin"
            width="100%"
            height="550"
            allowFullScreen=""
            Loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        {/* </div> */}
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;
