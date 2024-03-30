import React from "react";
import Nav from "../components/Nav";

const Careerform = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid bg-light ">
        <div className="container">
          <form action="https://formspree.io/f/xzbnjabg" method="POST">
            <h2 className="mt-3 text-center">Apply for a Position</h2>
            <h6>
              (Please complete the form below to apply for a position with us.)
            </h6>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label mt-4">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="name"
                style={{ border: "1px solid black", borderRadius: "2px" }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                {" "}
                Your Email
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                style={{ border: "1px solid black", borderRadius: "2px" }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Your Phone
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="phone"
                style={{ border: "1px solid black", borderRadius: "2px" }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Applying for Position:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="position"
                style={{ border: "1px solid black", borderRadius: "2px" }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Are You ?
              </label>
              <br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  style={{ border: "1px solid black" }}
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Fresher
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  style={{ border: "1px solid black" }}
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Experienced{" "}
                </label>
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                {" "}
                Last Experience Details
              </label>

              <textarea
                name="detail"
                form="usrform"
                style={{
                  width: "99%",
                  border: "1px solid black",
                  borderRadius: "2px",
                }}
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                When can you start?
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ border: "1px solid black", borderRadius: "2px" }}
                name="start"
              />
            </div>

            <center>
              <button
                className=" btn btn-primary mt-4 mb-4"
                style={{
                  backgroundColor: "#023368",
                }}
              >
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default Careerform;
