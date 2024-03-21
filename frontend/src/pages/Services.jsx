import React from "react";
import "../App.css";

import Card from "../components/UI/Card";
import whatsapp from "../assets/chat1.svg";
import email from "../assets/emailnew.png";
import sms from "../assets/bulk.png";
import voice from "../assets/voicenew.png";
import website from "../assets/website2.jpg";
import software from "../assets/bulb.png";
import social from "../assets/social3.png";
import digital from "../assets/chat2.svg";
import read from "../assets/read.png";
import clock1 from "../assets/clock1.png";
import chat from "../assets/sms.png";
import file from "../assets/files.png";
import call from "../assets/services.gif";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mb-2">
      <h1 className="text-center mt-3" style={{color:"#023368",fontSize:"60px"}}>Our Services</h1>

        <div
          className="container text-center"
          style={{
            padding: "2%",  
          }}
        >
          <div
            className="row"
           
          >
         <img src={call} className="img-fluid"  style={{height:"500px"}} />
            
          </div>
                  </div>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor:"#f8fcff"}}
      >
        <div className="container-fluid ">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-1 mb-5">
              <Card img={sms} title={"Bulk Messages"}>
                Sending of a large number of Bulk messages to multiple
                recipients.
                <hr />
                <a href="bulksms">
                <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>
                                </a>
              </Card>
              <Card
                img={whatsapp}
                className="img-fluid"
                title={"Whatsapp Messages"}
              >
                Send large number of WhatsApp messages to multiple recipients.
                <hr />
                <a href="whatsapp">
                <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>

                </a>
              </Card>
              <Card img={email} title={"Bulk Emails"}>
                Send a large number of Bulk emails to a group of people or
                recipients.
                <hr />
                <a href="bulkemail">
                  {" "}
                  <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>

                </a>
              </Card>
              <Card img={voice} title={"Voice SMS"}>
                Service given to individuals or businesses to send pre-recorded
                voice messages.
                <hr />
                <a href="voicesms">
                  {" "}
                  <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>

                </a>
              </Card>
              <Card img={website} title={"Website Development"}>
                Developing a simple  static page  to complex
                web applications.
                <hr />
                <a href="website">
                <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>

                </a>
              </Card>

              <Card img={social} title={"Socialmedia Management"}>
                Strategies to maintain and grow a social presence.
               
                <hr />
                <a href="socialmedia">
                  {" "}
                  <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>

                </a>
              </Card>

              <Card
                img={digital}
                title={"Digital Marketing"}
                style={{ height: "160px", width: "75%" }}
              >
                defining software solutions to one or more sets of problems.
                <hr />
                <a href="digitalmarketing">
                  {" "}
                  <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>

                </a>
              </Card>
              <Card
                img={software}
                title={"Software Development"}
                style={{ height: "160px", width: "75%" }}
              >
                defining software solutions to one or more sets of problems.
                <hr />
                <a href="software">
                  {" "}
                  <button type="button" class="btn btn-primary" style={{backgroundColor:"#023368",color:"white"}}>Know More</button>

                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center" style={{backgroundColor:"#f8fcff"}}>
        <div className="container">
          <h1 className="mt-3 mb-2 text-center" style={{fontFamily:"Poppins', sans-serif",color:"#023368"}}>BULK SMS SERVICE PROVIDER INDIA | WHY SMS MARKETING?</h1>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-5">
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={chat}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                <p class="card-text mt-3" style={{ fontSize: "22px" }}>
                  UNPARALLED OPEN RATE
                  </p>
                  <h1 class="card-title mt-3">98%</h1>
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={file}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                <p class="card-text mt-3" style={{ fontSize: "22px" }}>
                  HIGHEST CLICK <br/>RATE
                  </p>
                  <h1 class="card-title mt-3">20%</h1>
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={clock1}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                <p class="card-text mt-3" style={{ fontSize: "22px" }}>
                  FASTEST RESPONSE TIME
                  </p>
                  <h1 class="card-title mt-3">90s</h1>
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <center>
                  <img
                    src={read}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                <p class="card-text mt-3" style={{ fontSize: "22px" }}>
                 EXTREME READ <br/> RATE
                  </p>
                  <h1 class="card-title mt-3">90%</h1>
                 
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

export default Services;
