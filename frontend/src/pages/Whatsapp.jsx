import React from "react";
import whatsApp from "../assets/whatsapp1.png";
import Whatsapp1 from "../assets/whatsapp4.png";
import "../pages/services.css";


import Nav from "../components/Nav";
import Accordion from "../components/Accordion";
import process from "../assets/process.png";
import Hovercard from "../components/Hovercard";
import "../components/hovercard.css";
import "../components/Footer";
import Footer from "../components/Footer";

const Whatsapp = () => {
  return (
    <>
      <Nav />
      <div
        className="container text-center"
        style={{ padding: "7%", backgroundColor: "#f7fbff" }}
      >
       
        
        <h1 className="mt-4" style={{ fontFamily: "Poppins', sans-serif", fontSize: "50px" }}>
          Bulk WhatsApp SMS
        </h1>
      
        <img src={whatsApp} className="img-fluid" style={{ height: "500px" }} />
        <p className="mt-3" style={{ fontFamily: "Poppins', sans-serif", fontSize: "18px" }}>
          Using bulk WhatsApp sender has become increasingly popular among
          businesses and organizations as an efficient communication tool. With
          WhatsApp boasting more than 2 billion monthly active users, it’s
          crucial to stay up-to-date with the latest features and best
          practices. In this blog post, we will discuss how to send bulk
          WhatsApp messages in 2024, utilizing the capabilities of a reliable
          bulk WhatsApp sender to maximize your messaging efficiency and reach.
        </p>
        <div className="mt-5 mb-5 green" >
        <h1 style={{ fontFamily: "Poppins', sans-serif", fontSize: "50px" }} className="mt-3">
          How it works?
        </h1>
        <img
          src={process}
          className="img-fluid mt-3 mb-5 green"
          style={{ height: "450px" }}
        />
        </div>
        <br />
        

        <div className="row" style={{
           
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}>
          <h1
            className="mt-5 me-auto"
            style={{ fontFamily: "Poppins', sans-serif", fontSize: "50px" }}
          >
            WhatsApp Business API
          </h1>
          <img
            src={Whatsapp1}
            className="img-fluid mt-4"
            style={{ height: "500px" }}
          />
          <p
            style={{ fontFamily: "Poppins', sans-serif", fontSize: "18px" }}
            className="mt-5"
            
          >
            In 2024, WhatsApp made significant improvements to its Business API,
            making it more user-friendly and feature-rich.
            <br />
            About 12,00,00,000 results (0.33 seconds) The WhatsApp Business API
            acts as a backend mechanism that allows businesses to manage and
            automate their conversations on WhatsApp. Instead of a tangible app
            or interface that one might use on a personal device, the API is
            integrated into other messaging platforms or systems businesses
            already use. Some of the latest updates include:
            <br />
            <br />
            <b> Enhanced message templates:</b> Businesses can now create and
            manage message templates <br />
            more easily with the updated template editor.
            <br />
            <br />
            <b>Rich media support:</b> Send images, videos, documents, and other
            file types to your customers.
            <br />
            <br />
            <b>Improved analytics:</b> Get in-depth insights into your campaigns
            with advanced reporting tools.
            <br /><br /><br />
         
          </p>
        
        </div>

        

        <Hovercard />

      </div>
      <Footer />
       
      
      
     
    </>
  );
};

export default Whatsapp;
