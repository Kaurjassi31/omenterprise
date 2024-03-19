import React from 'react'
import "../App.css";

const Round = () => {
  return (
    <>
    <div className="container-fluid" >
    <div className="container text-center mt-3 mb-3" >
        <div className="row">
          <h1 className="text-center mb-5 " style={{  }}>
            WE WORK WITH
          </h1>
          <div className="col-sm-1"></div>
          <div className="col-sm-2 zoom-in-out roundd mt-1 mb-5 bg-info">
            <h2 className=" rounddtext">Startups</h2>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2 zoom-in-out roundd mt-1 mb-5 bg-info">
            <h2 className=" rounddtext">Agencies</h2>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2 zoom-in-out roundd mt-1 mb-5 bg-info">
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
