import Image from "next/image";
import Swipper from "./Swipper";
import Button from "../common/Button";
import Titleandparagraph from "../common/Titleandparagraph";
import VideoButton from "../common/VideoButton";

function Hero() {
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-[80px] flex flex-col  items-center">
      {/*Title- Organic Word-of-Mouth social media advertising campaigns */}
      <Titleandparagraph
        title={"Organic Word-of-Mouth social media advertising campaigns"}
        extraClassestitle={
          "text-[36px]  leading-[46.5px] text-[36px] max-w-[820px] "
        }
        extraClassespara={"max-w-[900px] font-[400] leading-[30px]"}
        extraClasses={"max-w-[921px] w-full mt-[0px]"}
        para={
          "advertise your brand organically by asking people to share your posts on their personal social media accounts on all major social media platform."
        }
      />
      {/* for Content Creator-video */}
      <div className="max-[1713px] w-full flex mt-[40px] z-30 flex-col items-start ml-[100px]">
        <Swipper />
      </div>
      <div className="max-w-[1280px] w-full  bg-[#EFF0FC] rounded-[16px] absolute mt-[551px] min-h-[507px]  items-end flex  pb-[35px]">
        <div className="w-full justify-center items-center flex flex-col">
          {/* buttons */}
          <div className="max-w-[368px] w-full flex gap-[16px] mb-[10px] justify-center items-center ">
            {/* create Account */}
            <Button
              text={"Create Account"}
              extraClasses={"rounded-[6px]"}
              href={"/Signup"}
            />
            {/* Watch video */}
              <VideoButton href={"/"} text={"Watch video"}  />
          </div>
          {/* trusted by bussiness */}
          <div className=" w-full flex items-center justify-center gap-[20px] mt-[40px] ">
            {/* 1 */}
            <div className="  gap-[5px] flex ">
              <div>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3 8.3L8.825 4.775L8.125 4.075L5.3 6.9L3.875 5.475L3.175 6.175L5.3 8.3ZM6 11C5.30833 11 4.65833 10.8687 4.05 10.606C3.44167 10.3433 2.9125 9.98717 2.4625 9.5375C2.0125 9.0875 1.65633 8.55833 1.394 7.95C1.13167 7.34167 1.00033 6.69167 1 6C1 5.30833 1.13133 4.65833 1.394 4.05C1.65667 3.44167 2.01283 2.9125 2.4625 2.4625C2.9125 2.0125 3.44167 1.65633 4.05 1.394C4.65833 1.13167 5.30833 1.00033 6 1C6.69167 1 7.34167 1.13133 7.95 1.394C8.55833 1.65667 9.0875 2.01283 9.5375 2.4625C9.9875 2.9125 10.3438 3.44167 10.6065 4.05C10.8692 4.65833 11.0003 5.30833 11 6C11 6.69167 10.8687 7.34167 10.606 7.95C10.3433 8.55833 9.98717 9.0875 9.5375 9.5375C9.0875 9.9875 8.55833 10.3438 7.95 10.6065C7.34167 10.8692 6.69167 11.0003 6 11Z"
                    fill="#057DF3"
                  />
                </svg>
              </div>
              <div className="max-w-[169px] w-full text-[12px] font-[400] leading-[18px] text-[#1C1934]">
                Trusted by 16,160 businesses
              </div>
            </div>
            {/* 2 */}
            <div className="  gap-[5px] flex justify-center items-center ">
              <div>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3 8.3L8.825 4.775L8.125 4.075L5.3 6.9L3.875 5.475L3.175 6.175L5.3 8.3ZM6 11C5.30833 11 4.65833 10.8687 4.05 10.606C3.44167 10.3433 2.9125 9.98717 2.4625 9.5375C2.0125 9.0875 1.65633 8.55833 1.394 7.95C1.13167 7.34167 1.00033 6.69167 1 6C1 5.30833 1.13133 4.65833 1.394 4.05C1.65667 3.44167 2.01283 2.9125 2.4625 2.4625C2.9125 2.0125 3.44167 1.65633 4.05 1.394C4.65833 1.13167 5.30833 1.00033 6 1C6.69167 1 7.34167 1.13133 7.95 1.394C8.55833 1.65667 9.0875 2.01283 9.5375 2.4625C9.9875 2.9125 10.3438 3.44167 10.6065 4.05C10.8692 4.65833 11.0003 5.30833 11 6C11 6.69167 10.8687 7.34167 10.606 7.95C10.3433 8.55833 9.98717 9.0875 9.5375 9.5375C9.0875 9.9875 8.55833 10.3438 7.95 10.6065C7.34167 10.8692 6.69167 11.0003 6 11Z"
                    fill="#057DF3"
                  />
                </svg>
              </div>

              <div className=" text-[12px] font-[400] leading-[18px] text-[#1C1934]">
                Relied on by 1,302 Foundations & NGO’s
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Avon-UNICEF */}
      <div className="max-w-[1150px] w-full flex gap-[60px] mt-[284px]  items-center z-20 justify-center ">
        <div className="max-w-[144px] w-full">
          <Image width={144} height={60} src={"/avon.svg"} />
        </div>
        <div className="max-w-[240px] w-full">
          <Image width={240} height={60} src={"/unicef.svg"} />
        </div>
        <div className="max-w-[132px] w-full">
          <Image width={132} height={60} src={"/ocean-cleanup 1.svg"} />
        </div>
        <div className="max-w-[101px] w-full">
          <Image
            width={101}
            height={60}
            src={"/580b57fcd9996e24bc43c525.svg"}
          />
        </div>
        <div className="max-w-[101px] w-full">
          <Image width={101} height={60} src={"/under-armor.svg"} />
        </div>
        <div className="max-w-[130px] w-full">
          <Image width={130} height={60} src={"/northface.svg"} />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Hero;
