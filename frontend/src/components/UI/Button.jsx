import React from "react";

const Button = (props) => {
  return (
    <button
    className=" btn btn-primary mt-2"
    style={{
      backgroundColor:"#023368"
    }}
  
    >  Know More
    
      {props.children}
    </button>
  );
};

export default Button;
