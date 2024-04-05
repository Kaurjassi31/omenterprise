import React from "react";
import Nav from "../components/Nav";
import "../assets/css/services.css";
import social from "../assets/images/social2.png";
import sc from "../assets/images/sc.jpg";
import sc1 from "../assets/images/sc1.jpg";
import sc2 from "../assets/images/sc2.jpg";
import sc3 from "../assets/images/sc3.jpg";
import sociall from "../assets/images/sociall.png";
import Footer from "../components/Footer";

const Socialmedia = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div
          className="container text-center mt-2 mb-5"
          style={{ padding: "1%" }}
        >
          <h1 className="mt-2 mb-5" style={{ fontSize: "50px" }}>
            SOCIAL MEDIA MANAGEMENT
          </h1>
          <img src={social} className="img-fluid mt-3" />
        </div>
      </div>
      <div className="container text-center" style={{ width: "70%" }}>
        <div className="row text-center">
          <p>
           
          </p>
          <br />
          {/* <p>
            
            In today's digital age, social media has emerged as a powerful tool
            for businesses to engage with their audience, build brand awareness,
            and drive conversions. Our team of experienced social media managers
            specializes in crafting compelling content, managing accounts, and
            executing strategic campaigns across popular platforms like
            Instagram, Facebook, Twitter, and LinkedIn. From creating engaging
            reels to designing eye-catching creatives, we ensure that your brand
            stays relevant and resonates with your audience in the ever-evolving
            social media landscape.
          </p> */}
        </div>
        <div className="row">
          <h4 className="text-center"> <img src={sociall} className="img-fluid mx-3" style={{height:"40px"}} />Our Approach:</h4>
          <p className="mb-5">
            At OM Enterprises, we offer comprehensive social media management
            solutions tailored to your business needs. Our approach is rooted in
            creativity, strategy, and data-driven insights to ensure that your
            brand stands out in the crowded digital space. Welcome to OM Enterprises Social Media Management Services At OM
            Enterprises, we understand the pivotal role that social media plays
            in today's digital landscape. With billions of active users across
            various platforms, social media has become a powerhouse for
            businesses to connect, engage, and convert their audience into loyal
            customers. That's where we come in.
          </p>
        </div>
      </div>
      
      <div className="container-fluid" style={{ backgroundColor: "black"}}>
        <div className="container">
          <h1 className="text-center mt-5 text-light">SOCIAL MEDIA</h1>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-5">
            <div class="col">
              <div class="card">
                <img
                  src={sc1}
                  className="img-fluid"
                  style={{ height: "600px" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={sc3}
                  className="img-fluid"
                  style={{ height: "600px" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={sc2}
                  className="img-fluid"
                  style={{ height: "600px" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={sc}
                  className="img-fluid"
                  style={{ height: "600px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="container-fluid mb-5"  style={{ backgroundColor: "#f8fcff"}}>
        <div className="container">
        <div className="row mb-5">
          <div className="col-sm-6 mt-5">
          <h1>Terms & Conditions</h1>
        <ol>
       <li> Services will be initiated after the full payment of our charges in advance.</li>
       <li>This Proposal will be valid only for 7 days.</li>
       <li>This Proposal is only for one Facebook, Instagram or YouTube Brand Channel.</li>
       <li>
We are open 5 days a week. Our Office timings are from 09:30 am to 6:30 pm & no
request will be entertained after 6 pm.</li>
<li>
For digital marketing consultation from our renowned industry experts, will be charged
Rs 2000/hour.</li> 
<li>Minimum hour for consultation per meeting will be of 2 hours.</li>
<li>Other Terms will be mutually decided.</li>
</ol>
          </div>
          <div className="col-sm-6 mt-5">
          <h1>Outlines</h1>
       

          <li>
Minimum commitment of YouTube Marketing Package is 6 months
with 3 Months Advance payments.</li>
          <li>Only 1 person will be allowed in a single video.</li>
          <li>Basic editing of Videos will take minimum 3-5 working days.</li>
          <li>
Once video shoot date is booked, it won’t be cancelled. If Cancelled
we will treat it as a 3 Videos shooted.</li>
<li>Video length is (03 to 5 mins).</li>
          
         
<li> No Reels will be carry forward to the Next Month.</li>
<li> Basic Editing will be provided for Reel making.</li>
<li>Content will be provided by the client.</li>

          </div>
        </div>
        </div>
       
        
      </div>
      <Footer />
    </>
  );
};

export default Socialmedia;
