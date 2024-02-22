import React from "react";
import whatsApp from "../assets/whatsapp1.png";
import Whatsapp1 from "../assets/whatsapp4.png";
import "../pages/services.css";


import Nav from "../components/Nav";
import Cursor from "../components/Cursor";
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
      <Cursor />
      <div
        className="container text-center"
        style={{ padding: "7%", backgroundColor: "#f7fbff" }}
      >
       
        
        <h1 className="mt-4" style={{ fontFamily: "Poppins', sans-serif", fontSize: "50px" }}>
          Bulk WhatsApp SMS
        </h1>
        <div class="custom-shape-divider-top-1706608702">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>          
        </div>
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
            <div class="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
          </p>
        
        </div>

        

        <Hovercard />

      </div>
      <Footer />
       
      
      
     
    </>
  );
};

export default Whatsapp;
