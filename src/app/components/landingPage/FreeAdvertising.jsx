import { popins } from "@/app/layout";
import Button from "../common/Button";

function FreeAdvertising() {
  const maindata = [
    {
      id: 0,
      title: "Enhanced awareness for your social cause",
      width: "max-w-[476px]",
      imgUrl: "/advertise/auth.svg",
    },
    {
      id: 1,
      title: "Recruit volunteers for your projects",
      imgUrl: "/advertise/trust.svg",
      width: "max-w-[400px]",
    },
    {
      id: 2,
      title: "Build trust and gain new audience",
      imgUrl: "/advertise/viral.svg",
      width: "max-w-[399px]",
    },
    {
      id: 3,
      title: "Get  international notoriety ",
      imgUrl: "/advertise/enhanced.svg",
      width: "max-w-[400px]",
    },
  ];
  return (
    <div className="max-w-[1286px] w-full mx-auto flex gap-[30px] justify-between   bg-[url(/landing/advertising-bg.png)] rounded-[20px] mt-[148px] py-[67px] bg-no-repeat bg-cover bg-center max-h-[412px] pl-[47px]">
      <div className="max-w-[912px] w-full ">
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

        <div className="w-full flex flex-wrap justify-between gap-x-[20px] gap-y-[22px]  mt-[34px]">
          {maindata.map((items, id) => {
            return (
              <>
                <div
                  className={`w-full ${items.width} flex  gap-[14px] items-center`}
                >
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
          style={"bg-[#fff] max-w-[223px] text-[#057DF3] "}
          text={"Get started for free"}
        />
        {/* <div className="max-w-[255px] w-full absolute  mb-[-81px] flex justify-end  ">
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
        </div> */}
      </div>
    </div>
  );
}

export default FreeAdvertising;
