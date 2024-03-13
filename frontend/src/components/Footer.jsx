import React from "react";
import logo1 from "../assets/logo1.png";
import "../pages/indexnew.css";


const Footer = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"#ffffff"}}>
        <div className="row">
        <div className="col-sm-3">
        <ul style={{listStyle:"none"}}>
        <u><h5>Company</h5></u>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Careers</li>
        <li>Security</li>
        <li>Brand Assets</li>
        <u><h5>Developer</h5></u>
        <li>API - Pabbly Subscription Billing</li>
        <li>API - Pabbly Email Marketing </li>
        </ul>     
         </div>
       <div className="col-sm-3">
        <ul style={{listStyle:"none"}}>
        <u><h5> Learn</h5></u>
        <li>Pabbly Connect Videos</li>
        <li>Pabbly Connect Community</li>
        <li>Pabbly Subscription Billing Community</li>
        <li>Careers</li>
        <u><h5>Partners</h5></u>
        <li>Affiliate Program</li>
        <u><h5> Integrations</h5></u>
        <li> Pabbly Connect Integrations</li>
        <li> Integrate Your App</li>
        </ul>   
         </div>
       <div className="col-sm-3">
        <ul style={{listStyle:"none"}}>
        <u><h5>Products </h5></u>
        <li>Pabbly Plus</li>
        <li>Pabbly Connect</li>
        <li>Pabbly Email Marketing</li>
        <li>Pabbly Form Builder</li>
        <li>Pabbly Email Verification</li>
        <li>Pabbly Subscription Billing</li>
        <u><h5>Certification</h5></u>
        <li>  SOC2 Type 1 </li>
        <li> ISO 27001:2022</li>
  
        </ul>      
         </div>
         <div className="col-sm-3">
          <div className="row">
            <div className="col-sm-3">
            <img src={logo1} className="img-fluid mx-4" />
            </div>
            <div className="col-sm-9">
            <h4>Om Enterprises<span className=""> Group</span></h4>
            </div>
          </div>
        <ul style={{listStyle:"none"}}>
          <li><b>Sales:</b> support@pabbly.com​</li>
          <li>Contact Us</li>
          <li>Support Forum</li>
          <li>Enterprise</li>
          <u><h5>Follow Us </h5></u>
        </ul>      
         </div>




        </div>
      </div>
    </>
  );
};

export default Footer;
