import { Pagination, Autoplay } from "swiper/modules";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import rating5 from "../assets/rating.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Feed = () => {
  return (
    <>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "" }}
      >
        <div className="container mt-5">
          <h1 style={{ color: "black" }}>
            WHAT OUR CLIENTS SAY ❤
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-3 mb-5"
        >
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>Airtel Broadband</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-4">
                    Great company to do business. We have worked with him on
                    numerous projects-Bulk SMS, Digital Marketing, Whatsapp
                    Promotions, etc.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>Vodafone</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-4">
                    They don’t just do what they’re told to do; they really
                    think about the product, code, and solution.Totally
                    satisfied with the services they provide.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>PGI</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-4">
                    Great Job! You exceeded our expectations and delivered more
                    than you promised.Om Enterprises is Great company to do
                    business.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>Bulk SMS Client</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-2">
                    Picking OM ENTERPRISES is one of the best decisions I took
                    ever to speed up our marketing their efforts are worthy for
                    all of it really happy and satisfied.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>Akal Hospital</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-5">
                    A great self-service SMS platform that works. We integrated
                    into our products in less than an hour. Great support too!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>WWICS</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-4">
                    The services and support provided are highly professional.
                    We are very pleased to have Om Enterprises as our SMS
                    partner!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>RS Global</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-1">
                    Om Enterprises is a good website for bulk SMS service India
                    which sends our SMS in real-time. Response from the support
                    team is very encouraging and prompt all the time.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>Alpha Academy</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-4">
                    Om Enterprises stands out as one of the best teams I’ve ever
                    worked with really a great experience highly recommended.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>Grover Shoes</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-5">
                    Their experience in the field and the speed at which they
                    did great job we are impressed with the work.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container text-center"
            >
              <div class="card mb-5 mt-4">
                <div class="card-body">
                  <h2>Lall’s Orthocare</h2>
                  <center>
                    <img
                      src={rating5}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "30%", width: "30%" }}
                    />
                  </center>
                  <p class="card-text mb-4">
                    Om Enterprises did really excellent work under a time
                    crunch.I really appreciated the extra work and extra effort
                    they put in. I highly recommend.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Feed;
