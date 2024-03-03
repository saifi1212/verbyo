import Image from "next/image";
import TitleAndParagraph from "../components/common/TitleAndParagraph";
import Verbyoecosystem from "../components/aboutus/Verbyoecosystem";
import Ourpledgetotheworld from "../components/aboutus/Ourpledgetotheworld";
import OurOffices from "../components/aboutus/Ouroffices";
import Verbyocommon from "../components/common/Verbyocommon";
import Header from "../components/common/Header";

export const metadata = {
  title: "The People",
};
function People() {
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
      <Header />
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
      </div>
    </>
  );
}

export default People;
// images about-us and
// comp AboutComp
// variables aboutUs
// Files if react component then first lettor capital else small letter
