import React from "react";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import "../pages/indexnew.css";
import New from "../assets/new.gif";
import Swiperr from "../components/Swiperr";
import chat4 from "../assets/chat4.png";
import chat5 from "../assets/chat5.png";
import coding from "../assets/coding.png";
import voice from "../assets/Voice5.png";
import email4 from "../assets/email4.png";
import read from "../assets/read.png";
import clock1 from "../assets/clock1.png";
import chat from "../assets/sms.png";
import file from "../assets/files.png";
import Pricecard from '../components/Pricecard';

const Index = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="container mt-5">
        <h1 className="mt-5 text-center" style={{ fontSize: "60px",color:"#023368" }}>
          INDIA’S NO. 1 BULK SMS <br /> PLATFORM
        </h1>
        </div>
        <div className="container">
        <img src={New} className="img-fluid mt-4" />
        
      </div>
      <div className="container-fluid">
      <div
        className="container mt-5 text-center">
        <h1 className="mt-5" style={{color:"#023368"}}>Services We Provide</h1>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 mt-5">
            <center>
        <img src={chat4} className="img-fluid" style={{height:"60px",width:"60px"}}  />
          </center>
            <h4 className="mt-4">Bulk SMS</h4>
          </div>
          <div className="col-sm-2 mt-5">
          <center>
          <img src={voice} className="img-fluid" style={{height:"60px",width:"60px"}} />
          </center>
            <h4 className="mt-4">Voice SMS</h4>
          </div>
          <div className="col-sm-2 mt-5">
          <center>
          <img src={email4} className="img-fluid" style={{height:"60px",width:"60px"}}  />
          </center>
            <h4 className="mt-4">Bulk Email</h4>
          </div>
          <div className="col-sm-2 mt-5">
          <center>
            <img src={chat5} className="img-fluid" style={{height:"60px",width:"60px"}}  />
            </center>
            <h4 className="mt-4">WhatsApp Bulk</h4>
          </div>
          <div className="col-sm-2 mt-5">
          <center>
          <img src={coding} className="img-fluid" style={{height:"60px",width:"60px"}}  />
          </center>
            <h4 className="mt-4">Web Development</h4>
          </div>
          <div className="col-sm-1"></div>
        </div> 
        <center>
        <button type="button" class="btn btn-primary btn-lg mt-5 btn">Buy Your Plan Now</button>
        </center>
       </div>

       <Swiperr />


       <div className="container-fluid text-center mt-5 mb-5" style={{backgroundColor:"#023368"}}>
        <div className="container">
          <h1
            className="mt-5 mb-2 text-center"
            style={{ fontFamily: "Poppins', sans-serif", color: "white" }}
          >
            BULK SMS SERVICE PROVIDER INDIA | WHY SMS MARKETING?
          </h1>
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
                  <p class="card-text mt-3" style={{ fontSize: "22px",color:"#023368" }}>
                    UNPARALLED OPEN RATE
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    98%
                  </h1>
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
                  <p class="card-text mt-3" style={{ fontSize: "22px",color:"#023368" }}>
                    HIGHEST CLICK <br />
                    RATE
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    20%
                  </h1>
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
                  <p class="card-text mt-3" style={{ fontSize: "22px",color:"#023368" }}>
                    FASTEST RESPONSE TIME
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    90s
                  </h1>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-5">
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
                  <p class="card-text mt-3" style={{ fontSize: "22px",color:"#023368" }}>
                    EXTREME READ <br /> RATE
                  </p>
                  <h1 class="card-title mt-3" style={{ color: "#023368" }}>
                    90%
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="container mt-5">
<Pricecard />
</div>
       
     
    </>
  );
};

export default Index;
