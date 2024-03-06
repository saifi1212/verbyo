import { popins } from "@/app/layout";
import Button from "./Button";
import Image from "next/image";
import AuthenticityAndReliability from "./AuthenticityAndReliability";

function Advertising({
  title,
  advertising,
  para,
  para2,
  extraClasses,
  extraClassespara,
  rightImage,
  thepeople,
  maindata,
  verbyo,
  Authenticity,
  extraClassesRightImageDiv
}) {
  const shadow = {
    boxShadow:
      "0px 4px 8px 0px rgba(9, 13, 20, 0.16), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 1px 2px 0px rgba(9, 13, 20, 0.24)",
  };

  return (
    <div
      className={`${extraClasses} flex w-full mx-auto max-w-[1280px]  mt-[218px] justify-between`}
    >
      {/* left div */}
      <div className="">
        <div className="max-w-[561px] w-full font-[700] text-[36px] text-[#1C1934] ">
          {title}
        </div>
        {/* para */}
        <div
          className={`${extraClassespara} w-full text-[#5E5D6D] text-[18px] font-[400] capitalize mt-[35px] leading-[28.5px]`}
        >
          {para}
          {advertising && (
            <span className="text-[black]">
              They represent around 82% of social media users on platforms,
            </span>
          )}
          {para2}
          {thepeople && (
            <div className="">
              <br />
              <br />
              Friends recommendations are the number one sales tools:
            </div>
          )}
        </div>
        {/* Authenticity and reliability */}
        { Authenticity && <AuthenticityAndReliability maindata={maindata} />}

        {/* verbyo-community */}
        {advertising && (
          <div className="max-w-[651px] w-full text-[#5E5D6D] text-[18px] font-[400]  mt-[50px] leading-[30px]">
            Verbyo is a community of real people. We have implemented several
            measures to verify that {""}
            <span className="text-[#145CA3] font-[500]">
              individuals posting our campaigns are real,{" "}
            </span>
            thereby preventing bot registrations.
          </div>
        )}
        {/* btn */}
        {verbyo && (
          <div className="max-w-[184px] w-full mt-[35px]">
            <Button
              text={"Learn More"}
              extraClasses={`${popins.className} bg-[#057DF3] shrink-0`}
              href={"/confirmation"}
            />
          </div>
        )}
      </div>
      {/* right -div */}
      <div className={`${extraClassesRightImageDiv} max-w-[555px] w-full`}  >
        <div className="absolute ">
          <Image
            width={140}
            height={138.39}
            src={"/advertise/dots-video-back.svg"}
          />
        </div>
        <div className="mt-[40px]   flex justify-center items-center ">
          {" "}
          <Image
            width={457}
            height={502}
            src={rightImage}
            className="z-10 relative"
          />
          {advertising && (
            <div className="absolute z-30 max-w-[76px] w-full ">
              <img
                src="/advertise/women-video.svg"
                alt=""
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Advertising;
