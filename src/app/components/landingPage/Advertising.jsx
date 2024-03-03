import { popins } from "@/app/layout";
import Button from "../common/Button";
import Image from "next/image";

function Advertising() {
  const shadow = {
    boxShadow:
      "0px 4px 8px 0px rgba(9, 13, 20, 0.16), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 1px 2px 0px rgba(9, 13, 20, 0.24)",
  };
  const maindata = [
    {
      id: 0,
      title: "Security First ",
      imgUrl: "/advertise/auth.svg",
    },
    {
      id: 1,
      title: "Trustworthiness with Diverse Audiences ",
      imgUrl: "/advertise/trust.svg",
    },
    {
      id: 2,
      title: "Viral content potential ",
      imgUrl: "/advertise/viral.svg",
    },
    {
      id: 3,
      title: "Enhanced Audience & Reach ",
      imgUrl: "/advertise/enhanced.svg",
    },
  ];
  return (
    <div className="flex w-full mx-auto max-w-[1254px] items-center justify-between mt-[218px] gap-[47px]">
      {/* left div */}
      <div className="">
        <h1 className="max-w-[561px] w-full font-[700] text-[36px] text-[#1C1934] leading-[43.88px]">
          Advertising made with real people. Meet the community.
        </h1>
        {/* para */}
        <p className="max-w-[651px] w-full text-[#5E5D6D] text-[18px] font-[400] capitalize mt-[35px] leading-[28.8px]">
          The people posting your campaign on their social media accounts are
          everyday individuals.
          <span className="text-[black]">
            They represent around 82% of social media users on platforms,
          </span>
          which makes them a powerful resources in advertising.
        </p>
        {/* Authenticity and reliability */}
        <div className="w-full flex flex-col gap-[20px] max-w-[440px] mt-[49px]">
          {maindata.map((items, id) => {
            return (
              <>
                <div className="w-full flex max-w-[440px] justify-between items-center">
                  <div className="max-w-[34px] w-full">
                    <img src={items.imgUrl} alt="" />
                  </div>
                  <div
                    className={`${popins.className} font-[400] text-[20px] max-w-[392px] w-full  text-[#1C1934] leading-[30px]`}
                  >
                    {items.title}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* verbyo-community */}
        <div className="max-w-[651px] w-full text-[#5E5D6D] text-[18px] font-[400]  mt-[50px] leading-[30px]">
          Verbyo is a community of real people. We have implemented several
          measures to verify that {""}
          <span className="text-[#145CA3] font-[500]">
            individuals posting our campaigns are real,{" "}
          </span>
          thereby preventing bot registrations.
        </div>
        {/* btn */}
        <div className="max-w-[184px] w-full mt-[35px]">
          <Button
            text={"Learn More"}
            extraClasses={`${popins.className} bg-[#057DF3] shrink-0`}
            href={"/confirmation"}
          />
        </div>
      </div>
      {/* right -div */}
      <div className="max-w-[555px] w-full  ">
        <div className="absolute mt-[-40px]">
          <Image
            width={140}
            height={138.39}
            src={"/advertise/dots-video-back.svg"}
          />
        </div>
        <div className="   flex justify-center items-center ">
          {" "}
          <Image
            width={457}
            height={502}
            src={"/advertise/women-video-image.png"}
            className="z-10 relative"
          />
          <div className="absolute z-30 max-w-[76px] w-full ">
            <img
              src="/advertise/women-video.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertising;
