// import Image from 'next/img';
import Image from 'next/image';
import React, { useState } from 'react'
import styles from '../styles/Corousel.module.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Navigation,Keyboard, Autoplay, Pagination} from "swiper";
const Corousel = () => {
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
        pagination={{ clickable: true ,enabled:true}}
        navigation={true}
        keyboard={{enabled:true}}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow,Navigation,Keyboard,Autoplay,Pagination]}
        className="mySwiper"
        style={{
        width: "100%",
         paddingTop: "1vh",
        paddingBottom: "1vh",}}
      >
        <SwiperSlide style={{ 
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "60vh",
        }}>
          <Image src="/4.jpeg" alt="5" width="1600" height="1000" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        }}>
          <Image src="/2.jpeg" alt="6" width="1600" height="1000" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        }}>
          <Image src="/1.jpeg" alt="6" width="1600" height="1000" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        }}>
          <Image src="/3.jpeg" alt="6" width="1600" height="1000" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        }}>
          <Image src="/5.jpeg" alt="6" width="1600" height="1000" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        }}>
          <Image src="/6.jpeg" alt="6" width="1600" height="1000" />
        </SwiperSlide>
      </Swiper>
        </>
    )
  
}
export default Corousel