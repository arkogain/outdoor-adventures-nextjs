"use client"

import React from "react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageSlider() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <Image
            src="/projects/camp-3.jpg"
            alt="Tour boat with cliffs"
            className="h-auto w-full rounded-lg"
            height={500}
            width={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/projects/camp-3.jpg"
            alt="Kayak in the lake"
            className="h-auto w-full rounded-lg"
            height={500}
            width={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/projects/camp-3.jpg"
            alt="Wooden boat on turquoise water"
            className="h-auto w-full rounded-lg"
            height={500}
            width={500}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
