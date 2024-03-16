import React from "react";
import "../pages/indexnew.css";

// import { StyleClass } from 'primereact/styleclass';

import Nav from "../components/Nav";
import web3 from "../assets/w1.jpg";
import people from "../assets/people.png";
import pin from "../assets/pin.png";
import mobile2 from "../assets/mobile2.png";
import star2 from "../assets/star2.png";
import website from "../assets/w.gif";
import website1 from "../assets/website1.png";
import Footer from "../components/Footer";
import w2 from "../assets/w3.gif";

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

      <div className="container" style={{ fontFamily: "Poppins', sans-serif" }}>
        <div className="row">
          <h1
            className="text-center mt-5"
            style={{ fontFamily: "Poppins', sans-serif" }}
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
      <div className="container-fluid text-center mt-4">
        <h1>OUR PORTFOLIO</h1>
        <h4 className="mt-3">WEBSITE</h4>
        <img
          src={website1}
          className="img-fluid mt-4"
          style={{ width: "70%" }}
        />
      </div>

      <div
        className="container-fluid"
        style={{ backgroundColor: "#f8fcff", color: "black" }}
      >
        <div className="container mt-2">
          <h2 className="mt-4">
            Website Designing Company in india | Best Web Design Services in
            india
          </h2>

         
          <h4 className="mt-2">
            Best Web Design Services in india | Customized Website Designing
          </h4>
          <ul>
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
        <div className="container text-center">
          <img
            src={website}
            className="img-fluid mt-2"
            style={{ height: "300px" }}
          />
        </div>

        <div className="container mt-5">
          <h4>Web Development Services | Website Development</h4>
          <p className="mt-3 ">
            A website today powers your business and serves as the common
            platform for interaction between staff, customers, vendors and
            members of the general public. Underlying a visually stimulating
            interface is the programming aspect responsible for a variety of
            features and functions. Get Web Development Services From Us Today.
          </p>
          <p className="">
            Flexible, adaptable and aligned with our customers’ objectives we
            offer website development based on{" "}
          </p>
          <div className="row">
            <div className="col-sm-6">
              <img src={w2} className="img-fluid mt-3" style={{height:"220px"}} />

            </div>
            <div className="col-sm-6 mt-5">
            <ul>
            <li>Open source technologies like PHP/MySQL</li>
            <li>Asp.NET development </li>
            <li>Responsive, mobile website development </li>
            <li>WordPress</li>
          </ul>
            </div>
          </div>
        
        </div>
        <br />
        <br />
       
      </div>

      <Footer />
    </>
  );
};

export default Website;
