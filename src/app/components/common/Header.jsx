import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <div className="mx-auto max-w-[1339px] w-full  flex justify-between mt-[41px] ">
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
      <div className="max-w-[811px] w-full gap-[61px] flex">
        {/* options */}
        <div className="max-w-[485px] w-full flex   gap-[20px] justify-between items-center">
          <Link
            href={"/marketing-campaigns"}
            className=" text-[#5E5D6D] font-[400] text-[14px] hover:text-[#000] hover:font-medium  transition-all duration-300 ease-in"
          >
            Marketing Campaigns
          </Link>
          <Link
            href={"/ad-manager"}
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
    </div>
  );
}

export default Header;
