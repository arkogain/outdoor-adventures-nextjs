"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CustomSlidesPerView() {
  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl">Custom Slides Per View</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          500: {
            slidesPerView: 1.5, // Partial slides on small tablets
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
        className="h-64">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item}>
            <div className="flex h-full items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl font-bold text-white">
              Slide {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
