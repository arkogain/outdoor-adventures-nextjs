"use client";
import { slidesection } from "@/lib/mapdata";
import { slidersectiontype } from "@/lib/alltypes";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const Sliders = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl space-y-14 px-6 py-24 lg:space-y-10">
        {slidesection.map((slidesection: slidersectiontype) => {
          return (
            <div
              className="space-y-5"
              key={slidesection.id}>
              <div className="flex items-center gap-4">
                <div className="font-primary text-[15px] font-bold">
                  {slidesection.heading}
                </div>
                {/* border section  */}
                <div className="bg-radical-red h-0.5 w-12"></div>
              </div>

              <div className="font-primary text-4xl font-bold">
                {slidesection.title}
              </div>

              <div className="font-secondary text-[16px] text-black/75">
                {slidesection.discriptions}
              </div>

              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
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
                modules={[FreeMode, Pagination, Autoplay]}>
                {/* slide 01  */}
                <SwiperSlide>
                  <Image
                    src={slidesection.image1}
                    height={500}
                    width={500}
                    alt={slidesection.alt1}
                  />
                </SwiperSlide>

                {/* slide 02  */}
                <SwiperSlide>
                  <Image
                    src={slidesection.image2}
                    height={500}
                    width={500}
                    alt={slidesection.alt2}
                  />
                </SwiperSlide>

                {/* slide 03  */}
                <SwiperSlide>
                  <Image
                    src={slidesection.image3}
                    height={500}
                    width={500}
                    alt={slidesection.alt3}
                  />
                </SwiperSlide>

                {/* slide 04  */}
                <SwiperSlide>
                  <Image
                    src={slidesection.image4}
                    height={500}
                    width={500}
                    alt={slidesection.alt4}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sliders;
