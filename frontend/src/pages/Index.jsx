import React from "react";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";

const Index = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="container mt-5">
        <h1 className="mt-5 text-center" style={{ fontSize: "60px" }}>
          INDIA’S NO. 1 BULK SMS <br /> PLATFORM
        </h1>
        
      </div>
      <div
        className="container">
        <h4>Services We Provide</h4>
       </div>
       <div className="container">
        <l>
          <li>Bulk SMS</li>
          <li>Whatsapp Bulk SMS</li>
          <li> Voice SMS</li>
          <li>Bulk Emails</li>
        </l>
      </div>
    </>
  );
};

export default Index;
