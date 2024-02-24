import React from "react";
import policy from "../assets/digitalnew.jpg";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";

const Privacy = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <div
        className="container-fluid mt-5 "
        style={{
          padding: "3%",
        }}
      >
        <h1 className="mt-5 text-center" style={{ fontSize: "65px" }}>
          PRIVACY POLICY
        </h1>
        <div className="container text-center">
          <img src={policy} className="img-fluid" />
        </div>
      </div>
      <div className="container">
        <h6>
          At Om Enterprises Group, accessible from
          https://www.omenterprisesgroup.in/, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types
          of information that is collected and recorded by Om Enterprises Group
          and how we use it. If you have additional questions or require more
          information about our Privacy Policy, do not hesitate to contact us.
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Om Enterprises Group. This policy is not
          applicable to any information collected offline or via channels other
          than this website. Our Privacy Policy was created with the help of the
          Privacy Policy Generator and the Free Privacy Policy Generator.
        </h6>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "Start",
          }}
        >
          <h1> CONSENT</h1>
        </div>
        <h6>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms. For our Terms and Conditions, please visit the
          Terms & Conditions Generator. Information we collect The personal
          information that you are asked to provide, and the reasons why you are
          asked to provide it, will be made clear to you at the point we ask you
          to provide your personal information. If you contact us directly, we
          may receive additional information about you such as your name, email
          address, phone number, and the contents of the message and/or
          attachments you may send us, and any other information you may choose
          to provide. When you register for an Account, we may ask for your
          contact information, including items such as name, company name,
          address, email address, and telephone number.
        </h6>

        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "Start",
          }}
        >
          <h1>How we use your information</h1>
        </div>
        <ul>
          <li>
            We use the information we collect in various ways, including to:
          </li>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "Start",
          }}
        >
          <h1>Types of Data Collected</h1>
          </div>



       
    </>
  );
};

export default Privacy;
