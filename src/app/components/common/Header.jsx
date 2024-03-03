import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <div className="mx-auto max-w-[1339px] w-full  flex justify-between mt-[41px] 2xl:px-[0px] pl-[16px] pr-[19px] xl:gap-[61px] gap-[33px]">
      {/* left-side */}
      <Link
        href={"/"}
        className="max-w-[209px] w-full flex justify-center items-center gap-[10px]"
      >
        {/* logo */}
        <div className="max-w-[35px] w-full">
          <Image width={35} height={35} src={"/logo.svg"} />
        </div>

        {/* Name */}
        <div className="font-[400] leading-[19.5px]">
          {" "}
          <span className="font-[700] text-[16px]">Verbyo</span>{" "}
          <span>for</span>{" "}
          <span className="font-[700] text-[16px]">Business</span>{" "}
        </div>
      </Link>
      {/* right-side */}
      <div className="max-w-[811px] lg:flex hidden w-full xl:gap-[61px] gap-[33px]  justify-between">
        {/* options */}
        <div className="max-w-[488px] w-full flex   gap-[20px] justify-between items-center">
          <Link
            href={"/"}
            className=" text-[#5E5D6D] font-[400] text-[14px] hover:text-[#000] hover:font-medium  transition-all duration-300 ease-in"
          >
            Marketing Campaigns
          </Link>
          <Link
            href={"/"}
            className="  text-[#5E5D6D] font-[400] text-[14px] leading-[21px] hover:text-[#000] hover:font-medium  transition-all duration-300 ease-in"
          >
            Ad Manager
          </Link>
          <Link
            href={"/the-people"}
            className="  text-[#5E5D6D] font-[400] text-[14px] hover:text-[#000] hover:font-medium  transition-all duration-300 ease-in"
          >
            The People
          </Link>
          <Link
            href={"/verbyo-app"}
            className="  text-[#5E5D6D] font-[400] text-[14px] hover:text-[#000] hover:font-medium  transition-all duration-300 ease-in"
          >
            VerbyoApp
          </Link>
        </div>
        {/* login-Signup */}

        <div className="max-w-[246px] w-full flex gap-[20px] ">
          <button className="max-w-[78px] w-full px-[18px] py-[10px] text-[14px] font-[600] bg-[#D8DBFB] hover:bg-[#b9bde5] transition-all duration-300 ease-in rounded-[6px]">
            Login
          </button>

          <Button
            text={"Create Account"}
            style={"text-[14px]"}
            href={"/Signup"}
          />
        </div>
      </div>
      {/* <div className="flex flex-col gap-[6px] items-end max-h-[35px] justify-between">
        <div className="min-h-[6px] rounded-[10px] w-[20px] bg-black"/>
        <div className="min-h-[6px] rounded-[10px] w-[35px] bg-black"/>
        <div className="min-h-[6px] rounded-[10px] w-[50px] bg-black"/>
      </div> */}
      <button className="w-fit active:scale-[0.7] block lg:hidden duration-200 ease-in-out transition-all">
        <svg
          width={42}
          height={33}
          viewBox="0 0 42 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 3L25.5 3"
            stroke="black"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <path
            d="M39 16.5L12 16.5"
            stroke="black"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <path
            d="M39 30L3 30"
            stroke="black"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
