import React from 'react'
import "../App.css";

const Round = () => {
  return (
    <>
    <div className="container-fluid" >
    <div className="container text-center mt-5 mb-5" >
        <div className="row">
          <h1 className="text-center mb-5 " style={{ fontFamily: "Poppins', sans-serif" }}>
            WE WORK WITH
          </h1>
          <div className="col-sm-1"></div>
          <div className="col-sm-2 zoom-in-out roundd mt-3 bg-info">
            <h2 className=" rounddtext">Startups</h2>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2 zoom-in-out roundd mt-3 bg-info">
            <h2 className=" rounddtext">Agencies</h2>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2 zoom-in-out roundd mt-3 bg-info">
            <h2 className=" rounddtext">Enterprises</h2>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Round
