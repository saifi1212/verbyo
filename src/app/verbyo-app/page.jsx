import VerbyoCommon from "../components/common/VerbyoCommon";
import Advertising from "../components/common/Advertising";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export const metadata = {
  title: "Verbyo App",
};
const OtherComponent = () => {
  return (
    <div className="max-w-[909px] w-full mx-auto ">
      <Image src={"/verbyoapp/mobiles.png"} width={909} height={545} />
    </div>
  );
};
function VerbyoApp() {
  const maindata = [
    {
      imgUrl: "/verbyoapp/iPhone 12 start.png",
    },
    {
      imgUrl: "/verbyoapp/iPhone 12 center.png",
    },
    {
      imgUrl: "/verbyoapp/iPhone 12 Pro.png",
    },
  ];
  return (
    <>
      <Header />
      <div className="max-w-[1280px] w-full mx-auto  ">
        {/* Verbyo App */}
        <VerbyoCommon
          title={"Verbyo App"}
          paragraph={
            "This groundbreaking app, embraced by users globally, enables individuals to craft content for their social media profiles and interact with their friends. It stands as the world's first platform to reward users for every post they make, presenting them with a unique chance to earn from the time they invest in social media networks."
          }
          stylesForDiv={"min-h-[555px] max-h-[55px]"}
          btnText={"Get the App"}
          videoBtnText={"Watch Video"}
          otherComponent={<OtherComponent />}
        />
        <Advertising
          extraClasses={"max-w-[1195px] mt-[451px]"}
          extraClassespara={"normal-case max-w-[548px]  	"}
          title={"Meet the people who use Verbyo App"}
          verbyo
          Authenticity
          para={
            "The people posting your campaign on their social media accounts are everyday individuals, akin to a friend you'd meet for coffee, a family member, or even someone you look up to. "
          }
          maindata={[
            {
              id: 0,
              title: "Monetize their time spent online ",

              imgUrl: "/advertise/auth.svg",
            },
            {
              id: 1,
              title: "Improve content quality on their feeds ",
              imgUrl: "/advertise/trust.svg",
            },
            {
              id: 2,
              title: "Drive positive change by sharing social causes ",
              imgUrl: "/advertise/viral.svg",
            },
            {
              id: 3,
              title: "Share innovative ideas with their audience ",
              imgUrl: "/advertise/enhanced.svg",
            },
          ]}
          rightImage={"/verbyoapp/imageGirl.png"}
        />
      </div>
      <Footer marginTop={"mt-[269px]"} />
    </>
  );
}

export default VerbyoApp;
