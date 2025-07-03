"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const Slider1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        modules={[FreeMode, Pagination]}>
        {/* slide 01  */}
        <SwiperSlide>
          <Image
            src={"/projects/water-sports-1.jpg"}
            height={500}
            width={500}
            alt="img10"
          />
        </SwiperSlide>

        {/* slide 02  */}
        <SwiperSlide>
          <Image
            src={"/projects/water-sports-2.jpg"}
            height={500}
            width={500}
            alt="img10"
          />
        </SwiperSlide>

        {/* slide 03  */}
        <SwiperSlide>
          <Image
            src={"/projects/water-sports-3.jpg"}
            height={500}
            width={500}
            alt="img10"
          />
        </SwiperSlide>

        {/* slide 04  */}
        <SwiperSlide>
          <Image
            src={"/projects/water-sports-4.jpg"}
            height={500}
            width={500}
            alt="img10"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider1;
