"use client";
import { useRouter } from "next/navigation";
import { popins } from "../../layout";

const Button = ({ text, style, href, handleClick }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    {
      handleClick && handleClick();
    }
    {
      href && router.push(href);
    }
  };
  return (
    <button
      onClick={handleButtonClick}
      className={`${style} ${popins.className} text-[#fff] transition-all duration-300 ease-in bg-[#057DF3] hover:bg-[#0554f3] rounded-[6px]   font-[600]   w-full justify-center items-center  flex min-h-[44px]`}
    >
      {text}
    </button>
  );
};

export default Button;
