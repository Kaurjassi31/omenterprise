import React from "react";
import "../pages/indexnew.css";
import dlt from "../assets/dlt.jpg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Dlt = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mb-5">
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}>
          <div className="row">
            <img src={dlt} className="img-fluid" style={{ height: "450px" }} />
          </div>
          </div>
          <div className="container-fluid mb-5" style={{backgroundColor:"#f8fcff"}}>
<div className="container">

          <p className="mt-5 mb-5">
            is a digital system for keeping and managing the record of sender
            IDs and template.
            <b>
              TRAI has introduced an advanced extension of the Blockchain –
              Distributed Ledger Technology (DLT) to prevent spam Guidelines for
              Distributed Ledger Technology (DLT) for Enterprises
            </b>
            Enterprises need to register with the Operator’s DLT platform by
            submitting necessary business documents. Enterprises need to select
            a Registered Telemarketer (RTM) and permit them to perform functions
            on their behalf. Enterprises need to acquire consent from consumers
            (mobile subscribers) through SMS, Web or Mobile App and upload them
            on the DLT platform. It is mandatory for any entity that intends to
            send a communication through messaging and voice gateway on the DLT
            platforms. Telemarketers and end-users have to register on the DLT
            platforms separately. Header (Sender ID) registration: Messages are
            classified into promotional, transactional, service explicit and
            service implicit which are registered and every header gets a unique
            Header ID that is shared across other DLT platforms seamlessly. All
            headers and templates on the platform should be registered. Content
            Template Registration: Entities are required to register all their
            templates on the DLT system. Every template gets a unique Template
            ID that is shared across other DLT platforms uniformly. You can go
            to below Operator DLT Registration portals:
          </p>
          <a href="https://smartping.live/entity/reg-as ">
            https://smartping.live/entity/reg-as (Videocon DLT URL) Om
            Enterprises TM ID : 1702157769397119438
          </a>
          <p className="mt-4">
            Note: All request will be received at Operator and post KYC request
            will be approve on DLT.
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dlt;
