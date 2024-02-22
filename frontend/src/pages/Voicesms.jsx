import React from "react";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";
import "../pages/services.css";
import voice from "../assets/voice4.png";
import clock from "../assets/clock.png";
import chat from "../assets/chat.png";
import laptop from "../assets/laptop.png";
import support from "../assets/support1.png";
import Footer from "../components/Footer";
import sms from "../assets/sms.png";
import comments from "../assets/comments.png";
import user2 from "../assets/user2.png";
import next from "../assets/next.png";

const Voicesms = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="container-fluid back">
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}
        >
          <div className="row" style={{ fontSize: "18px", color: "black" }}>
            <div className="col-sm-6 mt-5 ">
              <h1
                className="mt-5"
                style={{ fontSize: "130px", marginLeft: "-100px" }}
              >
                VOICE
              </h1>

              <h1
                className="mb-5"
                style={{ fontSize: "130px", marginLeft: "46px" }}
              >
                SMS
              </h1>

              <h2 className="mx-5" style={{ color: "grey" }}>
                {" "}
                Top Voice Call Provider
              </h2>
            </div>

            <div className="col-sm-6">
              <img
                src={voice}
                className="img-fluid"
              
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1
            className="text-center mt-5"
            style={{ fontFamily: "Poppins', sans-serif" }}
          >
            Why Voice Calls Are Important
          </h1>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={clock}
              className="img-fluid mt-5"
              style={{ height: "95px", width: "40%" }}
            />
            <p className="mt-4">
              {" "}
              Send time-sensitive communications without
              <br /> missing an alert ever{" "}
            </p>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={chat}
              className="img-fluid mt-5"
              style={{ height: "95px", width: "40%" }}
            />
            <p className="mt-4">
              {" "}
              One of the top 3 <br /> communication channels <br />
              used by all customers{" "}
            </p>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={laptop}
              className="img-fluid mt-5"
              style={{ height: "100px", width: "40%" }}
            />
            <p className="mt-3">
              Highly preferred channel to <br /> get in touch with customer{" "}
              <br />
              support{" "}
            </p>
          </div>
          <div className="col-sm-3 text-center bodr mb-5">
            <img
              src={support}
              className="img-fluid mt-5"
              style={{ height: "100px", width: "40%" }}
            />
            <p className="mt-3">
              {" "}
              Automate your customer
              <br /> care & build interactive <br />
              customer journeys{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <h2 className="mt-5">WE PROVIDE BEST VOICE SMS SERVICE</h2>
        <p
          className="mt-2"
          style={{
            fontFamily: "Poppins', sans-serif",
            fontSize: "20px",
            color: "black",
            width:"80%"
          }}
        >
          A Voice Messaging System or Service, also known as Voice Broadcasting,
          is the process by which an individual or organization sends a
          pre-recorded message to a list of contacts without the need to
          manually dial each number. One Call Now’s automated voice messaging
          service delivers these messages within minutes, and also provides the
          ability to deliver a customized message if the call reaches voicemail,
          and to request touch-tone responses from recipients.
        </p>
      </div>

      <div className="container text-center mt-5 mb-5">
        <h2>VOICE MESSAGING FEATURES</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <center>
                <img
                  src={comments}
                  class="card-img-top mt-3"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
              </center>
              <div class="card-body">
                <h5 class="card-title"> Easily message on-the-go</h5>
                <p class="card-text">
                  People speak about four times faster than they type, making
                  voice messaging great for explaining longer or more complex
                  ideas without the time and involvement of typing and editing a
                  message. It’s also helpful for when you’re on the move and
                  don’t have time to stop and type.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <center>
                <img
                  src={user2}
                  class="card-img-top mt-3"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
              </center>
              <div class="card-body">
                <h5 class="card-title"> Get to it when you can</h5>
                <p class="card-text">
                  Leaving a voice message can often better for a recipient than
                  calling them since they can listen and respond when they have
                  a free moment.Voice messages allow the recipient to listen to
                  your message at their convenience. Voice messages provide
                  flexibility for both parties.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <center>
                <img
                  src={next}
                  class="card-img-top mt-3"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Better express yourself</h5>
                <p class="card-text">
                  Speaking in your own voice allows you to build a more personal
                  connection and effectively communicate. It’s easier for your
                  tone and personality to come through, which can sometimes get
                  lost in translation in written communications.It allows for
                  immediate feedback through vocal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Voicesms;
