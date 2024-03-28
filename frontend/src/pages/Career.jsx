import React from "react";
import career from "../assets/Careers.gif";
import Nav from "../components/Nav";
import support from "../assets/support.png";
import motivation from "../assets/motivation.png";
import reliability from "../assets/reliability.png";
import peoplee from "../assets/peoplee.png";
import trust from "../assets/trust.png";
import Footer from "../components/Footer";


const Career = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mb-5">
        <div
          className="container text-center"
          style={{
            padding: "3%",
          }}
        >
          <div className="row" >
            <img src={career} className="img-fluid" style={{height:"500px"}} />
          </div>
        </div>
        <center>
          <p className="text-center" style={{ width: "70%" }}>
            Om Enterprises Group believes in creating a cohesive working
            environment to harness the best from our employees. Connectivity is
            in our DNA and that translates into our functioning and operations
            as well. We train, we guide, we experiment, we challenge and we
            provide freedom – to everyone seeking professional growth and aspire
            to think big.Our teams are made up of passionate experts, driven,
            adaptable, results-oriented, and emotionally intelligent people
            ready to push the boundaries to deliver the best results for our
            customers.Our employee engagement initiatives, productive training,
            and competitive remuneration are a testament to an involving and
            exciting work environment.
          </p>
        </center>
        <div className="container">
        <div class="row row-cols-1 row-cols-md-5 mt-2 mb-2 g-4 text-center">
          <div class="col" data-aos="fade-down">
            <div class="card">
            <center>
              <img src={peoplee} class="card-img-top mt-3" style={{height:"80px",width:"80px"}} alt="..." />
              </center>              <div class="card-body">
                <h5 class="card-title">PEOPLE</h5>
                <h6 class="card-text">
                  Om Enterprises Group treats all employees like family;
                  allowing them proper and be appreciated and help to achieve
                  growth in their business.
                </h6>
              </div>
            </div>
          </div>
          <div class="col" data-aos="fade-down">
            <div class="card">
            <center>
              <img src={motivation} class="card-img-top mt-3" style={{height:"80px",width:"80px"}} alt="..." />
              </center>              <div class="card-body">
                <h5 class="card-title">PASSION</h5>
                <h6 class="card-text">
                  Om Enterprises Group promotes energetic, innovative,
                  performance driven & fun environment to deliver high quality
                  service to its customers.
                </h6>
              </div>
            </div>
          </div>
          <div class="col" data-aos="fade-down">
            <div class="card">
            <center>
              <img src={trust} class="card-img-top mt-3" style={{height:"80px",width:"80px"}} alt="..." />
              </center>              <div class="card-body">
                <h5 class="card-title">TRUST</h5>
                <h6 class="card-text">
                  Om Enterprises offering unparalleled customer services to
                  encouraging employee curiosity & openness to learn new things and gain trust.
                </h6>
              </div>
            </div>
          </div>
          <div class="col" data-aos="fade-down">
            <div class="card">
              <center>
              <img src={support} class="card-img-top mt-3" style={{height:"80px",width:"80px"}} alt="..." />
              </center>
              <div class="card-body">
                <h5 class="card-title">PARTNERSHIP</h5>
                <h6 class="card-text">
                  Om Enterprises Group encourages working in collaboration with
                  its customers, partners, and suppliers to improve processes.
                </h6>
              </div>
            </div>
          </div>
          <div class="col" data-aos="fade-down">
            <div class="card">
            <center>
              <img src={reliability} class="card-img-top mt-3" style={{height:"80px",width:"80px"}} alt="..." />
              </center>              <div class="card-body">
                <h5 class="card-title">RELIABILITY</h5>
                <h6 class="card-text">
                  Om Enterprises Group focuses on delivering effective solutions
                  which fetches best results for businesses; showcasing its
                  creativity & reliability
                </h6>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="container-fluid"style={{ backgroundColor: "#f8fcff" }}>
      <div className="container">
        <h1 className="mt-5">Find your ideal jobs with us.</h1>
        <h6>
          Explore an opportunity to work with a global team of industry experts,
          who are reshaping the future of mobile communication.
        </h6>
        </div>
        <div className="container" >
        <div class="row row-cols-1 row-cols-md-3 mt-4 g-4 mb-5">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title text-center">Marketing Executives </h4>
        <div className="row mt-3">
          <div className="col-sm-5">
          <h6>Qualification:</h6>
            <h6>Gender: </h6>
            <h6>Mandatory: </h6>
            <h6>Skills Good: </h6>
            <h6>Location: </h6>

          </div>
          <div className="col-sm-7">
          <h6> Graduate</h6>
          <h6> Male/Female</h6>
          <h6> Computer Operating</h6>
          <h6>Good Communication</h6>
          <h6> Jalandhar</h6>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title text-center">Customer Support Executives  </h4>
        <div className="row mt-3">
        <div className="col-sm-5">
          <h6>Qualification:</h6>
            <h6>Gender: </h6>
            <h6>Mandatory: </h6>
            <h6>Skills Good: </h6>
            <h6>Location: </h6>

          </div>
          <div className="col-sm-7">
          <h6>10+2 onwards </h6>
          <h6> Male/Female</h6>
          <h6> Computer Operating</h6>
          <h6>Good Communication</h6>
          <h6> Jalandhar</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title text-center">Marketing Executives </h4>
        <div className="row mt-3">
        <div className="col-sm-5">
          <h6>Qualification:</h6>
            <h6>Gender: </h6>
            <h6>Mandatory: </h6>
            <h6>Skills Good: </h6>
            <h6>Location: </h6>

          </div>
          <div className="col-sm-7">
          <h6> Graduate</h6>
          <h6> Male</h6>
          <h6> Computer Operating</h6>
          <h6>Good Communication</h6>
          <h6> Jalandhar</h6>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>

        <Footer />
       
    </>
  );
};

export default Career;
