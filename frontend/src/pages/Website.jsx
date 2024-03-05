import React from "react";

// import { StyleClass } from 'primereact/styleclass';

import Nav from "../components/Nav";
import web3 from "../assets/web3.png";
import people from "../assets/people.png";
import pin from "../assets/pin.png";
import mobile2 from "../assets/mobile2.png";
import star2 from "../assets/star2.png";
import website from "../assets/website.png";
import website1 from "../assets/website1.png";  
import Footer from "../components/Footer";

const Website = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mt-5">
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}
        >
          <h1 className="mt-5" style={{ fontSize: "50px" }}>
            WEBSITE DESIGNING <br /> & DEVELOPMENT
          </h1>
          </div>
<div className="container">
          <img src={web3} className="img-fluid mt-2" />
        </div>
      </div>
      
      <div className="container" style={{ fontFamily: "Poppins', sans-serif" }}>
        <div className="row">
          <h1 className="text-center mt-5" style={{ fontFamily: "Poppins', sans-serif" }}>
           
Website Designing Company in india |  Let’s Get to Work

          </h1>
          <div className="col-sm-3 text-center bodr">
            <img
              src={star2}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h4 className="mt-3">Quality <br/>Guaranteed</h4>
            
          </div>
          <div className="col-sm-3 text-center bodr">
            <img
              src={people}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h4 className="mt-3">Experienced <br/>Developers</h4>
         
          </div>
          <div className="col-sm-3 text-center bodr">
            <img
              src={mobile2}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h4 className="mt-3">Excellent<br/>Communication</h4>
            
          </div>
          <div className="col-sm-3 text-center bodr">
            <img
              src={pin}
              className="img-fluid mt-5"
              style={{ height: "70px" }}
            />
            <h4 className="mt-3">Great <br/> Support</h4>
         
          </div>
        </div>
      </div>
      <br/><br/>
      <div className="container-fluid text-center mt-5">
        <h1>OUR PORTFOLIO</h1>
        <h4 className="mt-3">WEBSITE</h4>
        <img src={website1} className="img-fluid mt-4" style={{width:"70%"}} />
      </div>

<div className="container-fluid" style={{backgroundColor:"#023368",color:"white"}}>

      <div className="container mt-5">
        
 <h2 className="mt-5">Website Designing Company in india | Best Web Design Services in india</h2>

<p className="mt-3 text-light">Your website is a reflection of your company’s brand. It’s therefore important to invest proper effort into portraying a positive image online. Our web design company stands ready to help you accomplish this goal. As one of the most widely respected web design firms, our design expertise spans a wide spectrum ranging from on-page layout to custom logo creation. The quality and presentation of our designs will emphasize your brand and also increase engagement to drive more leads and deliver a greater return on investment.Consult To Website Designing Company in india & Best Web Design Services in india</p>
<h4 className="mt-4">Best Web Design Services in india | Customized Website Designing</h4>
<ul>
<li>Creative, talented graphic designers to deliver stand out, fresh, innovative looks</li>
<li> SEO optimized design and navigation structure, responsive design for seamless integration into the mobile environment</li>
<li> Rich content written by specialist writers</li>
<li>  Custom approach involving market research, understanding of client’s business, target audience and competition</li>
<li>Full support for modifications as your business grows and markets evolve</li>
    </ul>
      </div>
<br/>
<div className="container text-center">
<img src={website} className="img-fluid mt-2" />
</div>

      <div className="container mt-5">
        <h4>Web Development Services | Website Development</h4>
        <p className="mt-3 text-light">
          A website today powers your business and serves as the common platform
          for interaction between staff, customers, vendors and members of the
          general public. Underlying a visually stimulating interface is the
          programming aspect responsible for a variety of features and
          functions. Get Web Development Services From Us Today.
        </p>
        <p className="text-light">Flexible, adaptable and aligned with our customers’ objectives we offer
        website development based on </p>
        <ul>
        <li>Open source technologies like PHP/MySQL</li>
        <li>Asp.NET development </li>
        <li>Responsive, mobile website development </li>
        <li>WordPress</li>
        </ul>
        </div>
<br /><br />
<div className="container">
        <h4>Advantage for website development</h4>
        <ul>
        <li> Development based on research and understanding of clients, their objectives, products, markets and
        competition for optimized operational efficiency </li>
        <li>High technological features yet easy to use interface for best user experience </li>
        <li>Agile development process, scalable and modular architecture for easy upgrades
        as your business and needs evolve</li>
        <li> Capability to develop websites for
        individuals, portals, ecommerce sites, institutions, NGOs, Governments,
        financial and other services </li>
        <li>CMS optionally included to allow for easy
        updates on your own We are </li>
        </ul>
        <p className="text-light">established, have our offices and teams of
        competent staff and a global presence. When you entrust your web
        development to us you can have peace of mind knowing we will deliver the
        best and will be there in the future when you need support. Contact us
        For Getting Web Development Services From Us.</p>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default Website;
