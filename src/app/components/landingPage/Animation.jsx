"use client";
import React, { useState } from "react";

const Animation = () => {
  const [openedOne, setOpenedOne] = useState(1);
  const data = [
    {
      src: "/landing/animation-pic1.svg",
      extraClasses: "mt-[48px] pl-[29px] ",
      position: "right-0",
      desce:
        "Create a campaign that encourages individuals to share your content on their social media accounts, or to create a video for your brand following your script.",
    },
    {
      src: "/landing/animation-pic2.png",
      extraClasses: "mt-[-15px] pl-[61px] ",
      desce:
        "Selected individuals will share your campaign on their social media accounts and inform their friends about your brand.",
    },
    {
      src: "/landing/animation-pic3.png",
      extraClasses: "mt-[21px]",
      position: "left-[-14px]",
      desce:
        "Monitor your campaign's performance through your personalized dashboard.",
    },
  ];
  return (
    <div className="max-w-[1280px] w-full justify-center mx-auto flex gap-[23px] mt-[37px]">
      {data.map((item, index) => (
        <div
          onMouseEnter={() => {
            setOpenedOne(index + 1);
          }}
          key={index + "data"}
          className={`${
            openedOne == index + 1
              ? "max-w-[710px] justify-start items-start  pt-[32px]"
              : "max-w-[260px] items-center  pt-[126px]"
          }  overflow-hidden  w-full bg-gradient-to-r from-[#2D67D0] to-[#7A43EA] rounded-[10px]  min-h-[550px] max-h-[550px] flex-col flex  duration-[0.4s] transition-all ease-in-out`}
        >
          <div
            className={`flex ${
              openedOne == index + 1
                ? "flex-row gap-[16px] pl-[44px]"
                : "flex-col gap-[35px] min-h-[261px]"
            } duration-[0.4s] transition-all ease-in-out`}
          >
            <div className="flex flex-col items-center">
              <p class="leading-[11.72px] text-[10px] tracking-[3px] text-[#fff] w-fit">
                STEP
              </p>
              <h1
                class={`${
                  openedOne == index + 1
                    ? "text-[80px] max-h-[67px] mt-[4.5px]"
                    : "text-[60px] max-h-[67px]"
                }   text-[#fff] font-[600] leading-[67px]`}
              >
                {index + 1}
              </h1>
            </div>
            <div
              className={`${
                openedOne == index + 1
                  ? "max-w-[552px] text-[20px] font-semibold leading-[26px] mt-[11.5px] max-h-[78px]"
                  : "max-w-[186px] text-[16px] font-semibold"
              } w-full text-[#fff]  transition-all duration-300 `}
            >
              {item.desce}
            </div>
          </div>
          <div
            className={`${
              openedOne == index + 1 ? "translate-x-0" : "translate-x-[-710px]"
            } ${
              item.extraClasses
            } duration-300 transition-all ease-in-out  w-full relative`}
          >
            <img
              src={item.src}
              alt=""
              className={`absolute ${item.position}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animation;
