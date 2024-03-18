import React from "react";
import Nav from "../components/Nav";
import "../pages/services.css";
import dm from "../assets/digital2.gif";
import digital from "../assets/digi.png";
import Footer from "../components/Footer";

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
            style={{ height: "450px" }}
          />
          <p className="mt-3" style={{ width: "80%" }}>
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
        </div>
      </div>

      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "", color: "black" }}
      >
        <div className="row">
          <h1 className="mt-2 mb-1">OUR STRATEGIES<img src={digital} style={{height:"60px"}} className="img-fluid mx-3" /></h1>
          <div class="row row-cols-1 row-cols-md-3 g-4 mb-5 mt-3">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">
                    Strategic Digital
                    <br />
                    Marketing:
                  </h2>
                  <ul className="mt-3" style={{ textAlign: "left" }}>
                    <li>
                      {" "}
                      Tailored strategies crafted to suit your unique business
                      objectives.
                    </li>
                    <li>
                      {" "}
                      Comprehensive analysis and research to identify your
                      target audience and market trends.
                    </li>
                    <li>
                      {" "}
                      Customized campaigns designed to maximize your ROI and
                      drive growth.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">
                    {" "}
                    Web Design and <br /> Development:
                  </h2>
                  <ul className="mt-3" style={{ textAlign: "left" }}>
                    <li>
                      Stunning, responsive websites optimized for user
                      experience and conversion.
                    </li>
                    <li>
                      Seamless integration of innovative design elements and
                      cutting-edge technology.
                    </li>
                    <li>
                      Mobile-friendly solutions to reach customers on any
                      device.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">
                    Social Media <br />
                    Management (SMM):
                  </h2>
                  <ul className="mt-3" style={{ textAlign: "left" }}>
                    <li>
                      Engage with your audience across popular social media
                      platforms.
                    </li>
                    <li>
                      Create compelling content that sparks conversations and
                      builds brand loyalty.
                    </li>
                    <li>
                      Data-driven insights to refine your social media strategy
                      and drive engagement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ width: "80%" }}>
        <p>
          Digital marketing refers to the use of various digital channels and
          tactics to promote products, services, or brands to reach and engage
          with potential customers online. It encompasses a wide range of
          strategies, including search engine optimization (SEO), pay-per-click
          advertising (PPC), content marketing, email marketing, social media
          marketing, influencer marketing, affiliate marketing, and more.{" "}
        </p>
        <h4><b>
            Here's a brief overview of some key components of digital marketing:
          </b></h4>
        
        <div className="container" style={{width:"70%",textAlign:"left"}}>
        <ul>
          
        </ul>
        <li>
          <b>Search Engine Optimization (SEO): </b>SEO involves optimizing your
          website and content to rank higher in search engine results pages
          (SERPs) for relevant keywords. This helps increase organic (non-paid)
          traffic to your website.
        </li>
        <li>
          <b> Social Media Marketing: </b> Social media marketing involves using
          social media platforms like Facebook, Instagram, Twitter, LinkedIn,
          and others to promote products or services, build brand awareness, and
          engage with customers.
        </li>
        <li>
          <b>   Email Marketing: </b>    Email marketing involves sending targeted messages to a
        list of subscribers. It's used to promote products, share updates,
        nurture leads, and build relationships with customers.
        </li>
        </div>
      
    
      </div>

      <Footer />
    </>
  );
};

export default Digitalmarketing;
