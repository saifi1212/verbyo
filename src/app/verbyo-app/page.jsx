import Image from "next/image";
import Titleandparagraph from "../components/common/Titleandparagraph";
import Verbyoecosystem from "../components/aboutus/Verbyoecosystem";
import Ourpledgetotheworld from "../components/aboutus/Ourpledgetotheworld";
import OurOffices from "../components/aboutus/Ouroffices";
import Button from "../components/common/Button";
import Link from "next/link";
import VideoButton from "../components/common/VideoButton";
import Header from "../components/common/Header";

export const metadata = {
  title: "Verbyo App",
};
function Verbyoapp() {
  const maindata = [
    {
      id: 0,
      no: "01",
      title: "A transparent and safe advertising enviroment",
      para: "Verbyo is transforming the advertising industry by creating an environment that prioritizes transparency and security. This initiative guarantees clarity in data management, allowing both advertisers and consumers to have authority over their personal information. Such a strategy not only builds trust but also elevates the efficiency of advertising efforts. Moreover, campaigns featured on Verbyo are authentic, providing customers with honest insights into the products being promoted, while effectively curbing deceptive advertisements.",
      link: "here",
    },
    {
      id: 1,
      no: "02",
      title: "Fight against disinformation and divisive content",
      para: "Verbyo is transforming the advertising industry by creating an environment that prioritizes transparency and security. This initiative guarantees clarity in data management, allowing both advertisers and consumers to have authority over their personal information. Such a strategy not only builds trust but also elevates the efficiency of advertising efforts. Moreover, campaigns featured on Verbyo are authentic, providing customers with honest insights into the products being promoted, while effectively curbing deceptive advertisements.",
    },
    {
      id: 2,
      no: "03",
      title: "A loud voice for those in need",
      para: "Verbyo is transforming the advertising industry by creating an environment that prioritizes transparency and security. This initiative guarantees clarity in data management, allowing both advertisers and consumers to have authority over their personal information. Such a strategy not only builds trust but also elevates the efficiency of advertising efforts. Moreover, campaigns featured on Verbyo are authentic, providing customers with honest insights into the products being promoted, while effectively curbing deceptive advertisements.",
    },
  ];
  return (
    <>
    <Header/>
    <div className="max-w-[1280px] w-full mx-auto  h-screen ">
      {/* Verbyo App */}
      <div className="max-w-[1280px] w-full mx-auto   bg-[#EFF0FC] rounded-[20px] mt-[50px]  pt-[49px] pb-[253px] ">
        <div className="max-w-[1036px]  w-full  mx-auto ">
          <Titleandparagraph
            title={"Verbyo App"}
            extraClasses={"font-[400] text-[18px]  "}
            extraClassespara={
              "max-w-[1036px]  w-full flex justify-end text-[18px] font-[400] leading-[28px] "
            }
            para={
              "This groundbreaking app, embraced by users globally, enables individuals to craft content for their social media profiles and interact with their friends. It stands as the world's first platform to reward users for every post they make, presenting them with a unique chance to earn from the time they invest in social media networks."
            }
          />
        </div>
        <div className="w-full justify-center items-center flex flex-col mt-[19px]">
          {/* buttons */}
          <div className="max-w-[368px] w-full flex gap-[16px] mb-[10px] justify-center items-center ">
            {/* create Account */}
            <Button
              text={"Get the App"}
              extraClasses={"rounded-[6px]"}
              href={"/GetApp"}
            />
            {/* Watch video */}
            <VideoButton text={"Watch video"} href={"/"} />
          </div>
          {/* trusted by bussiness */}
          <div className=" w-full flex items-center justify-center gap-[20px] mt-[19px] ">
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
      <div className=" flex flex-col max-w-[1280px] w-full justify-center items-center absolute mx-auto">
        <div className="max-w-[910px] w-full flex justify-between  mt-[-210px] items-center   ">
          <div className="max-w-[262px] w-full">
            <img
              width={"100%"}
              height={"auto"}
              className="relative z-20 justify-center flex items-center "
              src={"/verbyoapp/iPhone 12 start.png"}
            />
          </div>
          <div className="max-w-[262px] w-full">
            <img
              width={"100%"}
              height={"auto"}
              className="relative z-20 justify-center flex items-center "
              src={"/verbyoapp/iPhone 12 center.png"}
            />
          </div>
          <div className="max-w-[262px] w-full">
            <img
              width={"100%"}
              height={"auto"}
              className="relative z-20 justify-center flex items-center "
              src={"/verbyoapp/iPhone 12 Pro.png"}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Verbyoapp;
