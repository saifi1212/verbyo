import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <div className="mx-auto max-w-[1339px] w-full  flex justify-between mt-[41px] pr-[20px]">
      {/* left-side */}
      <Link href={"/"} className="max-w-[209px] w-full flex justify-center items-center">
        {/* logo */}
        <div className="max-w-[35px] w-full">
          <Image width={35} height={35} src={"/logo.svg"} />
        </div>

        {/* Name */}
        <div className="font-[400] leading-[19.5px]">
          {" "}
          <span className="font-[700] text-[16px]">Verbyo</span>{" "}
          <span >for</span>{" "}
          <span className="font-[700] text-[16px]">Business</span>{" "}
        </div>
      </Link>
      {/* right-side */}
      <div className="max-w-[811px] w-full gap-[61px] flex">
        {/* options */}
        <div className="max-w-[483px] w-full flex   gap-[28px] items-center">
        <button className=" text-[#5E5D6D] font-[400] text-[14px]">Marketing Campaigns</button>
        <button className="  text-[#5E5D6D] font-[400] text-[14px] leading-[21px]">Ad Manager</button>
        <Link href={"/thepeople"} className="  text-[#5E5D6D] font-[400] text-[14px]">The People</Link>
        <Link  href={"/verbyoapp"} className="  text-[#5E5D6D] font-[400] text-[14px]">VerbyoApp</Link>
        </div>
        {/* login-Signup */}

        <div className="max-w-[267px] w-full flex gap-[20px] ">
          <button className= "max-w-[78px] w-full px-[18px] py-[10px] text-[14px] font-[600] bg-[#D8DBFB] rounded-[6px]">
            Login
          </button>
          
            <Button
              text={"Create Account"}
              extraClasses={"rounded-[6px] text-[14px] font-[600]  "}
              href={"/Signup"}
            />
         
          

        </div>

      </div>
    </div>
  );
}

export default Header;
