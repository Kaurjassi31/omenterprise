import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/css/indexnew.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import airtel from "../assets/images/airtel.png";
import bmw from "../assets/images/bmw.png";
import radio from "../assets/images/radio.png";
import skk from "../assets/images/skk.png";
import vodafone from "../assets/images/vodafone.png";
import acc from "../assets/images/acc.png";


// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const Swiperr = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="container mt-5 mb-5">
          <h1 >
            Clients We Have Created Results For
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={bmw}
              className="img-fluid brand mx-auto"
              style={{ height: "130px", width: "140px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={airtel}
              className="img-fluid brand mx-auto "
              style={{ height: "150px", width: "180px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={radio}
              className="img-fluid brand mx-auto"
              style={{ height: "150px", width: "200px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={skk}
              className="img-fluid brand mx-auto"
              style={{ height: "150px", width: "190px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={acc}
              className="img-fluid brand mx-auto"
              style={{ height: "150px", width: "170px" }}
            />
          </SwiperSlide>
          {/* <SwiperSlide><img src={mercedez} className='img-fluid brand'style={{height:"150px"}}  /></SwiperSlide> */}
          <SwiperSlide>
            <img
              src={vodafone}
              className="img-fluid brand mx-auto"
              style={{ height: "150px", width: "180px" }}
            />
          </SwiperSlide>
          {/* <SwiperSlide><img src={audi} className='img-fluid brand' /></SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Swiperr;
