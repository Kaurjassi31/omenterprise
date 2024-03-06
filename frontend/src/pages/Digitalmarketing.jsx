import React from "react";
import Nav from "../components/Nav";
import "../pages/services.css";
import dm from "../assets/dm1.png";
import Footer from "../components/Footer";

const Digitalmarketing = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mt-5 text-center">
        <div
          className="container text-center mt-5 mb-5"
          style={{ padding: "3%" }}
        >
          <h1 className="mt-5 mb-5" style={{ fontSize: "60px" }}>
            DIGITAL MARKETING
          </h1>
          <img
            src={dm}
            className="img-fluid mt-3"
        
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

      <div className="container-fluid text-center" style={{backgroundColor:"#023368",color:"white"}}>
        <div className="row">
          <h1 className="mt-5 mb-1">Our Strategies</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4 mb-5 mt-4">
            <div class="col">
              <div class="card" >
                <div class="card-body">
                  <h2 class="card-title" style={{color:"#023368"}}>Strategic Digital<br/>Marketing:</h2>
                 <ol>
                  <li>    Tailored strategies crafted to suit your unique business objectives.</li>
                  <li>    Comprehensive analysis and research to identify your target audience and market trends.</li>
                  <li>    Customized campaigns designed to maximize your ROI and drive growth.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" >
                <div class="card-body">
                  <h2 class="card-title" style={{color:"#023368"}}> Web Design and <br/> Development:</h2>
                 <ol>
<li>Stunning, responsive websites optimized for user experience and conversion.</li>           
<li>Seamless integration of innovative design elements and cutting-edge technology.</li>
<li>Mobile-friendly solutions to reach customers on any device.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" >
                <div class="card-body">
                  <h2 class="card-title" style={{color:"#023368"}}>Social Media <br/>Management (SMM):</h2>
                 <ol>
<li>Engage with your audience across popular social media platforms.</li>        
<li>Create compelling content that sparks conversations and builds brand loyalty.</li>
<li>Data-driven insights to refine your social media strategy and drive engagement.</li>
                  </ol>
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
