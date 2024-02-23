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
      <div className="container-fluid ">
        <div className="container text-center mt-5" style={{ padding: "3%" }}>
          <h1 className="mt-5" style={{ fontSize: "80px" }}>
            BULK SMS
          </h1>
          </div>
        <div className="container">
                    <img src={Bulk} className="img-fluid" />
                    </div>

     
      </div>

<div className="container-fluid" style={{backgroundColor:"#023368",color:"white"}}>
  <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8 text-center">
    <h2 className="mt-5">WE PROVIDE BEST BULK SMS SERVICE</h2>

      <p className="text-light  mt-5 mb-5">  Bulk messages refer to the sending of a large number of messages
          simultaneously to multiple recipients. This can be done through
          various communication channels, including email, SMS (Short Message
          Service), instant messaging platforms, or any other messaging system.
          The purpose of sending bulk messages is often to reach a wide audience
          efficiently and quickly.</p>
    </div>
    <div className="col-sm-2"></div>
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
              100% Instant <br /> Delivery
            </h4>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={computer}
              className="img-fluid mt-5"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-4">
              Interactive SMS <br /> Panel
            </h4>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={global}
              className="img-fluid mt-5"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-4">
              Round The Clock <br />
              Delivery
            </h4>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={people}
              className="img-fluid mt-5"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-4">
              Generate More <br />
              Traffic
            </h4>
          </div>
        </div>
      </div>

      

      <div className="container-fluid mt-5"  style={{backgroundColor:"#023368",color:"white"}} >
        <h1 className="mt-5 text-center">Our Bulk SMS Services</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card mt-5 mb-5">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h4 class="card-title">
                {" "}
                Transactional Bulk SMS
              </h4>
              <h6 class="card-text">
               
              Bulk SMS sent to customers to provide information necessary
                  for using product or service to keep customers informed. Such
                  SMS can be sent to both DND & Non-DND Numbers along with a 06
                  alpbhabets sender ID.
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mt-5 mb-5">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h4 class="card-title">Voice Call SMS</h4>
              <h6 class="card-text">
              Voice calls helps to enhance business. Voice can be used for a
                  wide range of applications like Political Campaigns, Customer
                  Surveys, Mobile Marketing , Meeting alerts, Wake up calls, EMI
                  Alerts, Medicine reminders etc.
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mt-5 mb-5">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h4 class="card-title">Promotional Bulk SMS</h4>
              <h6 class="card-text">
              
              Promotional sms are used for the promotions or marketing
                  your services or products. Promotional SMS contains sales
                  & marketing sms activity. Also to promote
                  products & services among potential prospects clients.
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mt-5 mb-5">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h4 class="card-title">Whatsapp Bulk SMS</h4>
              <h6 class="card-text">
              Bulk Whatsapp messages to thousands of Whatsapp in just
                  01 click. The offers of sending bulk whatsapp with LIVE links
                  and click to Call buttons. Send Whatsapp Bulk sms with Text,
                  Images, Pdf & Videos.
              </h6>
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
