import React from "react";
import "../assets/css/indexnew.css";

// import { StyleClass } from 'primereact/styleclass';

import Nav from "../components/Nav";
import web3 from "../assets/images/w1.jpg";
import people from "../assets/images/people.png";
import pin from "../assets/images/pin.png";
import mobile2 from "../assets/images/mobile2.png";
import star2 from "../assets/images/star2.png";
import website1 from "../assets/images/website1.png";
import Footer from "../components/Footer";

const Website = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div
          className="container text-center"
          style={{
            padding: "1%",
          }}
        >
          <h1 className="mt-2" style={{ fontSize: "50px" }}>
            WEBSITE DESIGNING & DEVELOPMENT
          </h1>
        </div>
        <div className="container">
          <img src={web3} className="img-fluid" style={{ height: "500px" }} />
        </div>
      </div>

      <div className="container" >
        <div className="row">
          <h1
            className="text-center mt-5"
          
          >
            Website Designing Company in india | Let’s Get to Work
          </h1>
          <div className="col-sm-3 text-center bodr">
            <img
              src={star2}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h5 className="mt-3">
              Quality <br />
              Guaranteed
            </h5>
          </div>
          <div className="col-sm-3 text-center bodr">
            <img
              src={people}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h5 className="mt-3">
              Experienced <br />
              Developers
            </h5>
          </div>
          <div className="col-sm-3 text-center bodr">
            <img
              src={mobile2}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h5 className="mt-3">
              Excellent
              <br />
              Communication
            </h5>
          </div>
          <div className="col-sm-3 text-center bodr">
            <img
              src={pin}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h5 className="mt-3">
              Great <br /> Support
            </h5>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid text-center " style={{ backgroundColor: "#f8fcff"}}>
        <h1 className="mt-5">OUR PORTFOLIO</h1>
        <h4 className="mt-3">WEBSITE</h4>
        <img
          src={website1}
          className="img-fluid mt-4"
          style={{ width: "70%" }}
        />

<div
        className="container-fluid"
        style={{ backgroundColor: "#f8fcff", color: "black" }}
      >
        <div className="container mt-2">
          <h2 className="mt-4">
          Best Web Design Services  |  Web Development Services </h2>
        
          <ul style={{textAlign:"left"}}>
            <li>
              Creative, talented graphic designers to deliver stand out, fresh,
              innovative looks
            </li>
            <li>
              {" "}
              SEO optimized design and navigation structure, responsive design
              for seamless integration into the mobile environment
            </li>
            <li> Rich content written by specialist writers</li>
            <li>
              {" "}
              Custom approach involving market research, understanding of
              client’s business, target audience and competition
            </li>
            <li>
              Full support for modifications as your business grows and markets
              evolve
            </li>
          </ul>
        </div>
        <br />
      </div>

        
      </div>


      <Footer />
    </>
  );
};

export default Website;
