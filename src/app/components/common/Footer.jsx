import Link from "next/link";
import { popins } from "../../layout";

function Footer({ extraclasses }) {
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
      link: "/aboutus",
    },
  ];
  return (
    <>
      <div
        className={`${extraclasses} w-full  flex justify-center  absolute mt-[255px] `}
      >
        <img src="footer/Ornament - circle.svg" alt="" />
      </div>
      <div className=" w-full  flex justify-between   bg-[#262F61]  mt-[467px]  z-10 relative">
        <div className="max-w-[1290px] w-full mx-auto flex justify-between pt-[57px] pb-[31px] flex-col gap-[82px] ">
          <div className="max-w-[1290px] w-full mx-auto flex justify-between  flex-col gap-[82px] ">
            <div className="max-w-[1290px] w-full flex justify-between  ">
              {/* logo and company */}
              <div>
                <div className="max-w-[285px] w-full flex flex-col justify-center gap-[14px] items-center">
                  <Link
                    href={"/"}
                    className="max-w-[285px] w-full flex justify-center items-center gap-[10px]"
                  >
                    {/*  logo*/}
                    <div className="max-w-[38px] w-full">
                      <img src="/footer-logo.svg" alt="" />
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
              <div className="max-w-[781px] w-full flex justify-between text-[#fff]  ">
                {maindata.map((items, id) => {
                  return (
                    <Link
                      href={items.link}
                      className={` ${popins.className}  max-w-[165px] w-full flex flex-col gap-[12px] `}
                    >
                      <div className="text-[20px] font-[600] ">
                        {items.title}
                      </div>
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
              <div className="w-full border-[0.6px] bg-[#FFFFFF] "></div>
              <div className="w-full flex justify-between">
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
    </>
  );
}

export default Footer;
