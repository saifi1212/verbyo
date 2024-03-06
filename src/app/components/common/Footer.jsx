import Link from "next/link";
import { popins } from "../../layout";
import FreeAdvertising from "../landing-page/FreeAdvertising";

function Footer({ marginTop, advertising }) {
  const maindata = [
    {
      id: 0,
      title: "Products",
      titlepage1: "Business",
      titlepage2: "Verbyo App",
      titlepage3: "Verbyo Foundation",
      link: "/Products",
    },
    {
      id: 1,
      title: "Support",
      titlepage1: "Help center",
      titlepage2: "Contact us",
      titlepage3: "DMCA",
      link: "/Support",
    },
    {
      id: 2,
      title: "Resources",
      titlepage1: "for Foundations",
      titlepage2: "for Advertisers",
      titlepage3: "for Content Creators",
      link: "/Resources",
    },
    {
      id: 3,
      title: "Company",
      titlepage1: "About us",
      titlepage2: "Careers",
      link: "/about-us",
    },
  ];
  return (
    <div
      className={`w-full flex justify-between bg-[#262F61] ${marginTop} px-[20px] relative`}
    >
      {!advertising && (
        <img
          src="footer/ornument-circle.svg"
          alt=""
          className="absolute inset-x-0 mx-auto z-[-1] sm:top-[-193px] top-[-130px] xl:max-w-[468px] lg:max-w-[400px] sm:max-w-[350px] max-w-[266px] w-full"
        />
      )}
      {advertising && (
        <div className="absolute inset-x-0 mx-auto z-[2] top-[-363px] w-full max-w-[1286px]">
         <FreeAdvertising/>
        </div>
      )}
      <div
        className={`max-w-[1290px] bg-[#262F61]  w-full mx-auto ${
          advertising ? "min-h-[581px]" : ""
        } flex justify-end  pt-[57px] pb-[31px] flex-col gap-[82px] `}
      >
        <div className="w-full mx-auto flex justify-between  flex-col gap-[82px] ">
          <div className="max-w-[1290px] w-full flex sm:items-center justify-between   gap-[40px] xl:flex-row flex-col">
            {/* logo and company */}
            <div>
              <div className="xl:max-w-[285px] max-w-[335px] w-full flex flex-col justify-center gap-[14px] xl:items-center">
                <Link
                  href={"/"}
                  className="max-w-[285px] w-full flex justify-center items-center gap-[10px]"
                >
                  {/*  logo*/}
                  <div className="max-w-[38px] w-full">
                    <img src="/landing/footer-logo.svg" alt="" />
                  </div>
                  <div className="w-full font-[400] text-[20px] leading-[25px] text-[#fff] ">
                    <span className="font-[400]">Verbyo</span> for{" "}
                    <span className="font-[400]">Business</span>
                  </div>
                </Link>

                {/* company */}
                <div
                  className={` w-full text-[#D8DBFB] ${popins.className} font-[400] text-[16px] leading-[30px]`}
                >
                  An organic marketing advertising campaigns platform.
                </div>
              </div>
            </div>
            {/* products all */}
            <div className="sm:max-w-[781px] sm:w-full w-fit flex gap-x-[60px] gap-y-[15px] md:justify-between justify-start flex-wrap text-[#fff]  ">
              {maindata.map((items, id) => {
                return (
                  <Link
                    href={items.link}
                    className={` ${popins.className}  max-w-[165px] w-fit flex flex-col gap-[12px] `}
                  >
                    <div className="text-[20px] font-[600] ">{items.title}</div>
                    <div className="w-full flex flex-col gap-[2px] justify-center ">
                      <div className="text-[16px] ">{items.titlepage1}</div>
                      <div className="text-[16px] ">{items.titlepage2}</div>
                      <div className="text-[16px] ">{items.titlepage3}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* © 2019 Verbyo LLC. All rights reserved. */}
          <div className="ma-w-[1290px] w-full flex flex-col gap-[23px] ">
            <div className="w-full border-t-[0.6px] bg-[#FFFFFF] "></div>
            <div className="w-full flex justify-between flex-wrap gap-[11px]">
              <Link
                href={"/"}
                className={`${popins.className} text-[#FFFFFF] text-[16px] leading-[24px]`}
              >
                © 2019 Verbyo LLC. All rights reserved.
              </Link>

              <div className="max-w-[241px] w-full flex justify-between items-center ">
                <Link
                  href={"/"}
                  className={`${popins.className} text-[#FFFFFF] text-[16px] leading-[24px]`}
                >
                  Terms & Conditions
                </Link>
                <Link
                  href={"/"}
                  className={`${popins.className} text-[#FFFFFF] text-[16px] leading-[24px]`}
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
