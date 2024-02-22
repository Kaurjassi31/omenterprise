import React from 'react'
import policy from "../assets/website2.jpg";

const Privacy = () => {
  return (
    <>
     <div className="container-fluid">
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}
        >
          <h1 className="mt-5" style={{ fontSize: "65px" }}>
           PRIVACY POLICY
          </h1>

          <img src={policy} className="img-fluid mt-2" />
        </div>
      </div>
      
    </>
  )
}

export default Privacy
