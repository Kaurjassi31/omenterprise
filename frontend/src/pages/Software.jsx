import React from "react";
import "../assets/css/services.css";
import "animate.css";
import Nav from "../components/Nav";
import msg from "../assets/images/software.jpg";
import Footer from "../components/Footer";
import websitee from "../assets/images/w1.jpg";

const Software = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div
          className="container text-center"
          style={{
            padding: "1%",
          }}
        >
          <div className="row">
            <h1 className="mt-3"> SOFTWARE DEVELOPMENT</h1>
            <center>
              <img
                src={msg}
                className="img-fluid mt-5"
                style={{ height: "450px", width: "70%" }}
              />
            </center>
          </div>
        </div>
        <center>
          <p style={{ width: "70%" }}>
            At Om Enterprises Group, we specialize in delivering high-quality,
            custom software solutions tailored to meet the unique needs of your
            business. Our team of experienced developers, designers, and project
            managers work collaboratively to bring your ideas to life and help
            your business thrive in the digital landscape.
          </p>
        </center>
      </div>
      <div className="container-fluid">
        <h1 className="text-center mt-5">
          Why Choose Us
          <img
            src={websitee}
            className="img-fluid mx-3"
            style={{ height: "80px", width: "80px" }}
          />{" "}
        </h1>
        <div className="container">
          <div class="row row-cols-1 row-cols-md-4 mt-3 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Expertise: </h4>
                  <p class="card-text">
                    Our team consists of seasoned professionals with years of
                    experience in software development across various
                    industries.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Collaborative Approach:</h4>
                  <p class="card-text">
                    We believe in working closely with our clients throughout
                    the development process to ensure we'redelivering exactly
                    what you need.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Innovation:</h4>
                  <p class="card-text">
                    We stay ahead of the curve by constantly exploring new
                    technologies and methodologies to improve our processes and
                    deliver solutions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Customer Satisfaction:</h4>
                  <p class="card-text">
                    Your satisfaction is our top priority. We strive to exceed
                    your expectations and build long-term partnerships based on
                    trust and mutual success.
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

export default Software;
