import React from "react";
import logo1 from "../assets/logo1.png";
import "../pages/indexnew.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5" style={{backgroundColor:"#ffffff"}}>
        <div className="row mt-5">
          <div className="col-sm-1"></div>
        <div className="col-sm-2 ">
        <ul style={{listStyle:"none"}}>
        <u><h5>Company</h5></u>
        <a href="contact"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-2">Contact -Us</li>
              </a>
              <a href="about"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-2">About Us</li>
              </a>
              <li className="mt-2">Careers</li>
        <li className="mt-2">Security</li>
        <li className="mt-2">Brand Assets</li>
        </ul>     
         </div>

       <div className="col-sm-2 ">
       <ul
              style={{
                fontFamily: "Poppins', sans-serif",
                textDecoration: "none",
                listStyle: "none",
                textAlign: "left",
              }}
            >
        <u>
        <h5 style={{ fontFamily: "Poppins', sans-serif" }} >
              Quick Links
            </h5></u>
              <a href="services"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-2">Services</li>
              </a>
              <a  href="privacy"
                style={{ textDecoration: "none", color: "black" }}>
              <li className="mt-2">Privacy Policy</li>
              </a>

              <a href="pricing"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-2">Plan & Pricing</li>
              </a>
              <a href="services"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-2">DLT</li>
              </a>
              <a href="services"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-2">Become Reseller</li>
              </a>
            </ul>
         </div>        
       <div className="col-sm-2 ">
        <ul
              style={{
                fontFamily: "Poppins', sans-serif",
                textDecoration: "none",
                listStyle: "none",
                textAlign: "left",
              }}
            >
           <u><h5>Products </h5></u>
              <a href="bulksms"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-2">Bulk Messages</li>
              </a>
              <a href="bulkemail"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-2">Email Marketing</li>
              </a>
              <a href="digitalmarketing"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-2">Digital marketing</li>
              </a>
              <a  href="website"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-2">Website Designing</li>
              </a>
              <a href="voicesms"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-2">Voice Messages</li>
              </a>
              <a href="socialmedia"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-2">Social Media</li>
              </a>
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
          <li className="mt-2"><b>Queries:</b> @omenterprisesgroup.in, hrhead@omenterprisesgroup.in ​</li>
          <li className="mt-2"><b>Contact:</b>+91-1814603134 , +91-9872144408</li>
          <u><h5 className="mt-2">Follow Us </h5></u>
          <a href="https://www.facebook.com/omenterprisesgroup/"><img src={facebook} className="mx-2" style={{height:"30px",width:"30px"}} /></a>
          <a href="https://www.instagram.com/omenterprisesgroup/"><img src={instagram} className="mx-2" style={{height:"30px",width:"30px"}} /></a>
          <a href="https://www.youtube.com/@omenterprisesglobalgroup"><img src={youtube} className="mx-2" style={{height:"30px",width:"30px"}} /></a>
          <a href="https://www.linkedin.com/company/om-enterprises-group/"><img src={linkedin} className="mx-2" style={{height:"30px",width:"30px"}} /></a>
        </ul>      
         </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
