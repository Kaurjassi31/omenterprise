import React from 'react'
import Nav from '../components/Nav'
import about from "../assets/images/about.gif";
import mission from "../assets/images/mission1.png";
import Round from "../components/Round";
import ic1 from "../assets/images/ic1.png";
import ic2 from "../assets/images/ic2.png";
import ic3 from "../assets/images/ic3.png";
import ic4 from "../assets/images/ic4.png";
import ic5 from "../assets/images/ic5.png";
import ic6 from "../assets/images/ic6.png";
import ic7 from "../assets/images/ic7.png";
import ic8 from "../assets/images/ic8.png";
import anil from "../assets/images/anilsir.png";
import Footer from '../components/Footer';
import sunaina from "../assets/images/Sunaina.png";

const Aboutus = () => {
  return (
    <>
    <Nav/>
    <div
        className="container-fluid">
        <div className="container text-center" style={{ padding: "1%" }}>
          <h1 className="mt-1" style={{ fontSize: "60px" }}>
            ABOUT US
          </h1>
          </div>
          <div
            className=" mb-5 text-center" >
            <img src={about} className="img-fluid" style={{height:"450px"}} />
          </div>
      </div>
      <div className="container">
        <div className="row">
        <h1>WHO WE ARE</h1>
        </div>
        <div className="container text-center">
            <h6><b>
(15000+ Customer And Resellers Serving from 12+ Year)</b>
</h6>
        </div>
       <h6 className='text-center mt-2' style={{width:"80%"}}>
Om Enterprises Group is a leading company in A2P and P2P bulk SMS and digital marketing. We provide bulk SMS service in all over India.We provide highly reliable and innovative APIs to send various bulk email, bulk voice SMS and internet marketing for promotion. We also provide customized bulk messaging services as required by our clients.We are here with advanced technology and techniques for business establishments and Growth. We are in the new millennium and need appropriate communication solutions for better business association and client’s satisfaction.Our comprehensive range of Bulk SMS Service, Short Code, Long-code service, Missed call alert service, Voice call service, IVR service, and Toll-Free Service for Business Promotion Consultation, Online Reputation Management will commence a new and different way to deal. Our promotion strategies are customized and suitable for all industries.
</h6>
    
      </div>
      <div className="container">
        <div className="row">
          <div data-aos="fade-up" className="col-sm-4 mt-5 text-center">
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
          <div data-aos="fade-down" className="col-sm-4 mt-5 text-center">
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
          <h1 className="mt-5 text-center">OUR AWESOME FEATURES</h1>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-4 mb-4">
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
                    style={{ height: "40px", width: "40px"}}
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
      <div className="container-fluid" style={{ height: "auto"}}  >
        <div className="container ">
          <div className="row mt-5">
            <div className="col-sm-6">
              <img
                src={anil}
                className="img-fluid"
                style={{ height: "550px" }}
              />
            </div>
            <div className="col-sm-6">
              <h1 className="" style={{ }}>
                MR. ANIL VERMA (CEO)
              </h1>
              <p
                className=""
                style={{ fontSize: "17px" }}
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
      {/* <div className="container">
    <div className="container mt-2">
        <h2>Manager</h2>
    </div>
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10 text-center ">
            <img src={sunaina} className='img-fluid teamgraph' />
            <h5 className='mt-2'> Mrs. Sunaina</h5>
            <h6>(HR Head)</h6>
        </div>
        <div className="col-sm-1"></div>
    </div>
    <div className="container mt-2">
        <h2> Team Heads</h2>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-sm-4 text-center ">
                <img src={sunaina} className='img-fluid teamgraph' />
                <h5 className='mt-2'> Mr.Archit Deora</h5>
                <h6>(Web Development)</h6>
            </div>
            <div className="col-sm-4 text-center">
                <img src={sunaina} className='img-fluid teamgraph' style={{borderRadius:"50%"}} />
                <h5 className='mt-2'> Ms. Khushdeep </h5>
                <h6>(Message Department)</h6>
            </div>
            <div className="col-sm-4 text-center">
                <img src={sunaina} className='img-fluid teamgraph' style={{borderRadius:"50%"}} />
                <h5 className='mt-2'> Mr. Ashish Thakur</h5>
                <h6>(Graphic Designer)</h6>
            </div>
        </div>
    </div>
</div> */}
{/* <div className="container"  style={{ backgroundColor: "#f8fcff" }}>
    <div className="sales mt-5 mb-5">
        <h4 className='mt-4 text-center'><b>SALES/PROJECT INQUIRIES </b></h4>
        <ul className='mx-5' style={{textDecoration:"none",listStyle:"none"}}>
          <li className='mt-4'><b> For Sales & Project :</b> 91-9872144408</li>
          <li className='mt-2'><b>For Sales & Project : </b>info@omenterprisesgroup.in</li>
          <li className='mt-2'><b>For Support :</b> 0181-4603134</li>
          <li className='mt-2'><b>For Support : </b>support@omenterprisesgroup.in</li>
          <li className='mt-2'><b>Address:</b> 770 Mota Singh Nagar, Jalandhar</li>
          </ul>
                     <center>
                     <a href='https://www.google.com/maps/dir/31.4329486,75.713901/om+enterprise+group+jalandhar/@31.3720023,75.5735219,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391a5a4cc0ad9285:0x17f4ce0cd780878a!2m2!1d75.590233!2d31.3112416?entry=ttu'><button
                      type="button"
                      class="btn btn-primary mb-2 mt-2"
                      style={{ width: "70%", height: "45px" }}
                    >
                      FIND US
                    </button></a>
                    </center>



    </div>
</div> */}


      <Footer />
   
    </>
  )
}

export default Aboutus
