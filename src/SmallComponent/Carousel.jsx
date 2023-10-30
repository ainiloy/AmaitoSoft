import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";
import { portfolio } from "../JsonData/Client";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {portfolio.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <a href={item.link} target="blank">
                <img src={item.img} />
              </a>
              <a href={item.link} className="project-title" target="blank">
                {item.title}
              </a>
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </>
  );
}
