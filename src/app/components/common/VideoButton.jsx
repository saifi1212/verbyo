import { popins } from "@/app/layout";
import Link from "next/link";

function VideoButton({ text, href, extraClasses }) {
  return (
    <Link
      href={`${href}`}
      className={` ${extraClasses} ${popins.className} bg-[#D8DBFB] max-w-[184px] w-full px-[28.5px] py-[10px] rounded-[6px]  gap-[6px] flex justify-center items-center`}
    >
      <div className="max-w-[16px] w-full flex justify-center items-center ">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83398 10.0002L10.5007 7.00016L5.83398 4.00016V10.0002ZM7.50065 13.6668C6.57843 13.6668 5.71176 13.4917 4.90065 13.1415C4.08954 12.7913 3.38398 12.3164 2.78398 11.7168C2.18398 11.1168 1.7091 10.4113 1.35932 9.60016C1.00954 8.78905 0.834429 7.92239 0.833984 7.00016C0.833984 6.07794 1.0091 5.21127 1.35932 4.40016C1.70954 3.58905 2.18443 2.8835 2.78398 2.2835C3.38398 1.6835 4.08954 1.20861 4.90065 0.858829C5.71176 0.509052 6.57843 0.333941 7.50065 0.333496C8.42287 0.333496 9.28954 0.508607 10.1007 0.858829C10.9118 1.20905 11.6173 1.68394 12.2173 2.2835C12.8173 2.8835 13.2924 3.58905 13.6427 4.40016C13.9929 5.21127 14.1678 6.07794 14.1673 7.00016C14.1673 7.92239 13.9922 8.78905 13.642 9.60016C13.2918 10.4113 12.8169 11.1168 12.2173 11.7168C11.6173 12.3168 10.9118 12.7919 10.1007 13.1422C9.28954 13.4924 8.42287 13.6673 7.50065 13.6668Z"
            fill="#057DF3"
          />
        </svg>
      </div>

      <div className=" max-w-[127px] w-full flex  items-center  text-[16px] font-[600] text-[#000000]">
        {text}
      </div>
    </Link>
  );
}

export default VideoButton;
