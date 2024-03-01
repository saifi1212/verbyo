
import { popins } from "@/app/layout";
import Button from "../common/Button";

function FreeAdvertizing() {
  const maindata = [
    {
      id: 0,
      title: "Enhanced awareness for your social cause",

      imgUrl: "/advertise/auth.svg",
    },
    {
      id: 1,
      title: "Recruit volunteers for your projects",
      imgUrl: "/advertise/trust.svg",
    },
    {
      id: 2,
      title: "Build trust and gain new audience",
      imgUrl: "/advertise/viral.svg",
    },
    {
      id: 3,
      title: "Get  international notoriety ",
      imgUrl: "/advertise/enhanced.svg",
    },
  ];
  return (
    <div className="max-w-[1286px] w-full mx-auto flex justify-between   bg-[#0057AC] rounded-[20px] mt-[148px] pt-[48px] pb-[35px] pl-[47px]">
      <div className="max-w-[972px] w-full ">
        <div className="max-w-[863px] w-full font-[700] text-[36px] text-[#FFFFFF] ">
          Free Advertising Campaigns for Foundations{" "}
        </div>
        {/* para */}
        <div
          className={`${popins.className}  max-w-[912px] w-full text-[#FFFFFF] text-[18px] font-[400]  mt-[20px] leading-[30px]`}
        >
          We are the only platform in the world that empowers Foundations and
          NGOs to promote their social causes for free through the voices of
          millions of authentic users across all major social media networks.
        </div>
        {/*  */}

        <div className="w-full grid grid-cols-2 gap-[20px] max-w-[972px] mt-[49px]">
          {maindata.map((items, id) => {
            return (
              <>
                <div className="w-full flex max-w-[476px] gap-[14px] items-center">
                  <div className="max-w-[34px] w-full">
                    <img src={items.imgUrl} alt="" />
                  </div>
                  <div
                    className={`${popins.className} font-[400] text-[20px] max-w-[428px] w-full  text-[#fff] leading-[30px]`}
                  >
                    {items.title}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* btn */}
      <div className="max-w-[255px] w-full justify-end flex flex-col pb-[20px]  ">
        <Button
          href={"/"}
          extraClasses={
            "bg-[#fff] rounded-[6px]  max-w-[223px] px-[35px] py-[10px] text-[#057DF3] "
          }
          text={"Get started for free"}
        />
        <div className="max-w-[255px] w-full absolute  mb-[-81px] flex justify-end  ">
          <svg
            width="220"
            height="412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.18"
              d="M393.974 205.5C393.974 312.421 313.357 394 220.001 394C126.644 394 46.0269 312.421 46.0269 205.5C46.0269 98.5791 126.644 17 220.001 17C313.357 17 393.974 98.5791 393.974 205.5Z"
              stroke="#D8DBFB"
              stroke-width="92"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FreeAdvertizing;
