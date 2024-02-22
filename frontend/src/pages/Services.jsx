import React from "react";
import "../App.css";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import read from "../assets/read.png";
import clock1 from "../assets/clock1.png";
import chat from "../assets/sms.png";
import call from "../assets/call.png";
import file from "../assets/files.png";
import Card from "../components/UI/Card";
import whatsapp from "../assets/card1.svg";
import email from "../assets/card6.svg";
import sms from "../assets/card2.svg";
import voice from "../assets/card5.svg";
import website from "../assets/card4.svg";
import software from "../assets/card2.svg";
import social from "../assets/card7.svg";
import digital from "../assets/card3.svg";
import Footer from "../components/Footer";


const Services = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="container-fluid mb-5">
        <div
          className="container text-center"
          style={{
            padding: "3%",  
          }}
        >
          <div
            className="row"
            style={{ fontFamily: "Poppins', sans-serif" }}
          >
         <img src={call} className="img-fluid mt-5"  style={{height:"550px"}} />
            
          </div>
        </div>
      </div>
     
    

      <div className="container-fluid text-center">
        <div className="container">
          <h1 className="mt-5 mb-2 text-center" style={{fontFamily:"Poppins', sans-serif"}}>BULK SMS SERVICE PROVIDER INDIA | WHY SMS MARKETING?</h1>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5">
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

      <div className="container-fluid mt-5" >
        <div className="container-fluid cardglass">
   
        <div className="container mb-4">
        <h1 className="text-center mt-3 mb-3 " style={{fontFamily:"Poppins', sans-serif"}}>Our services</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-5">
          <Card img={sms} title={"Bulk Messages"} >
            Sending of a large number of Bulk messages  to multiple
            recipients.
            <hr />
            <a href="bulksms"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
          <Card
            img={whatsapp}
            className="img-fluid"
            title={"Whatsapp Messages"}
          >
            Send large number of WhatsApp messages to
            multiple recipients.
            <hr />
            <a href="whatsapp"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
          <Card img={email} title={"Bulk Emails"}>
            Send a large number of Bulk emails to a group of people or
            recipients. 
            <hr />
            <a href="bulkemail"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
          <Card img={voice} title={"Voice SMS"}>
            Service given to individuals or businesses to send pre-recorded
            voice messages.
            <hr />
            <a href="voicesms"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
          <Card img={website} title={"Website Development"}>
            Developing a simple single static page of plain text to complex web
            applications.
            <hr />
            <a href="website"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
          
          <Card img={social} title={"Socialmedia Management"}>
            Strategies to maintain and grow a social presence,
            on top of administrative.
            <hr />
            <a href="socialmedia"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
     
          <Card img={digital} title={"Digital Marketing"} style={{height:"160px",width:"75%"}}>
           defining software solutions to one or
            more sets of problems.
            <hr />
            <a href="digitalmarketing"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
          <Card img={software} title={"Software Development"} style={{height:"160px",width:"75%"}}>
           defining software solutions to one or
            more sets of problems.
            <hr />
            <a href="software"> <button className="btn btn-outline-primary mb-2" type="submit" >
                Know More
              </button></a>
          </Card>
        </div>
      </div>
      </div>
      </div>


     
   
      <Footer />
      
    </>
  );
};

export default Services;
