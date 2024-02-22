import React from "react";
import Bulk from "../assets/bulksms1.png";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import "../pages/services.css";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Footer from "../components/Footer";
import "../pages/bulk.css";
import comments from "../assets/comments.png";
import global from "../assets/global.png";
import people from "../assets/people.png";
import computer from "../assets/computer.png";


const Bulksms = () => {
  return (
    <>
      <Nav />
      <Cursor />
      <div className="container-fluid back">
       <div className="container text-center"
          style={{ padding: "3%", }}>
            <h1 style={{fontSize:"80px"}}>BULK <br /> <span className="mx-5">SMS</span></h1>
              <br/>
              <img src={Bulk} className="img-fluid"/>
            </div>
          </div>
        
      <div className="container">
        <div className="row">
          <h1
            className="text-center mt-5"
            style={{ fontFamily: "Poppins', sans-serif" }}
          >
           Send and Receive Bulk SMS Instantly in just 1 Click
          </h1>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={comments}
              className="img-fluid mt-5"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-4">
            100% Instant <br/> Delivery
            </h4>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={computer}
              className="img-fluid mt-5"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-4">
            Interactive SMS <br/> Panel
            </h4>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={global}
              className="img-fluid mt-5"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-4">
            Round The Clock <br />Delivery
            </h4>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={people}
              className="img-fluid mt-5"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-4">
            Generate More <br />Traffic
            </h4>
          </div>
        </div>
      </div>


      <div className="container text-center">
        <h2 className="mt-5">WE PROVIDE BEST BULK SMS SERVICE</h2>
      <p
                className="mt-4"
                style={{ 
                  fontSize: "20px",
                  color: "black",
                  width:"80%"
                }}
              >
                Bulk messages refer to the sending of a large number of messages
                simultaneously to multiple recipients. This can be done through
                various communication channels, including email, SMS (Short
                Message Service), instant messaging platforms, or any other
                messaging system. The purpose of sending bulk messages is often
                to reach a wide audience efficiently and quickly. 
                
              </p>
              
      </div>


      <div className="container-fluid bg-light">
      <div className="container">
        <div class="row text-center ">
          <h1 className="mt-5 text-center">
            Our Bulk SMS Services
          </h1>
          <div class="col-sm-3 mt-5 mb-5">
            <div class="card" className="caard">
              <div class="card-body  mt-3">
                <center>
                  <div className="iconn">
                    <SmsOutlinedIcon className="mt-4" />
                  </div>
                </center>

                <h5
                  class="card-title"
                  className="mt-4"
                  style={{ fontFamily: "Poppins', sans-serif", fontSize: "25px" }}
                >
                  <b>Transactional Bulk SMS</b>
                </h5>
                <p
                  class="card-text text-center"
                  className="mt-4 textt"
                >
                  Bulk SMS sent to customers to provide information necessary
                  for using product or service to keep customers informed. Such
                  SMS can be sent to both DND & Non-DND Numbers along with a 06
                  alpbhabets sender ID.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-3 mt-5 mb-5">
            <div class="card" className="caard">
              <div class="card-body mt-3">
                <center>
                  <div className="iconn">
                    <RecordVoiceOverIcon className="mt-4" />
                  </div>
                </center>

                <h5
                  class="card-title"
                  className="mt-4"
                  style={{ fontFamily: "Poppins', sans-serif", fontSize: "25px" }}
                >
                  <b>Voice Call SMS</b>
                </h5>
                <p
                  class="card-text"
                  className="mt-4 textt"
                  
                >
                  Voice calls helps to enhance business. Voice can be used for a
                  wide range of applications like Political Campaigns, Customer
                  Surveys, Mobile Marketing , Meeting alerts, Wake up calls, EMI
                  Alerts, Medicine reminders etc.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mt-5 mb-5">
            <div class="card" className="caard">
              <div class="card-body mt-3">
                <center>
                  <div className="iconn">
                    <MessageOutlinedIcon className="mt-4" />
                  </div>
                </center>

                <h5
                  class="card-title"
                  className="mt-4"
                  style={{ fontFamily: "Poppins', sans-serif", fontSize: "25px" }}
                >
                 
                  <b>Promotional Bulk SMS</b>
                </h5>
                <p
                  class="card-text"
                  className="mt-4 textt">

                  Promotional sms are used for the promotions or marketing
                  your services or products. Promotional SMS contains sales
                  & marketing sms activity. Also to promote
                  products & services among potential prospects clients.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mt-5 mb-5">
            <div class="card" className="caard">
              <div class="card-body mt-3">
                <center>
                  <div className="iconn">
                    <WhatsAppIcon className="mt-4" />
                  </div>
                </center>

                <h5
                  class="card-title"
                  className="mt-4"
                  style={{ fontFamily: "Poppins', sans-serif", fontSize: "25px" }}
                >
                  <b>Whatsapp Bulk SMS</b>
                </h5>
                <p
                  class="card-text"
                  className="mt-4 textt"
                 
                >
                 Bulk Whatsapp messages to thousands of Whatsapp in just
                  01 click. The offers of sending bulk whatsapp with LIVE links
                  and click to Call buttons. Send Whatsapp Bulk sms with Text,
                  Images, Pdf & Videos.
                </p>
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

export default Bulksms;
