import React from 'react'
import "../pages/indexnew.css";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";
import plan from "../assets/plan.png";
import cross1 from "../assets/cross1.png";

const Moneyflow = () => {
  return (
    <>
    
    <div className="container-fluid " style={{ backgroundColor: "#f8fcff" }}>
        <h1 className="text-center" style={{ padding: "1%" }}>
          👨‍💻 <b>Money Flow Matrix</b>
        </h1>
        <h6 className="text-center">
          The Most Powerful Business Suite with No Feature Restriction....
          Without the High Costs 👍
        </h6>
        <center>
          <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
              <div class="col">
                <div class="card h-100">
                  <center>
                    <p className="mt-3">STANDARD</p>
                    <img
                      src={plan}
                      class="card-img-top"
                      className="img-fluid mt-1 mb-1"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </center>
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>PACKAGE 1</b>
                    </h4>
                    <button style={{height:"40px",width:"50%",backgroundColor:"white",color:"#006df9"}}>
                      TIER 1
                    </button>
                    <strike>
                      {" "}
                      <p className='mt-3'>normally $887</p>
                    </strike>
                    <h2>
                      <b>$575/-</b>
                      <span>
                        <h6>/month</h6>
                      </span>
                    </h2>
                    <a href='account'>
                    <button
                      type="button"
                      class="btn btn-primary mb-2 mt-2"
                      style={{ width: "70%", height: "45px" }}
                    >
                      BUY NOW
                    </button>
                    </a>
                    <a href='account' style={{textDecoration:"none"}}>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹47,999 / month
                      </p></a>
                    <hr />
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={c1} className="img-fluid" />
                      </div>
                      <div className="col-sm-10">
                        <p style={{ fontSize: "15px" }}>
                          Bulk SMS @ 1000 / Daily ₹12,000 Monthly
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c2} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            WhatsApp SMS @ 1000/Daily ₹12,000
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c4} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Social Media 10 Posts,10 Reels ₹50,000
                          </p>
                        </div>
                      </div>
                      <strike>
                        <div className="row">
                          <div className="col-sm-2">
                            <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              SEO @ 15 keywords/month ₹35,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Website Analytical Scanning @ 2times /week ₹35,000
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Google Business Management 30 Posts/month ₹47,999
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              QR Codes for all platforms one time provider
                              ₹25,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Videography 4 visits in 9 months ₹40,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Ad Budget included ₹20,000
                            </p>
                          </div>
                        </div>
                        <div className="row mb-5">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              A.P.I integration of SMS to company
                              platforms/software ₹10,000
                            </p>
                          </div>
                        </div>
                      </strike>

                      <strike>
                        {" "}
                        <p className="mt-3 text-dark">Total Price 74,000/-</p>
                      </strike>
                      <a href='account' style={{textDecoration:"none"}}>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹47,999 / month
                      </p></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <center>
                    <p className="mt-3">PRO</p>
                    <img
                      src={plan}
                      class="card-img-top"
                      className="img-fluid mt-1 mb-1"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </center>
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>PACKAGE 2</b>
                    </h4>
                    <button style={{height:"40px",width:"50%",backgroundColor:"white",color:"#006df9"}}>
                      TIER 2
                      
                    </button>
                    <strike>
                      <p className='mt-3'>normally $1499</p>
                    </strike>
                    <h2>
                      <b>$791/-</b>
                      <span>
                        <h6>/month + G.S.T</h6>
                      </span>
                    </h2>
                    <a href='account'>
                    <button
                      type="button"
                      class="btn btn-primary mb-2 mt-2"
                      style={{ width: "70%", height: "45px" }}
                    >
                      BUY NOW
                    </button></a>
                    <a href='account' style={{textDecoration:"none"}}>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹65,999 / month
                      </p></a>
                    <hr />
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={c1} className="img-fluid" />
                      </div>
                      <div className="col-sm-10">
                        <p style={{ fontSize: "15px" }}>
                          Bulk SMS @ 2000 / Daily ₹15,000 monthly
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c2} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            WhatsApp SMS @ 2000/Daily ₹15,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c3} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Voice SMS @ 2000/Daily ₹30,000
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c4} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Social Media 15 Posts,15 Reels ₹65,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            SEO @ 15 keywords/month ₹35,000
                          </p>
                        </div>
                      </div>
                      <strike>
                        <div className="row">
                          <div className="col-sm-2">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Website Analytical Scanning @ 2times /week ₹35,000
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Google Business Management 30 Posts/month ₹47,999
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              QR Codes for all platforms one time provider
                              ₹25,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Videography 4 visits in 9 months ₹40,000
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              Ad Budget included ₹20,000
                            </p>
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col-sm-2 ">
                          <img src={cross1} className="img-fluid" style={{height:"25px"}} />
                          </div>
                          <div className="col-sm-10">
                            <p style={{ fontSize: "15px" }}>
                              A.P.I integration of SMS to company
                              platforms/software ₹10,000
                            </p>
                          </div>
                        </div>
                      </strike>
                      <strike>
                        {" "}
                        <p className="mt-2 text-dark">Total Price 1,25,000/-</p>
                      </strike>
                      <a href='account' style={{textDecoration:"none"}}>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹65,999 / month
                      </p></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <center>
                    <p className="mt-3">ULTIMATE</p>
                    <img
                      src={plan}
                      class="card-img-top"
                      className="img-fluid mt-1 mb-1"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </center>
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>PACKAGE 3</b>
                    </h4>
                    <select style={{height:"40px",width:"50%",backgroundColor:"white",color:"#006df9"}}>
                      <option>TIER 3</option>
                      <option>TIER 4</option>
                      <option>TIER 5</option>
                      <option>TIER 6</option>
                    </select>
                    
                     <strike>
                      <p className='mt-3'>normally $4402</p>
                    </strike>
                    <h2>
                      <b>$2399</b>
                      <span>
                        <h6>/month + TAX 18%</h6>
                      </span>
                    </h2>
                    <a href='account'>
                    <button
                      type="button"
                      class="btn btn-primary mb-2 mt-3"
                      style={{ width: "70%", height: "45px" }}
                    >
                      BUY NOW
                    </button></a>
                    <a href='account' style={{textDecoration:"none"}}>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹1,99,999 / month
                      </p>
                      </a>
                    <hr />

                    <div className="row">
                      <div className="col-sm-2">
                        <img src={c1} className="img-fluid" />
                      </div>

                      <div className="col-sm-10">
                        <p style={{ fontSize: "15px" }}>
                          Bulk SMS @ 5000/Daily ₹30,000 monthly
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c2} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            WhatsApp SMS @ 5000/Daily ₹30,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c3} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Bulk Emails @ 5000/Daily ₹25,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c4} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Social Media 30 Posts,15 Reels ₹47,999
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            SEO @ 15 keywords/month ₹35,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Website Analytical Scanning @ 2times /week ₹35,000
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Google Business Management 30 Posts/month ₹47,999
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            QR Codes for all platforms one time provider ₹25,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Videography 4 visits in 9 months ₹40,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            Ad Budget included ₹20,000
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 ">
                          <img src={c5} className="img-fluid" />
                        </div>
                        <div className="col-sm-10">
                          <p style={{ fontSize: "15px" }}>
                            A.P.I integration of SMS to company
                            platforms/software ₹10,000
                          </p>
                        </div>
                      </div>
                      <strike>
                        {" "}
                        <p className="mt-4 text-dark">Total Price 3,66,998/-</p>
                      </strike>
                      <a href='account' style={{textDecoration:"none"}}>
                      <p className="mt-1 text-primary">
                        Buy In INR ₹1,99,999 / month
                      </p>
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h4 className="mt-5">
              😍<b>EXTRA BONUS OFFERS</b>
            </h4>
            <p className="mt-2 text-dark">
              12 Months together -- <b> 15% Extra Off</b>
            </p>
            <p className="mt-1 text-dark">
              6 Months together -- <b>5% Extra Off</b>
            </p>
            <p className="mt-1 mb-5 text-dark">
              3 Months together -- <b>No Extra Off</b>
            </p>
          </div>
          <div className="row">
            <h4 className="">
              All Govt. registration has to be beared by the user
            </h4>
            <p className="mt-1 mb-5 text-dark">
              <b>DLT Cost -- 5000 + 18% -- 5900/-</b>
            </p>
          </div>
        </center>
      </div>
      
    </>
  )
}

export default Moneyflow
