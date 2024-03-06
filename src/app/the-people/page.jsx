import Image from "next/image";
import Titleandparagraph from "../components/common/TitleandParagraph";
import Verbyoecosystem from "../components/about-us/VerbyoEcosystem";
import Ourpledgetotheworld from "../components/about-us/OurLedgeToTheworld";
import OurOffices from "../components/about-us/OurOffices";
import VerbyoCommon from "../components/common/VerbyoCommon";
import Advertising from "../components/common/Advertising";
import VerbyoEcosystemComponent from "../components/about-us/VerbyoEcosystemComponent";
import advertisingTherReal from "../../../public/the-people/advertising-real.png";

export const metadata = {
  title: "The People",
};
function People() {
  const maindata = [
    {
      imgUrl: "/ThePeople/main.png",
    },
  ];
  const OtherComponent = () => {
    return (
      <div className="max-w-[959px] w-full">
        <Image width={959} height={491} src={"/the-people/main.png"} />
      </div>
    );
  };
  return (
    <div className="max-w-[1280px] w-full mx-auto   ">
      {/* about us */}
      <VerbyoCommon
        title={"Meet Verbyo Community"}
        paragraph={
          "The individuals sharing your campaign on their social media are everyday people, much like a friend you'd catch up with over coffee, a family member, or someone you admire. They engage with Verbyo daily not just to enhance the content they share with their friends and followers but also to drive positive change in our communities by spotlighting social causes vital to the world."
        }
        btnText={"Create Account"}
        videoBtnText={"See campaigns"}
        stylesForDiv={"max-h-[633px] min-h-[633px]"}
        otherComponent={<OtherComponent />}
      />
      <Advertising
        extraClasses={"mt-[92px] max-w-[1305px] "}
        title={"The perfect choice for your advertising campaigns"}
        para={
          "They represent 82% of social media users nowadays, which makes them the perfect resource for advertising and distributing messages over social media platforms"
        }
        extraClassespara={"max-w-[562px] normal-case	"}
        thepeople
        Authenticity
        authentextraclasses={"mt-[30px]"}
        maindata={[
          {
            id: 0,
            title: "They bring huge audiences and conversion rates. ",

            imgUrl: "/advertise/auth.svg",
          },
          {
            id: 1,
            title: "An infinite resource of creativity.",
            imgUrl: "/advertise/trust.svg",
          },
          {
            id: 2,
            title: "They are more assertive, spontaneous and positive.",
            imgUrl: "/advertise/viral.svg",
          },
          {
            id: 3,
            title: "Perfect for UGC campaigns.",
            imgUrl: "/advertise/enhanced.svg",
          },
        ]}
        rightImage={"/ThePeople/theChart.svg"}
      />
      <VerbyoEcosystemComponent
        title={"Advertising with real people"}
        para={
          "Verbyo is built around a genuine community of real people. We've implemented numerous safeguards to prevent bot sign-ups and fake profiles, ensuring our community consists solely of authentic individuals. This allows us to effectively disseminate our organic social media campaigns through a network of real users."
        }
        paraextraClasses={
          "leading-[30px] font-[400] text-[18px] text-[black] max-w-[817px]"
        }
        ecoExtraClasses={"pt-[37px] pb-[59px] pl-[39px] pr-[59px] mt-[192px] "}
        src={advertisingTherReal}
        people
        extraClasseslogo={"hidden"}
        extraClassesAppContent={"hidden"}
      />
    </div>
  );
}

export default People;
// images about-us and
// comp AboutComp
// variables aboutUs
// Files if react component then first lettor capital else small letter
