import Image from "next/image";
import Titleandparagraph from "../components/common/Titleandparagraph";
import Verbyoecosystem from "../components/aboutus/Verbyoecosystem";
import Ourpledgetotheworld from "../components/aboutus/Ourpledgetotheworld";
import OurOffices from "../components/aboutus/Ouroffices";
import Verbyocommon from "../components/common/Verbyocommon";
import Header from "../components/common/Header";

export const metadata = {
  title: "About Us",
};
function About() {
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
    <div className="max-w-[1280px] w-full mx-auto   ">
      {/* about us */}
      <Verbyocommon
        heading={"About Us"}
        paragraph={
          "Verbyo is the only marketing platform that allows advertisers, content creators, non-profit organizations, government and local authorities to distribute their message organically across all major social media platforms through the help of real authentic people."
        }
        btntext={"Create Account"}
        videbtntext={"Watch Video"}
        extraClasses={"pb-[50px]"}
        extraClassespara={
          "max-w-[924px]  w-full flex justify-end text-[18px] font-[400] leading-[28px] "
        }
      />

      <div>
        {/* Our Mission */}
        <div className="max-w-[1280px]  w-full  mx-auto  mt-[100px] ">
          <Titleandparagraph
            title={"Our Mission and Values"}
            extraClasses={"font-[400] text-[18px]  "}
            extraClassespara={"max-w-[900px]  w-full flex justify-end  "}
            para={
              "We value integrity, inclusivity, and innovation, striving to create a platform where every voice is heard and respected. By championing these principles, we aim to build a more informed, just, and connected society."
            }
          />
        </div>
        <div className="max-w-[1280px] w-full mx-auto flex flex-col  items-center">
          <div className=" max-w-[1270px] w-full flex gap-[23px] justify-center ">
            {maindata.map((items, id) => {
              return (
                <div className="max-w-[260px]    cursor-pointer group hover:max-w-[710px] w-full  bg-[#EFF0FC]  rounded-[10px] pt-[31px] hover:pl-[40px] hover:pr-[36px] px-[27px] mt-[37px] transition-all duration-300 ease-in-out group-hover:flex-col flex justify-center ">
                  <div className="max-w-[206px] w-full group-hover:max-w-[710px] group-hover:pb-[61px] pb-[163px] ">
                    <div className=" flex justify-center flex-col items-center group-hover:items-start w-full  gap-[25px] mt-[127px]  group-hover:mt-0  ">
                      <div className="max-w-[75px] w-full px-[13px] py-[16px] bg-[#fff] rounded-[5px] items-center ">
                        <div className="max-w-[43px] w-full font-[700] text-[40px] leading-[48.76px] text-[#9BA2EA] justify-center items-center flex">
                          {items.no}
                        </div>
                      </div>

                      <div className=" w-full flex flex-col gap-[13px]">
                        <div className="max-w-[454px] w-full  text-[24px] text-[#1C1934] font-[700] leading-[29.5px]">
                          {items.title}
                        </div>
                        {/* <div className="group-hover:max-w-[634px] w-full hidden group-hover:flex text-[18px] font-[400] leading-[30px] max-w-[0px] ">
                          {items.para}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Verbyoecosystem />
      <Ourpledgetotheworld />
      <OurOffices />
    </div>
    </>
  );
}

export default About;
