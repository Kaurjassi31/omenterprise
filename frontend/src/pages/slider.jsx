<div className="container">
<div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div
      className="carousel-item active"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <img src={img1} className="d-block w-100" alt="" /> */}
      <div className="container">
        <div className="row">
          <div
            className="col-sm-5 mt-5"
            style={{ paddingLeft: "7rem" }}
          >
            <h1 className="text-primary text-bold fst-Poppins', sans-serif">
              <b>
                India’s No. 1 <br /> Bulk SMS Platform
              </b>
            </h1>
            <p className="mt-5">
              Om enterprises is a Premium Bulk SMS and Online Marketing
              company empowering people to advertise their product in
              the most innovative way.
            </p>
            <div className="mb-5">
              <Button>know more</Button>
              {/* <button className="button" type="submit">
                know more
              </button> */}
            </div>
          </div>
          <div className="col-sm-7">
            <img src={img1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span
      className="carousel-control-prev-icon"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span
      className="carousel-control-next-icon"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>