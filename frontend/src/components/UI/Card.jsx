import React from "react";
import Button from "./Button";

const Card = (props) => {
  const titleStyles = {
    "font-size": "20px",
    "line-height": "18px",
    "padding-bottom": "5px",
    "font-weight": "400",
    "fontFamily": "Poppins', sans-serif"
   

  };
  return (
    <div className="col">
      <div className="card">
        <img src={props.img} className="card-img-top mx-5" style={{height:"170px",width:"60%"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={titleStyles}>{props.title}</h5>
          <p className="card-text" style={{fontFamily:"Poppins', sans-serif",textDecoration:"none"}} >
           {props.children}
          </p>
         
         
        </div>
      </div>
    </div>
  );
};

export default Card;
