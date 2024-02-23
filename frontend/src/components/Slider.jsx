import React from "react";

import theme from "../assets/digitalnew.jpg";
import theme1 from "../assets/software1.png";
import theme2 from "../assets/website.png";
import Button from "../components/UI/Button";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ padding: "9%" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 mt-5">
                  <h1 className=" text-bold mt-5" style={{color:"#023368"}}>
                    <b>
                      India’s No. 1 <br /> Bulk SMS Platform
                    </b>
                  </h1>
                  <p className="mt-5 ">
                    Om enterprises is a Premium Bulk SMS and Online Marketing
                    company empowering people to advertise their product in the
                    most innovative way.bulk messaging, is a powerful
                    communication tool that allows businesses to send 
                   text messages to their customers, clients.
                  </p>
                  <a href="bulksms"><Button/></a>
                </div>
                <div className="col-sm-6">
                  <img
                    src={theme}
                    class="d-block w-100"
                   className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 mt-5">
                  <h1 className=" text-bold mt-5" style={{color:"#023368"}}>
                    <b>
                      Best Website Design <br /> Services In India.
                    </b>
                  </h1>
                  <p className="mt-5 ">
                    Your website is a reflection of your company’s brand. It’s
                    therefore important to invest proper effort into portraying
                    a positive image online. Our web design company stands ready
                    to help you accomplish this goal and help in grow business.
                  </p>
                  <a href="website"><Button/></a>
                </div>
                <div className="col-sm-6">
                  <img src={theme1} class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 mt-5">
                  <h1 className=" text-bold mt-5" style={{color:"#023368"}}>
                    <b>
                      WhatsApp Bulk <br /> SMS
                    </b>
                  </h1>
                  <p className="mt-5 ">
                    Using bulk WhatsApp sender has become increasingly popular
                    among businesses and organizations as an efficient
                    communication tool. In 2024, utilizing the capabilities of a
                    reliable bulk WhatsApp sender to maximize your messaging
                    efficiency and reach.
                  </p>
                  <a href="whatsapp"><Button/></a>
                </div>
                <div className="col-sm-6">
                  <img src={theme2} class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
