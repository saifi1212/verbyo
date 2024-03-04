"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
// Import necessary modules from Next.js // Replace with the actual window size module you are using
import { useEffect, useState, useRef } from "react";

function SwiperSec() {
  const swiperRef = useRef();
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    const calculatedPercentage =
      (19.3229166667 / 100) * swiperRef?.current?.clientWidth;
    setPercentage(calculatedPercentage);
  };
  useEffect(() => {
    calculatePercentage();
  }, [swiperRef?.current?.clientWidth]);
  console.log(percentage);
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
      <Swiper
        ref={swiperRef}
        grabCursor
        slidesOffsetBefore={371}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          1900: {
            slidesOffsetBefore: 371,
          },
          0: {
            slidesOffsetBefore: 0,
          },
        }}
      >
        {swiperSlide.map((item, index) => (
          <SwiperSlide key={index + "slide"} className="w-fit">
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
  );
}

export default SwiperSec;
