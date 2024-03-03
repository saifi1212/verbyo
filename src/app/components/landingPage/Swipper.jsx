"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

function Swipper() {
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
      <div className="max-w-[1713px] w-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={60}
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
                className=" min-h-[540px] max-h-[540px] w-full max-w-[860px] "
              />
            </SwiperSlide>
          ))}

          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Swipper;
