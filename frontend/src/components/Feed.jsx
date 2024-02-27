import { Pagination, Autoplay } from "swiper/modules";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import rating5 from "../assets/star5.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Feed = () => {
  return (
    <>
      <div
        className="container mt-5 mb-5 text-center"
        style={{ backgroundColor: "#023368" }}
      >
        <div className="container mt-5 mb-5">
          <h1 style={{ fontFamily: "Poppins', sans-serif", color: "white" }}>
            WHAT OUR CLIENTS SAY
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
              slidesPerView: 1,
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
            <div className="container mt-3  mb-5" style={{ height: "180px" }}>
              <h2>Alpha Academy</h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <br />
              <h6 style={{ width: "80%" }}>
                Om Enterprises stands out as one of the best teams I’ve ever
                worked with
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mt-3 mb-5" style={{ height: "180px" }}>
              <h2>Airtel Broadband </h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "90%" }}>
                Great company to do business. We have worked with him on
                numerous projects-Bulk SMS, Digital Marketing, Whatsapp
                Promotions, etc.
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mt-3 mb-5" style={{ height: "180px" }}>
              <h2>Bulk SMS Client</h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "80%" }}>
                Picking OM ENTERPRISES is one of the best decisions I took ever
                to speed up our marketing efforts.
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mt-3 mb-5" style={{ height: "180px" }}>
              <h2>Lall’s Orthocare</h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "80%" }}>
                Om Enterprises did really excellent work under a time crunch.I
                really appreciated the extra effort they put in. I highly
                recommend.
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="container mt-3 mb-5" style={{ height: "180px" }}>
              <h2>Vodafone </h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "80%" }}>
              They don’t just do what they’re told to do; they really think
                about the product, code, and solution fully satisfied.
              </h6>
              </div>
            {/* <div className="container mt-5 mb-5" style={{ height: "180px" }}>
              <h2></h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "80%" }}>
             
              </h6>
            </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mt-5 mb-5" style={{ height: "180px" }}>
              <h2>RS Global</h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "90%" }}>
                Om Enterprises is a good website for bulk SMS service India
                which sends our SMS in real-time. Response from the support team
                is very encouraging and prompt all the time.
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mt-5 mb-5" style={{ height: "180px" }}>
              <h2>WWICS</h2>
              <img
                src={rating5}
                className="img-fluid mt-5"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "80%" }}>
                The services and support provided are highly professional. We
                are very pleased to have Om Enterprises as our SMS partner!
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mt-5 mb-5" style={{ height: "180px" }}>
              <h2>Grover Shoes</h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "80%" }}>
                Their experience in the field and the speed at which they work
                impressed us.
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mt-2 mb-5" style={{ height: "180px" }}>
              <h2>PGI</h2>
              <img
                src={rating5}
                className="img-fluid"
                style={{ height: "40%", width: "40%" }}
              />
              <h6 style={{ width: "80%" }}>
                Great Job! You exceeded our expectations and delivered more than
                you promised. Great company to do business.
              </h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Feed;
