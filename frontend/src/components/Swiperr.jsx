import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import airtel from '../assets/airtel.png';
import usha from "../assets/usha.png";
import bmw from "../assets/bmw.png";
import wonderland from "../assets/wonderland.png";
import radio from "../assets/radio.png";
import skk from "../assets/skk.png";
import vodafone from "../assets/vodafone.png";
import acc from "../assets/acc.png";
import mercedez from "../assets/mercedez.png";
import audi from "../assets/audi.png"

import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const Swiperr = () => {
  return (
   
       <>
      <div className='container mt-5 mb-5'>
        <div className='container mt-5 mb-5'>
          <h1 style={{fontFamily:"Poppins', sans-serif"}}>Clients We Have Created Results For</h1>
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
        <SwiperSlide><img src={bmw} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={airtel} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={usha} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={radio} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={wonderland} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={skk} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={acc} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={mercedez} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={vodafone} className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={audi} className='img-fluid' /></SwiperSlide>
     
      </Swiper>
      </div>
    </>
   
  )
}

export default Swiperr
