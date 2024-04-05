import React from "react";
import "../assets/css/hovercard.css";

const Hovercard = () => {
  return (
    <div className="row mt-4">
      <h1
        className="mt-2"
        style={{ fontSize: "50px" }}
      >
        The Om Enterprises Corner
      </h1>
      <div className="col-sm-3 mt-3">
        <a class="card1" href="#">
          <h3>Market Leadership & Expertise</h3>
          <p class="small mt-2">
            Enjoy rich communication with our huge reachability
            and leadership across the world.
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
      <div className="col-sm-3 mt-3">
        <a class="card1" href="#">
          <h3>Reliable API & <br/> Integration</h3>
          <p class="small mt-2">
            Trustworthy APIs and simple integration enable trouble-free
            communication experience.
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>

      <div className="col-sm-3 mt-3">
        <a class="card1" href="#">
          <h3>Security & Compliance</h3>
          <p class="small mt-2">
            Avail the benefits of completely secure and robust
            infrastructure to simplify your communication process .
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
      <div className="col-sm-3 mt-3">
        <a class="card1" href="#">
          <h3>Omnichannel Communication</h3>
          <p class="small mt-2">
           Experience across all channels using
            process of  WBS(Work breakdown structure).
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hovercard;
