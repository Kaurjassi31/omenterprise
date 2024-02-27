import React from "react";

const Accordion = () => {
  return (
    <>
    <div className="container">
      <h1 className="mt-4 mb-4" style={{color:"#023368"}}>Frequently Asked Questions</h1>
        <div class="accordion mx-auto" id="accordionExample" style={{width:"60%"}}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. What makes your OTP SMS Gateway reliable?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            we are always dedicated
            to providing quality service. Thus, we always make use of high-end
            technologies while utilising years of experience that we have
            gathered to provide reliable OTP SMS service.Thats Why We are Best
            Bulk sms Service Provider in india.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
          2. Within how much time does the
            OTP SMS reach customers?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            It usually takes around 2-6 seconds to
            reach the customers.Best Bulk sms Service Provider in india.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             3. How long is the OTP valid?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            OTP is valid for 15 minutes for one time use
            only.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
             4. How secure is OTP Verification? 
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            Our OTP SMS uses two-factor
            authentication which protects the data of the customers and keeps
            your website secured. Consult With Best Bulk sms Service Provider in
            india.
            </div>
          </div>
        </div>
      </div>
</div>
        
         </>
  );
};

export default Accordion;
