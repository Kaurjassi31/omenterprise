import React from "react";
import career from "../assets/career.jpg";
import Nav from "../components/Nav";
import support from "../assets/support.png";


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
          <div className="row" style={{ fontFamily: "Poppins', sans-serif" }}>
            <img src={career} className="img-fluid" />
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
        <div class="row row-cols-1 row-cols-md-5 mt-5 mb-5 g-4 text-center">
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PEOPLE</h5>
                <p class="card-text">
                  Om Enterprises Group treats all employees like family;
                  allowing them prosper and be appreciated and help them to grow.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PASSION</h5>
                <p class="card-text">
                  Om Enterprises Group promotes
                  energetic, innovative, performance driven & fun environment to
                  deliver high quality service to its customers.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">TRUST</h5>
                <p class="card-text">
                  Om Enterprises offering unparalleled customer services to
                  encouraging employee curiosity & openness to learn new things
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PARTNERSHIP</h5>
                <p class="card-text">
                  Om Enterprises Group encourages working in collaboration with
                  its customers, partners and suppliers to improve processes.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">RELIABILITY</h5>
                <p class="card-text">
                  Om Enterprises Group focuses on delivering effective solutions
                  which fetches best results for businesses; showcasing its
                  creativity & reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Find your ideal jobs with us.</h1>
        <h6>
Explore an opportunity to work with a global team of industry experts, who are reshaping the future of mobile communication.
</h6>
      </div>
    </>
  );
};

export default Career;
