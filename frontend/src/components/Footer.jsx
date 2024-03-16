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
        <u><h5><b>Company</b></h5></u>
        <a href="career"
                style={{ textDecoration: "none", color: "black" }} >
              <li className="mt-4">Career</li>
              </a>
        <a href="services"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Services</li>
              </a>
       
              <a href="about"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">About Us</li>
              </a>
              <a href="contact"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Contact -Us</li>
              </a>
              <a href="terms"
                style={{ textDecoration: "none", color: "black" }} >
        <li className="mt-3">Terms & Conditions</li></a>
        <u><h5 className="mt-5"><b> Money Flow Matrix </b></h5></u>
              <a href="#"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Pro</li>
              </a>
              <a href="#"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Standard</li>
              </a>
              <a href="#"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Ultimate</li>
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
        <u>
        <h5 style={{ fontFamily: "Poppins', sans-serif" }} >
             <b> Quick Links</b>
            </h5></u>
            <a href="Dlt"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-4">DLT</li>
              </a>
              <a  href="blog"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-3">Blog</li>
              </a>
              
              <a  href="privacy"
                style={{ textDecoration: "none", color: "black" }}>
              <li className="mt-3">Privacy Policy</li>
              </a>

              <a href="pricing"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Plan & Pricing</li>
              </a>
             
              <a href="Reseller"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Become Reseller</li>
              </a>
              <u> <a  href="website"
                style={{ textDecoration: "none", color: "black" }}>
                <h5 className="mt-5"><b>Website Designing</b></h5>
              </a></u>
              <a href="website"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Web Designing</li>
              </a>
              <a href="website"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Web Development</li>
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
           <u><h5><b>Products </b></h5></u>
              <a href="bulksms"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-4">Bulk Messages</li>
              </a>
              <a href="bulkemail"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-3">Email Marketing</li>
              </a>
              <a href="digitalmarketing"
                style={{ textDecoration: "none", color: "black" }}>
                <li className="mt-3">Digital marketing</li>
              </a>
              <a href="socialmedia"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Social Media</li>
              </a>
           
              <a href="voicesms"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">Voice Messages</li>
              </a>
              <u><h5 className="mt-5"><b>Certification </b></h5></u>
              <a href="#"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">ISO 9001:2008</li>
              </a>
              <a href="#"
                style={{ textDecoration: "none", color: "black" }} >
                <li className="mt-3">ISO 9001:2008</li>
              </a>


            </ul>
          </div>
         <div className="col-sm-3">   
          <div className="row">
            <div className="col-sm-3">
            <img src={logo1} className="img-fluid mx-4" style={{height:"65px",width:"95px"}} />
            </div>
            <div className="col-sm-9">
            <h4 className="mx-4"><b>Om Enterprises</b><span className=""><b> Group</b></span></h4>
            </div>
          </div>
        <ul style={{listStyle:"none"}}>
          <li className="mt-4"><b>Queries:</b> @omenterprisesgroup.in, </li> <li className="mt-3">Sales1@omenterprisesgroup.in ​</li>
          <li className="mt-3"><b>Contact:</b>+91-1814603134 ,</li> <li className="mt-3"> +91-9872144408</li>
          <u><h5 className="mt-5"><b>Follow Us</b> </h5></u>
          <a href="https://www.facebook.com/omenterprisesgroup/"><img src={facebook} className="mx-2 mt-3" style={{height:"30px",width:"30px"}} /></a>
          <a href="https://www.instagram.com/omenterprisesgroup/"><img src={instagram} className="mx-2 mt-3" style={{height:"30px",width:"30px"}} /></a>
          <a href="https://www.youtube.com/@omenterprisesglobalgroup"><img src={youtube} className="mx-2 mt-3" style={{height:"30px",width:"30px"}} /></a>
          <a href="https://www.linkedin.com/company/om-enterprises-group/"><img src={linkedin} className="mx-2 mt-3" style={{height:"30px",width:"30px"}} /></a>
      
            </ul>      
         </div>
        </div>
      </div>
        <hr/>
        <div className="row text-center">
          <h6>© . 2024 omenterprisesgroup. All Rights Reserved. </h6>
        </div>

         
    </>
  );
};

export default Footer;
