import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className="container-fluid ">
    <div className="container-fluid  mt-3">
    <h1 className=''>My Subscription</h1>
    <p style={{fontSize:"18px"}}>Here you'll be able to see your purchase details , download the plugin and get your license key for the plugin activation.</p> 
    </div>
  {/* <div className="container"> */}
    <div class="row row-cols-1 mt-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Status</h5>
        <p class="card-text"> <b>Active</b></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Start Date</h5>
        <p class="card-text"> <b>August 24,2024</b></p>   </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Last order date</h5>
        <p class="card-text"> <b>August 24,2024</b></p>      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Next payment date</h5>
        <p class="card-text"> <b> September 25,2024</b></p>     </div>
    </div>
  </div>
</div>
{/* </div> */}
<div class="row  mt-1  g-4">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Payment</h5>
        <p class="card-text mb-3"> Via Manual Renewal</p>
      </div>
    </div>
  </div>
  <div class="col-sm-9">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Actions</h5>
      <p class="card-text"> <button type="button" class="btn btn-light">Cancel</button> 
      <button type="button" class="btn btn-light mx-3">Add Payment</button> 
   <button type="button" class="btn btn-light">Renew Now</button> </p>

        </div>
    </div>
  </div>
  </div>


  <div class="row  mt-1  g-4">
  <div class="col-sm-7">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Status</h5>
        <p class="card-text"> <b>Active</b></p>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Billing Address</h5>
        <p class="card-text"> Setting ip your
        </p>   </div>
    </div>
  </div>
  </div>


    <div className="container-fluid text-center mt-5">
     <div className="row border">
        <div className="col-sm-3">
        <p className='mt-3' style={{fontSize:"17px"}}><b>DOWNLOADS</b></p>
        </div>
     </div>
    <div className="row">
        <div className="col-sm-3 border bg-light">
            <p className='mt-3' style={{fontSize:"17px"}}>PRODUCT</p>
        </div>
        <div className="col-sm-3 border bg-light">
            <p className='mt-3' style={{fontSize:"17px"}}>DOWNLOADS REMAINING</p>
        </div>
        <div className="col-sm-3 border bg-light">
            <p className='mt-3' style={{fontSize:"17px"}}>EXPIRES</p>
        </div>
        <div className="col-sm-3 border bg-light">
        <p className='mt-3' style={{fontSize:"17px"}}> DOWNLOAD </p>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-3 border ">
            <p className='mt-3' style={{fontSize:"17px"}}>Your License</p>
        </div>
        <div className="col-sm-3 border">
            <p className='mt-3' style={{fontSize:"17px"}}>&b2***ajp1o********896</p>
        </div>
        <div className="col-sm-3 border">
        <p className='mt-3'> <a href='#' style={{textDecoration:"none",fontSize:"17px"}}>View Upgrades</a> </p>
        </div>
        <div className="col-sm-3 border">
        <p className='mt-3'> <a href='#' style={{textDecoration:"none",fontSize:"17px"}}>View Upgrades</a> </p>
        </div>
    </div>
    </div>
   



    </div>
    </>
  )
}

export default Dashboard
