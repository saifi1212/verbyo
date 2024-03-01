"use client"
import { useRouter } from "next/navigation";
import { popins } from "../../layout";

const Button = ({ text, style, href, handleClick }) => {
  const router = useRouter()
  const handleButtonClick = () => {
    { handleClick && handleClick() }
    { href && router.push(href) }
  }
  return (
    <button onClick={handleButtonClick} className={`${style} ${popins.className} text-[#fff]  bg-[#057DF3] rounded-[12px]   font-[600] text-[16px]  w-full justify-center items-center  flex min-h-[44px]`}>
      {text}
    </button>
  );
};

export default Button;