import React from 'react'
import Nav from '../components/Nav'
import msg from "../assets/price.gif";
import call from "../assets/call2.png";
import Swiperr from "../components/Swiperr";
import Footer from '../components/Footer';
import ic4 from "../assets/ic4.png";
import ic2 from "../assets/ic2.png";
import Moneyflow from './Moneyflow';


const Pricing = () => {
  return (
    <>
    <Nav />
    <div className="container-fluid">
        <div
          className="container text-center"
          style={{
            padding: "1%",
           
          }}
        >
          <div
            className="row"
           
          >
            <h1 className='mt-2' style={{fontSize:"50px"}}> PLAN & PRICING</h1>
            <center>
            <img src={msg} className="img-fluid" style={{height:"500px"}}  />
            </center>
          </div>
        </div>
      </div>

      <Moneyflow />

      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6 bg-dark text-light">
            <h1 className='mt-4 mx-2'>GET A FREE DEMO </h1>

          </div>
          <div className="col-sm-6 bg-dark">
            <input type='text' placeholder='Enter Your Number' className='mt-4 mb-4' style={{width:"60%",height:"45px"}} />
            <button type="button" class="btn btn-primary mx-4">SUBMIT</button>


          </div>
        </div>
      </div>

      <div className="container-fluid text-center">
        <div className="container mb-5">
          <h1 className="mt-5 mb-2 text-center" style={{fontFamily:"Poppins', sans-serif"}}>SHORT MESSAGING TOOLS FOR YOUR BUSINESS </h1>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-3">
            <div class="col" data-aos="zoom-in-up">
              <div class="card ">
                <center>
                  <img
                    src={ic2}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">Transactional SMS</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                  Send regular informational updates and alerts to your existing clients to both DND and non-DND Mobile Numbers.
                  </p>
                </div>
              </div>
            </div>
          
            <div class="col" data-aos="zoom-in-up">
              <div class="card">
                <center>
                  <img
                    src={ic4}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">API SMS</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                  Connect your PC or web based softwares , websites to our SMS server using our robust API connectivity solutions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" data-aos="zoom-in-up">
              <div class="card ">
                <center>
                  <img
                    src={ic2}
                    class="card-img-top"
                    className="img-fluid mt-3"
                    style={{ height: "40px", width: "40px" }}
                    alt="..."
                  />
                </center>
                <div class="card-body">
                  <h4 class="card-title mt-2">Promotional SMS</h4>
                  <p class="card-text mt-3" style={{ fontSize: "17px" }}>
                  Run promotional messaging campaigns to promote your business / services anywhere in India with peace of mind.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
          </div>
          </div>

       
    
<div className='container-fluid' style={{backgroundColor:"#f7fbff"}}>
  <div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-5">
 <img src={call} className='img-fluid' />
    </div>

    
    <div className="col-sm-4 plans mt-5 mb-5">
    <form className=''>
      <h4 className='mt-3 text-center'>GET FREE INSTANT CALLBACK</h4>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label mt-4"> Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Phone Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Your Message/Enquery/feedback</label>
   
<textarea name="comment" form="usrform" style={{width:"99%"}}></textarea>
  </div>

 
  <button type="submit" class="btn btn-primary mb-4 mt-3">Submit</button>
</form>

    </div>
  </div>
</div>



<Footer />
    </>
  )
}

export default Pricing
