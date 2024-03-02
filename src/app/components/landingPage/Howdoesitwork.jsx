import Titleandparagraph from "../common/TitleAndParagraph";
import VideoButton from "../common/VideoButton";

function Howdoesitwork() {
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-[121px] flex flex-col  items-center">
      <Titleandparagraph
        title={"How does it work?"}
        extraClassestitle={"text-[36px]  leading-[46.5px] text-[36px] "}
        extraClassespara={"max-w-[900px] font-[400] leading-[30px]"}
        para={
          "We have simplified the whole process of launching organic campaigns, so that anybody can promote their product, service or social cause."
        }
      />
      <div className="w-full flex gap-[23px] justify-center">
        {/* 1 */}
        <div className="max-w-[260px]  cursor-pointer group hover:max-w-[710px] w-full  bg-gradient-to-r from-[#2D67D0] to-[#7A43EA] pr-[29px] rounded-[10px] pt-[31px] hover:pl-[0px] pl-[29px] mt-[37px] transition-all duration-300 ease-in-out group-hover:flex-col flex justify-center">
          <div className="flex flex-col group-hover:overflow-hidden group-hover:pl-[29px]">
            <div className="max-w-[186px] group-hover:max-w-[601px] w-full group-hover:flex gap-[25px] mt-[127px]  group-hover:mt-0 pb-[163px] ">
              <div className="max-w-[175px] w-full font-[700] text-[10px] text-[#fff] flex flex-col group-hover:justify-start group-hover:max-w-[34px] justify-center items-center transition-all duration-300">
                <div class="leading-[11.72px] text-[10px] tracking-[3px] ">
                  STEP
                </div>
                <div class="max-w-[31px] w-full text-[60px]  group-hover:text-[80px] text-[#fff] font-[600] ">
                  1
                </div>
              </div>
              <div className="max-w-[186px] mt-[34px]  group-hover:max-w-[552px] group-hover:flex  w-full group-hover:text-[20px] text-[16px] font-[500] text-[#fff] group-hover:font-[600] transition-all duration-300">
                Selected individuals will share your campaign on their social
                media accounts and inform their friends about your brand.
              </div>
            </div>

            <div className="flex ml-[-30px] z-20 ">
              <div className="  w-full group-hover:flex flex-col gap-[20px] hidden z-20 ">
                <div className="max-w-[186px] w-full flex  items-center gap-[6px] bg-[#FFFFFF] rounded-[6px] px-[18px] py-[10px]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.25"
                      width="16.5"
                      height="16.5"
                      rx="2"
                      fill="#F9F7F7"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.5 12.8001C8.5 12.5516 8.70146 12.3501 8.95 12.3501H12.55C12.7985 12.3501 13 12.5516 13 12.8001C13 13.0486 12.7985 13.2501 12.55 13.2501H8.95C8.70146 13.2501 8.5 13.0486 8.5 12.8001Z"
                      fill="#2D67D0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.448 6.99495C13.1724 6.2677 13.1417 5.31267 12.6008 4.72782C12.337 4.44264 11.9616 4.26048 11.5364 4.25044C11.1096 4.24036 10.6675 4.40357 10.2594 4.74493C10.249 4.75366 10.239 4.76285 10.2294 4.77249L4.3935 10.6317C4.14149 10.8846 4 11.2272 4 11.5843V12.3464C4 12.8421 4.40138 13.2499 4.90172 13.2499H5.65718C6.01615 13.2499 6.36034 13.107 6.61366 12.8526L12.448 6.99495ZM10.8431 5.95681C10.6674 5.78108 10.3825 5.78108 10.2067 5.95681C10.031 6.13255 10.031 6.41747 10.2067 6.5932L10.6567 7.0432C10.8325 7.21893 11.1174 7.21893 11.2931 7.0432C11.4689 6.86746 11.4689 6.58254 11.2931 6.40681L10.8431 5.95681Z"
                      fill="#2D67D0"
                    />
                  </svg>

                  <div className="text-[#000] font-[600] text-[14px] max-w-[110px] w-full">
                    Design your ad
                  </div>
                </div>
                {/* Choose Audience */}
                <button className="max-w-[186px] w-full flex  items-center gap-[6px] bg-[#FFFFFF] rounded-[6px] px-[18px] py-[10px]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.25"
                      y="0.25"
                      width="16.5"
                      height="16.5"
                      rx="2"
                      fill="#F9F7F7"
                    />
                    <path
                      d="M7.05859 8.05962C7.05859 7.40214 7.5916 6.86914 8.24908 6.86914C8.90656 6.86914 9.43956 7.40214 9.43956 8.05962C9.43956 8.7171 8.90656 9.25011 8.24908 9.25011C7.5916 9.25011 7.05859 8.7171 7.05859 8.05962Z"
                      fill="#2D67D0"
                    />
                    <path
                      d="M3.96606 8.10017C3.96606 7.44264 4.49906 6.90967 5.15655 6.90967C5.81403 6.90967 6.34703 7.44264 6.34703 8.10017C6.34703 8.75765 5.81403 9.29065 5.15655 9.29065C4.49906 9.29065 3.96606 8.75765 3.96606 8.10017Z"
                      fill="#2D67D0"
                    />
                    <path
                      d="M5.51099 5.44048C5.51099 4.783 6.04398 4.25 6.70147 4.25C7.35895 4.25 7.89195 4.783 7.89195 5.44048C7.89195 6.09797 7.35895 6.63097 6.70147 6.63097C6.04398 6.63097 5.51099 6.09797 5.51099 5.44048Z"
                      fill="#2D67D0"
                    />
                    <path
                      d="M8.60645 5.44048C8.60645 4.783 9.13945 4.25 9.79693 4.25C10.4544 4.25 10.9874 4.783 10.9874 5.44048C10.9874 6.09797 10.4544 6.63097 9.79693 6.63097C9.13945 6.63097 8.60645 6.09797 8.60645 5.44048Z"
                      fill="#2D67D0"
                    />
                    <path
                      d="M10.1543 8.10017C10.1543 7.44264 10.6873 6.90967 11.3448 6.90967C12.0023 6.90967 12.5353 7.44264 12.5353 8.10017C12.5353 8.75765 12.0023 9.29065 11.3448 9.29065C10.6873 9.29065 10.1543 8.75765 10.1543 8.10017Z"
                      fill="#2D67D0"
                    />
                    <path
                      d="M6.34546 10.3217C6.34546 10.1245 6.50536 9.9646 6.7026 9.9646H9.79786C9.89258 9.9646 9.98343 10.0022 10.0504 10.0692C10.1174 10.1362 10.155 10.227 10.155 10.3217C10.155 10.3217 10.155 10.7571 10.155 11.036V11.037V11.0381L10.155 11.0406L10.1549 11.0469C10.1548 11.0518 10.1546 11.0578 10.1543 11.0649C10.1537 11.0791 10.1525 11.0977 10.1504 11.1203C10.1462 11.1651 10.1382 11.226 10.1227 11.2978C10.0918 11.4402 10.0297 11.6322 9.90343 11.8261C9.63695 12.2355 9.13057 12.5837 8.24785 12.5837C7.36704 12.5837 6.86186 12.2351 6.59618 11.8257C6.47035 11.6318 6.40847 11.4399 6.37768 11.2976C6.36217 11.2259 6.35416 11.165 6.35 11.1202C6.34792 11.0977 6.34678 11.079 6.34617 11.0648C6.34586 11.0577 6.34569 11.0517 6.34558 11.0469L6.34548 11.0406L6.34546 11.0381L6.34546 11.037V10.3217Z"
                      fill="#2D67D0"
                    />
                    <path
                      d="M5.94926 9.9646C5.89783 10.0728 5.86906 10.1939 5.86906 10.3217L5.86907 11.0399L5.86909 11.0443L5.86924 11.0545L5.86929 11.0569C5.86946 11.0651 5.86975 11.0747 5.87022 11.0854C5.87115 11.1069 5.87279 11.1334 5.87564 11.1641C5.88132 11.2254 5.89196 11.3054 5.91205 11.3982C5.9517 11.5816 6.03169 11.8309 6.19653 12.0849C6.20349 12.0957 6.21057 12.1063 6.21775 12.1169C5.94659 12.2571 5.5973 12.3456 5.1524 12.3456C4.27157 12.3456 3.7664 11.997 3.50072 11.5876C3.37489 11.3937 3.31301 11.2018 3.28222 11.0595C3.26671 10.9878 3.2587 10.9269 3.25454 10.8821C3.25246 10.8596 3.25132 10.8409 3.25071 10.8267C3.25031 10.8175 3.25 10.7989 3.25 10.7989V10.3217C3.25 10.1245 3.4099 9.9646 3.60715 9.9646H5.94926Z"
                      fill="#2D67D0"
                    />
                    <path
                      d="M10.2815 12.1175C10.5518 12.2573 10.8999 12.3456 11.3431 12.3456C12.2258 12.3456 12.7322 11.9974 12.9987 11.588C13.1249 11.3941 13.187 11.2021 13.2179 11.0597C13.2335 10.9879 13.2415 10.927 13.2457 10.8822C13.2478 10.8597 13.2489 10.841 13.2495 10.8268C13.2498 10.8197 13.25 10.8137 13.2501 10.8088L13.2502 10.8025V10.8V10.7989V10.3217C13.2502 10.227 13.2126 10.1362 13.1457 10.0692C13.0787 10.0022 12.9878 9.9646 12.8931 9.9646H10.5508C10.6032 10.0752 10.6312 10.197 10.6312 10.3217V11.0377V11.0388V11.0418L10.6311 11.0481L10.6309 11.0569C10.6308 11.0652 10.6305 11.0747 10.63 11.0855C10.6291 11.107 10.6274 11.1336 10.6246 11.1644C10.6189 11.2257 10.6082 11.3058 10.588 11.3988C10.5482 11.5823 10.4679 11.8318 10.3025 12.0859C10.2956 12.0965 10.2886 12.107 10.2815 12.1175Z"
                      fill="#2D67D0"
                    />
                  </svg>

                  <div className="text-[#000] font-[600] text-[14px]  w-full">
                    Choose Audience
                  </div>
                </button>
                {/* Set Price per Post */}
                <button className="max-w-[186px] w-full flex  items-center gap-[6px] bg-[#FFFFFF] rounded-[6px] px-[18px] py-[10px]">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.25"
                      width="16.5"
                      height="16.5"
                      rx="2"
                      fill="#F9F7F7"
                    />
                    <path
                      d="M11.75 9.71301C11.75 10.2409 11.5591 10.6659 11.1773 10.9879C10.7955 11.3066 10.4176 11.4975 9.73032 11.5606V12.5815H8.73492V11.5806C7.92484 11.564 7.37093 11.4212 6.76002 11.1523V9.83757C7.04884 9.9803 7.39583 10.1065 7.80083 10.216C8.20919 10.3256 8.41612 10.3903 8.73484 10.4103V8.86645L8.55775 8.73696C7.90042 8.47797 7.43395 8.19745 7.15837 7.89532C6.88615 7.58991 6.75 7.21309 6.75 6.76487C6.75 6.28346 6.93759 5.8884 7.31276 5.57962C7.69122 5.26755 8.06091 5.07832 8.73484 5.01193V4.25H9.73024V4.99205C10.4905 5.02524 11.0212 5.17799 11.6354 5.45021L11.1673 6.61549C10.6494 6.40301 10.2748 6.27352 9.73024 6.22709V7.69623C10.3776 7.9452 10.6809 8.16104 10.9532 8.34362C11.2287 8.52619 11.4296 8.72709 11.5558 8.94623C11.6852 9.16529 11.75 9.42091 11.75 9.71301ZM10.251 9.78778C10.251 9.64835 10.1945 9.53052 10.0816 9.43422C9.96872 9.33792 9.95595 9.23833 9.73024 9.13538V10.3754C10.1817 10.299 10.251 10.1031 10.251 9.78778ZM8.24905 6.76487C8.24905 6.91096 8.29884 7.03216 8.39842 7.12838C8.50138 7.22131 8.50913 7.31761 8.73484 7.4172V6.24698C8.30651 6.31008 8.24905 6.48271 8.24905 6.76487Z"
                      fill="#2D67D0"
                    />
                  </svg>

                  <div className="text-[#000] font-[600] text-[14px] w-full">
                    Set Price per Post
                  </div>
                </button>
                {/* Enter Requirements */}
                <button className="max-w-[203px] w-full flex  items-center gap-[6px] bg-[#FFFFFF] rounded-[6px] px-[18px] py-[10px]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.25"
                      y="0.25"
                      width="16.5"
                      height="16.5"
                      rx="2"
                      fill="#F9F7F7"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.79445 4.23652C9.62473 4.16675 9.40954 4.16675 8.97917 4.16675C8.54879 4.16675 8.3336 4.16675 8.16388 4.23652C7.93756 4.32956 7.75775 4.50801 7.66401 4.73262C7.62121 4.83515 7.60446 4.95439 7.59791 5.12833C7.58828 5.38393 7.4562 5.62053 7.23299 5.74842C7.00979 5.87631 6.73729 5.87154 6.50943 5.75201C6.35437 5.67068 6.24195 5.62545 6.13108 5.61097C5.88821 5.57923 5.64258 5.64455 5.44824 5.79255C5.30248 5.90355 5.19489 6.08849 4.9797 6.45838C4.76452 6.82828 4.65693 7.01322 4.63295 7.194C4.60097 7.43503 4.66679 7.6788 4.81592 7.87169C4.88398 7.95973 4.97964 8.03371 5.12811 8.12629C5.34637 8.26241 5.48681 8.49429 5.4868 8.75008C5.48678 9.00588 5.34635 9.2377 5.12811 9.37378C4.97962 9.46641 4.88394 9.54043 4.81587 9.62848C4.66674 9.82134 4.60093 10.0651 4.63291 10.3061C4.65689 10.4869 4.76448 10.6719 4.97966 11.0417C5.19484 11.4116 5.30243 11.5966 5.44819 11.7076C5.64254 11.8556 5.88816 11.9209 6.13103 11.8892C6.2419 11.8747 6.35431 11.8294 6.50936 11.7481C6.73724 11.6286 7.00975 11.6238 7.23297 11.7517C7.45619 11.8796 7.58827 12.1162 7.59791 12.3719C7.60446 12.5458 7.62121 12.665 7.66401 12.7676C7.75775 12.9921 7.93756 13.1706 8.16388 13.2637C8.3336 13.3334 8.54879 13.3334 8.97917 13.3334C9.40954 13.3334 9.62473 13.3334 9.79445 13.2637C10.0208 13.1706 10.2006 12.9921 10.2943 12.7676C10.3371 12.665 10.3539 12.5458 10.3604 12.3718C10.3701 12.1162 10.5021 11.8796 10.7253 11.7517C10.9485 11.6238 11.2211 11.6286 11.4489 11.7481C11.604 11.8294 11.7164 11.8746 11.8272 11.8891C12.0701 11.9209 12.3157 11.8556 12.5101 11.7076C12.6559 11.5966 12.7634 11.4116 12.9786 11.0417C13.1938 10.6718 13.3014 10.4869 13.3254 10.3061C13.3573 10.0651 13.2915 9.8213 13.1424 9.62843C13.0743 9.54039 12.9787 9.46636 12.8302 9.37378C12.612 9.2377 12.4715 9.00583 12.4715 8.75004C12.4715 8.49424 12.612 8.26246 12.8302 8.12638C12.9787 8.03375 13.0744 7.95978 13.1425 7.87169C13.2916 7.67883 13.3574 7.43506 13.3254 7.19403C13.3014 7.01325 13.1939 6.8283 12.9787 6.45841C12.7635 6.08853 12.6559 5.90358 12.5101 5.79258C12.3158 5.64458 12.0702 5.57926 11.8273 5.611C11.7164 5.62548 11.604 5.6707 11.449 5.75203C11.2211 5.87156 10.9486 5.87634 10.7254 5.74844C10.5022 5.62054 10.3701 5.38393 10.3604 5.1283C10.3538 4.95438 10.3371 4.83515 10.2943 4.73262C10.2006 4.50801 10.0208 4.32956 9.79445 4.23652ZM8.97917 10.1251C9.74435 10.1251 10.3646 9.50949 10.3646 8.75008C10.3646 7.99067 9.74435 7.37508 8.97917 7.37508C8.21398 7.37508 7.5937 7.99067 7.5937 8.75008C7.5937 9.50949 8.21398 10.1251 8.97917 10.1251Z"
                      fill="#2D67D0"
                    />
                  </svg>

                  <div className="text-[#000] w-full font-[600] text-[14px]  ">
                    Enter Requirements
                  </div>
                </button>
              </div>
              <div className="  group-hover:flex  absolute mt-[-100px]   group-hover:ml-[133px] hidden ">
                <img src="/Rectangle 14463.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="max-w-[260px] cursor-pointer group hover:max-w-[710px] w-full  bg-gradient-to-r from-[#2D67D0] to-[#7A43EA] pr-[29px] rounded-[10px] pt-[31px] pl-[49px]  mt-[37px] transition-all duration-300 ease-in-out flex justify-center">
          <div className="max-w-[186px] group-hover:max-w-[601px] w-full group-hover:flex gap-[25px] mt-[127px] group-hover:mt-0 pb-[163px] ">
            <div className="max-w-[175px] w-full font-[700] text-[10px] text-[#fff] flex flex-col group-hover:justify-start group-hover:max-w-[34px] justify-center items-center transition-all duration-300">
              <div class="leading-[11.72px] text-[10px] tracking-[3px] ">
                STEP
              </div>
              <div class="max-w-[31px] w-full text-[60px]  group-hover:text-[80px] text-[#fff] font-[600] ">
                2
              </div>
            </div>
            <div className="max-w-[186px] mt-[34px]  group-hover:max-w-[552px] group-hover:flex  w-full group-hover:text-[20px] text-[16px] font-[500] text-[#fff] group-hover:font-[600] transition-all duration-300">
              Selected individuals will share your campaign on their social
              media accounts and inform their friends about your brand.
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="max-w-[260px] cursor-pointer group hover:max-w-[710px] w-full  bg-gradient-to-r from-[#2D67D0] to-[#7A43EA] pr-[29px] rounded-[10px] pt-[31px] pl-[49px] mt-[37px] transition-all duration-300 ease-in-out flex justify-center">
          <div className="max-w-[186px] group-hover:max-w-[601px] w-full group-hover:flex gap-[25px] mt-[127px] group-hover:mt-0 pb-[163px] ">
            <div className="max-w-[175px] w-full font-[700] text-[10px] text-[#fff] flex flex-col group-hover:justify-start group-hover:max-w-[34px] justify-center items-center transition-all duration-300">
              <div class="leading-[11.72px] text-[10px] tracking-[3px] ">
                STEP
              </div>
              <div class="max-w-[31px] w-full text-[60px]  group-hover:text-[80px] text-[#fff] font-[600] ">
                3
              </div>
            </div>
            <div className="max-w-[186px] mt-[34px] group-hover:max-w-[552px] w-full group-hover:text-[20px] text-[16px] font-[500] text-[#fff] group-hover:font-[600] transition-all duration-300">
              Monitor your campaign's performance through your personalized
              dashboard.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[46px] w-full flex justify-center">
        {/* Watch video */}

        {/* <button className="max-w-[184px] w-full bg-[#D8DBFB] px-[18px] py-[10px] rounded-[6px] flex items-center gap-[6px]">
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

          <div className="  text-[16px] font-[600] text-[#000000]">
            Watch Video
          </div>
        </button> */}
        <VideoButton text={"Watch Video"} styles={"max-w-[184px]"} />
      </div>
    </div>
  );
}

export default Howdoesitwork;
