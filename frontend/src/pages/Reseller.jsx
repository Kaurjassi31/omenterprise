import React from "react";
import "../pages/indexnew.css";
import Nav from "../components/Nav";
import reseller from "../assets/rslr.jpg";
import like from "../assets/like.png";
import Footer from "../components/Footer";


const Reseller = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid " style={{ backgroundColor: "#e5dbd1" }}>
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}
        >
          <img
            src={reseller}
            className="img-fluid"
            style={{ height: "500px", width: "100%" }}
          />
        </div>
      </div>
      <div className="container text-center">
        <h1 className="mt-3">Feel Free as our SMS Reseller Partner</h1>
        <div className="container">
          <h6>
            Become a Reseller and earn large chunk of money with no setup cost.
          </h6>
          <div class="row row-cols-1 row-cols-md-5 mt-4 g-4">
            <div class="col" data-aos="flip-left">
              <div class="card">
                <center>
                  <img
                    src={like}
                    class="card-img-top mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">
                    No Setup <br /> Cost
                  </h5>
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="card">
                <center>
                  <img
                    src={like}
                    class="card-img-top mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">Open Sender ID</h5>
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="card">
                <center>
                  <img
                    src={like}
                    class="card-img-top mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">Open Message </h5>
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="card">
                <center>
                  <img
                    src={like}
                    class="card-img-top mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>{" "}
                <div class="card-body">
                  <h5 class="card-title">
                    No <br />
                    Contracts
                  </h5>
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="card">
                <center>
                  <img
                    src={like}
                    class="card-img-top mt-3"
                    style={{ height: "60px", width: "60px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h5 class="card-title">Lifetime Validity</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h6 className="mt-4">
          Welcome to Om Enterprises- The Leaders in Bulk SMS Resellers India For
          Any Help Call Us Anywhere Anytime On +91-9872144408
        </h6>
      </div>
      <div className="container">
        <button type="button" class="btn btn-primary mt-4">
          Get Reseller Account
        </button>
      </div>
      


      <div className="container-fluid mt-3" style={{backgroundColor: "#f8fcff"}}>
        <div className="container">
        <h1 className="mt-4">FAQ</h1>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <h4>1. What is your reseller procedure?</h4>
            <h6>
              To make our services and pricing flexible, we follow “Open Door”
              procedure for our valuable resellers. Get in touch with us and we
              will do what best we can to get you started as our reseller
              partner.
            </h6>
          </div>
          <div className="col-sm-6">
            <h4>2. Can I manage my client’s by my own?</h4>
            <h6>
              Yes, you have all the freedom to manage your clients on your own.
              Our team never connects with the clients of our resellers, it is
              completely against the policies and procedures we have in place.
            </h6>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-sm-6 mb-5">
            <h4>3. How to manage clients as a reseller?</h4>
            <h6>
              We have provided the option of manage clients in the panel from
              where you can add remove and manage all your contacts and groups,
              it is a user-friendly interface that makes managing clients
              easier. In no way, we communicate with the clients who belong to
              resellers.
            </h6>
          </div>
          <div className="col-sm-6 mb-5">
            <h4>
              4. Why do I choose you, if I am getting the same price from
              another company?
            </h4>
            <h6>
              Quality of service is what separates us from the rest in the same
              domain. Our unparalleled technical support, robust API and
              commitment to excellence makes us the first choice of people who
              want to become a reseller of bulk SMS
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reseller;
