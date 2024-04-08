import React from "react";
import Nav from "../components/Nav";
import "../assets/css/services.css";
import dm from "../assets/images/digital2.gif";
import digital from "../assets/images/digi.png";
import Footer from "../components/Footer";
import websitee from "../assets/images/websitee.png";
import sociall from "../assets/images/sociall.png";
import digitalnew from "../assets/images/digim.png";
const Digitalmarketing = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid text-center">
        <h1 className="mt-3 mb-5" style={{ fontSize: "50px" }}>
          DIGITAL MARKETING
        </h1>
        <div className="container text-center mb-5" style={{ padding: "1%" }}>
          <img
            src={dm}
            className="img-fluid mt-1"
            style={{ height: "400px" }}
          />
          </div>
          </div>
        <div className="container-fluid mt-5" style={{ backgroundColor: "#f8fcff"}}>
        <div
            className="container mt-5"
            style={{ width: "80%", textAlign: "left" }}
          >
              <p className="mt-3" >
            Are you ready to take your business to the next level? Look no
            further than Om Enterprises Group - your trusted partner in digital
            marketing excellence. As a premier digital marketing company, we
            specialize in empowering businesses like yours to thrive in today's
            competitive landscape.Partner with Om Enterprises Group today and
            unlock the full potential of your business in the digital realm.
            Let's embark on a journey towards digital success together. Contact
            us to schedule a consultation and discover how we can transform your
            digital presence!
            
          </p>
            <ul>
            <li>
              <b>Search Engine Optimization (SEO): </b>SEO involves optimizing
              your website and content to rank higher in search engine results
              pages (SERPs) for relevant keywords. This helps increase organic
              (non-paid) traffic to your website.
            </li>
            <li>
              <b> Social Media Marketing: </b> Social media marketing involves
              using social media platforms like Facebook, Instagram, Twitter,
              LinkedIn, and others to promote products or services, build brand
              awareness, and engage with customers.
            </li>
            <li>
              <b> Email Marketing: </b> Email marketing involves sending
              targeted messages to a list of subscribers. It's used to promote
              products, share updates, nurture leads, and build relationships
              with customers.
            </li>
            </ul>
          </div>
       
      <div
        className="container-fluid text-center mb-5"
        style={{  color: "black" }}
      >
        <div className="row">
          <h1 className=" mb-1">
            OUR STRATEGIES
            <img
              src={digital}
              style={{ height: "60px" }}
              className="img-fluid"
            />
          </h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col mb-5" data-aos="fade-up">
              <div class="card">
                <div class="card-body">
                <center>
                <img
                  src={digitalnew}
                  class="card-img-top mt-2 mb-2"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
              </center>
                  <h4 class="card-title"> Strategic Digital Marketing:</h4>
                  <p class="card-text">
                  Tailored strategies crafted to suit your unique business
                      objectives.Comprehensive analysis and research to identify your
                      target audience and market trends. Customized campaigns designed to maximize your ROI and
                      drive growth.
                  </p>
                </div>
              </div>
            </div>
       
            <div class="col mb-5" data-aos="fade-down">
              <div class="card">
                <div class="card-body">
                <center>
                <img
                  src={sociall}
                  class="card-img-top mt-2 mb-2"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
              </center>
                  <h4 class="card-title">  Social Media Management (SMM):</h4>
                  <p class="card-text">
                  Engage with your audience across popular social media
                      platforms.  Create compelling content that sparks conversations and
                      builds brand loyalty. Data-driven insights to refine your social media strategy
                      and drive engagement.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-5" data-aos="fade-up">
              <div class="card">
                <div class="card-body">
                <center>
                <img
                  src={websitee}
                  class="card-img-top mt-2 mb-2"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
              </center>
                  <h4 class="card-title">Web Design and Development:</h4>
                  <p class="card-text">
                  Stunning, responsive websites optimized for user
                      experience and conversion. Seamless integration of innovative design elements and
                      cutting-edge technology.  Mobile-friendly solutions to reach customers on any
                      device.
                  </p>
                </div>
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

export default Digitalmarketing;
