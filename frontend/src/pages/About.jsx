import React from "react";
import "../App.css";
import "animate.css";

import Nav from "../components/Nav";
import about from "../assets/team.png";
import sunaina from "../assets/sunaina.png";
import kamal from "../assets/kamal.png";
import khushi from "../assets/khushi.png";
import archit from "../assets/archit.png";
import digamber from "../assets/digamber.png";
import kavita from "../assets/kavita.png";
import mission from "../assets/mission1.png";
import Footer from "../components/Footer";
import anilsir from "../assets/anilsir.png";
import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import ic3 from "../assets/ic3.png";
import ic4 from "../assets/ic4.png";
import ic5 from "../assets/ic5.png";
import ic6 from "../assets/ic6.png";
import ic7 from "../assets/ic7.png";
import ic8 from "../assets/ic8.png";
import Round from "../components/Round";

const About = () => {
  return (
    <>
      <Nav />
      <div
        className="container-fluid"
        
      >
        <div className="container">
          <div
            className=" mb-5 text-center"
            
          >
            <img src={about} className="img-fluid mt-5 " style={{height:"500px"}} />
          </div>
        </div>
      </div>
      
      <div className="container ">
        <div className="row">
          <div className="col-sm-4 mt-5 text-center">
            <h1 className="mt-5" >
              Our Values
            </h1>
            <p style={{ fontSize: "20px"}}>
              Our aim focus on customer’s satisfaction. 
              Convert Customer ideas into Innovate solutions
              so that they achieve their goals and
              better results.
            </p>
          </div>
          <div className="col-sm-4 mt-5 text-center">
            <img src={mission} className="img-fluid" style={{height:"250px"}} />
          </div>
          <div className="col-sm-4 mt-5 text-center">
            <h1 className="mt-5" >
              Our Vision & Mission
            </h1>
            <p style={{ fontSize: "20px" }}>
              Our mission is to help our clients achieve
             significant business growth by our services &
              maintain a healthy relationship
           with <br/>our clients.
            </p>
          </div>
        </div>
      </div>
            <Round />

      <div className="container-fluid text-center" style={{ backgroundColor: "#f8fcff" }}>
        <div className="container">
          <h1 className="mt-5 mb-2 text-center" style={{fontFamily:"Poppins', sans-serif"}}>OUR AWESOME FEATURES</h1>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5">
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic1}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">SMS Scheduling</h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    {" "}
                    No Matter what you doing right now, just schedule your sms
                    according to your preferable time, SMS auto blast according
                    to schedule time. Consult Best Bulk sms Service Provider in
                    india, Bulk email service provider in india.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic4}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">API Support</h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    We Provide Standard HTTP-API, who best for any ERP, Software
                    and online application, for using it you can sent sms from
                    your own apps.For More Detail Consult Best Bulk sms Service
                    Provider in india, Bulk email service provider in india
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic2}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">Customized Sender </h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    it provides you with Own Sender ID. It comprises of 6 alpha
                    character for Transactional Message & 6 Numeric Character
                    for Promotional Message. For More Information Visit Best
                    Bulk sms Service Provider in india
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic6}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">Language Application</h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    You can send SMS in more than 15 languages by using our
                    transliteration application. In a single SMS you can use 70
                    unicode characters and style them in best possible way. So
                    Why Are You Waiting Contact Best Bulk sms Service 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic8}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">Tracking and Reporting</h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    You can pull timely reports from the server by using your
                    Account. Tracking of SMS is enabled for live reports and
                    Scheduled Reports.Best Bulk sms Service Provider in India
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic7}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">Load BalanceSMPP</h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    The auto shwicher functions manage SMPP from backend, when
                    any SMPP have heavy load/Down then its auto switch to
                    another one. Consult Best Bulk sms Service Provider in india
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic3}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2"> Clear Delivery Report</h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    With this you can check individual sms report with live status, DLR
                    give you assurity that your sms delivered according to TRAI
                    Guidelines.Consult with the Best Bulk sms Service Provider in india.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card choose">
                <center>
                  <img
                    src={ic5}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">10 Services in One Panel</h4>
                  <p class="card-text mt-2" style={{ fontSize: "17px" }}>
                    You can manage 10 services from one web panel likes: Promo
                    sms, Trans. SMS, Voice Call, MissCall, IVR and more..
                    Consult Best Bulk sms Service Provider in india, Bulk email
                    service provider in india
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <br/>
      <div className="container-fluid" style={{ height: "auto"}}  >
        <div className="container ">
          <div className="row mt-5">
            <div className="col-sm-6">
              <img
                src={anilsir}
                className="img-fluid"
                style={{ height: "550px" }}
              />
            </div>
            <div className="col-sm-6">
              <h1 className="" style={{ fontFamily: "Poppins', sans-serif" }}>
                MR. ANIL VERMA (CEO)
              </h1>
              <p
                className=""
                style={{ fontSize: "17px", fontFamily: "Poppins', sans-serif" }}
              >
                An important aspect of entrepreneurship is the ability to manage
                and lead a team. As an entrepreneur, Mr. Anil Verma often is
                responsible for recruiting, training, and motivating employees,
                as well as managing resources and finances. This requires strong
                communication and leadership skills, as well as the ability to
                delegate tasks and make difficult decisions.
                <br />
                <br /> Anil Verma started his journey 16 years back when the
                technology of A2P (Bulk-Sms) was introduced in the market. “The
                road to success is never easy” keeping that in mind he entered
                the A2P (Bulk-Sms) business and then there was no going back.
                The real struggle and hardship started with a lot of hard work,
                dedication, and focus prime routines were followed to achieve
                goals and vision.
                <br />
                <br /> Starting from having an office in Jalandhar, Punjab to
                now having accomplishments in the national & Global Markets.
                Then the journey took him to Delhi- The Capital Of India, which
                inevitably opened the door for the Company’s Global Ventures,
                and now proudly with all the persistent & hard work OM
                ENTERPRISES is present in London(UK) & Australia.
              </p>          
            <ul style={{ fontSize: "16px" }}>
              <li>
                <b>Om Enterprises</b>
              </li>
              <li>
                <b>Om Enterprises Global Limited UK</b>
              </li>
              <li>
                <b>Om Graphics & Innovations</b>
              </li>
              <li>
                <b>Om Digital & Technology Solutions</b>
              </li>
              <li>
                <b>Om Investment</b>
              </li>
              <li>
                <b>Om Education & Training</b>
              </li>
              <li>
                <b>Reyansh Motion Pictures</b>
              </li>
            </ul>
            
            </div>
          </div>
          
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#f7fbff" }}>
        <div className="container">
          <h1 className="text-center mt-5" style={{ fontFamily: "Poppins', sans-serif" }}>
            {" "}
            Meet Our Team
          </h1>
          <div className="container">
            <div className="row text-center mt-5">
              <div className="col-sm-5"></div>
              <div className="col-sm-2">
                <img src={sunaina} className="img-fluid" />
                <h4 className="mt-2">General Manager</h4>
                <hr />
                <p>Mrs. Sunaina</p>
              </div>
              <div className="col-sm-5"></div>
            </div>
            <div className="row text-center mt-3">
              <div className="col-sm-3"></div>
              <div className="col-sm-2">
                <img src={kamal} className="img-fluid" />
                <h4 className="mt-2">Sr. Designer</h4>
                <hr />
                <p>Mr. Kamaldeep Vashisht</p>
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm-2 ">
                <img src={khushi} className="img-fluid" />
                <h4 className="mt-2">Sr. Manager</h4>
                <hr />
                <p>Ms. Khushdeep Kaur</p>
              </div>
              <div className="col-sm-3"></div>
            </div>
            <div className="row text-center mt-3">
              <div className="col-sm-2"></div>
              <div className="col-sm-2">
                <img src={archit} className="img-fluid" />
                <h4 className="mt-2">Web Developer</h4>
                <hr />
                <p className="">Mr. Archit Deora</p>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <img src={digamber} className="img-fluid" />
                <h4 className="mt-2">Web Developer</h4>
                <hr />
                <p>Mr. Digamber Jha</p>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-2 ">
                <img src={kavita} className="img-fluid" />
                <h4 className="mt-2">Web Developer</h4>
                <hr />
                <p>Ms. Kavita</p>
              </div>
              <div className="col-sm-2"></div>
            </div>
            <div className="row text-center mt-3">
              <div className="col-sm-2 mx-4">
                <img src={kavita} className="img-fluid" />
                <h4 className="mt-2">Graphic Designer</h4>
                <hr />
                <p>Ms. Kavita</p>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <img src={khushi} className="img-fluid" />
                <h4 className="mt-2">Graphic Designer</h4>
                <hr />
                <p>Ms. ishita</p>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <img src={kamal} className="img-fluid" />
                <h4 className="mt-2">Graphic Designer</h4>
                <hr />
                <p>Mr. Kamal </p>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <img src={sunaina} className="img-fluid" />
                <h4 className="mt-2">Graphic Designer</h4>
                <hr />
                <p>Ms. Teena</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer/>
    </>
  );
};

export default About;
