"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

function Swipper() {
  return (
    <div className="">
      <div className="max-w-[1713px] w-full     ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="/Videos - Hero1.png"
              alt=""
              className=" min-h-[540px] max-h-[540px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/Videos - Hero.png"}
              alt=""
              className="min-h-[540px] max-h-[540px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/Videos - Hero1.png"}
              alt=""
              className="min-h-[540px] max-h-[540px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/Videos - Hero.png"}
              alt=""
              className="min-h-[540px] max-h-[540px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/Videos - Hero1.png"}
              alt=""
              className="min-h-[540px] max-h-[540px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/Videos - Hero1.png"}
              alt=""
              className="min-h-[540px] max-h-[540px]"
            />
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Swipper;
