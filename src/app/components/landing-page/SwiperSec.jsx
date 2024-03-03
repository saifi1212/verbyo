"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

function SwiperSec() {
  const swiperSlide = [
    "/swiper-slide1.png",
    "/swiper-slide2.png",
    "/swiper-slide1.png",
    "/swiper-slide2.png",
    "/swiper-slide1.png",
    "/swiper-slide2.png",
  ];
  return (
    <div>
      <div className="sm:max-w-[1713px] max-w-[632px] w-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {swiperSlide.map((item, index) => (
            <SwiperSlide key={index + "slide"}>
              <img
                src={item}
                alt=""
                className=" sm:min-h-[540px] min-h-[401px] sm:max-h-[540px] max-h-[401px] w-full sm:max-w-[860px] max-w-[308px] "
              />
            </SwiperSlide>
          ))}

          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperSec;
