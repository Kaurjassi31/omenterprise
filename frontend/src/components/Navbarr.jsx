import React from "react";
import logo from "../assets/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import './Navbar.css'
const Navbarr = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <img
            src={logo}
            className="ms-5"
            style={{ width: "80px", height: "80px" }}
          />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-3">
              <li class="nav-item dropdown__item">
                <a class="nav-link fw-bold" href="#">
                  <div class="nav_link dropdown_button">
                    Products <RiArrowDropDownLine className="downarrow" />
                  </div>
                </a>

                <div class="dropdown__container">
                  <div class="dropdown__content">
                    <div class="dropdown__group">
                      <div class="dropdown__icon">
                        <i class="ri-flashlight-line"></i>
                      </div>

                      <span
                        class="dropdown__title"
                        style={{ marginLeft: "20px" }}
                      >
                        Most viewed courses
                      </span>

                      <ul class="dropdown__list">
                        <li>
                          <a href="#" class="dropdown__link">
                            HTML for beginners
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            Advanced CSS
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            JavaScript OOP
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="dropdown__group">
                      <div class="dropdown__icon">
                        <i class="ri-heart-3-line"></i>
                      </div>

                      <span
                        class="dropdown__title"
                        style={{ marginLeft: "25px" }}
                      >
                        Popular courses
                      </span>
                      <ul class="dropdown__list">
                        <li>
                          <a href="#" class="dropdown__link">
                            Development with Flutter
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            Web development with React
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            Backend development expert
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="dropdown__group">
                      <div class="dropdown__icon">
                        <i class="ri-book-mark-line"></i>
                      </div>

                      <span
                        class="dropdown__title"
                        style={{ marginLeft: "25px" }}
                      >
                        Careers
                      </span>

                      <ul class="dropdown__list">
                        <li>
                          <a href="#" class="dropdown__link">
                            Web development
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            Applications development
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            UI/UX design
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            Informatic security
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="dropdown__group">
                      <div class="dropdown__icon">
                        <i class="ri-file-paper-2-line"></i>
                      </div>

                      <span
                        class="dropdown__title"
                        style={{ marginLeft: "25px" }}
                      >
                        Certifications
                      </span>

                      <ul class="dropdown__list">
                        <li>
                          <a href="#" class="dropdown__link">
                            Course certificates
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown__link">
                            Free certifications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* dropdown endss */}
              <li class="nav-item">
                <a class="nav-link fw-bold " href="#">
                  Sign In
                </a>
              </li>
              <button className="btn btn-success rounded">Sign Up Free</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbarr;