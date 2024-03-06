import VerbyoCommon from "../components/common/VerbyoCommon";
import Advertising from "../components/common/Advertising";
import EasyTounderstand from "../components/ads-manager/EasyTounderstand";
import AdvertiseCards from "../components/common/AdvertiseCards";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export const metadata = {
  title: "Ads Campaign Manager",
};
const otherComponentData = [
  {
    title: "Advertiser & Content Creators Account",
    src: "/ads-compagin-manager/advertiser.png",
  },
  {
    title: "Foundations & NGOs Account",
    src: "/ads-compagin-manager/foundation.png",
  },
  {
    title: "Local Authorities & Cultural Entities",
    src: "/ads-compagin-manager/local-auth.png",
  },
];
const OtherComponent = () => {
  return (
    <div className="flex gap-[30px] items-center max-w-[960px] w-full h-fit">
      <AdvertiseCards
        cardStyles={"bg-[#D8DBFB] gap-[46px]"}
        maindata={otherComponentData}
      />
    </div>
  );
};
function AdsCampaignManager() {
  const maindata = [
    {
      id: 0,
      title: "Audience Metrics ",
      para: "Ask people to post your content on their social media accounts and pay for each post individually.",
      imgUrl: "/ads-compagin-manager/easy-To-UnderStand1.png",
    },
    {
      id: 1,
      title: "Reach ",
      para: "People will create content based on your script and then post it on their personal social media accounts. ",
      imgUrl: "/ads-compagin-manager/easy-To-UnderStand2.png",
    },
    {
      id: 2,
      title: "Live Posts Reporting",
      para: "Sponsor a raffle to increase your brand awareness among our users and",
      imgUrl: "/ads-compagin-manager/easy-To-UnderStand3.png",
    },
    {
      id: 3,
      title: "Live Posts Reporting",
      para: "Sponsor a raffle to increase your brand awareness among our users and",
      imgUrl: "/ads-compagin-manager/easy-To-UnderStand4.png",
    },
    {
      id: 4,
      title: "Impressions",
      para: "Sponsor a raffle to increase your brand awareness among our users and",
      imgUrl: "/ads-compagin-manager/easy-To-UnderStand5.png",
    },
    {
      id: 5,
      title: "Campaign Sentiment",
      para: "Sponsor a raffle to increase your brand awareness among our users and",
      imgUrl: "/ads-compagin-manager/easy-To-UnderStand6.png",
    },
    {
      id: 6,
      title: "Live Posts Reporting",
      para: "Sponsor a raffle to increase your brand awareness among our users and",
      imgUrl: "/ads-compagin-manager/easy-To-UnderStand7.png",
    },
    // {
    //   id: 3,
    //   title: "Raffle Campaign ",
    //   para: "Sponsor a raffle to increase your brand awareness among our users and",
    // },
  ];
  return (
    <>
    <Header/>
    <div className="max-w-[1280px] w-full mx-auto   ">
      {/* about us */}
      <VerbyoCommon
        title={"Ads Campaign Manager"}
        paragraph={
          "We've designed a user-friendly dashboard for our partners, ensuring you don't need to be a marketing analyst to initiate a campaign. We've simplified the process for your convenience, making it straightforward to launch and comprehend the metrics we provide."
        }
        stylesForDiv={"max-h-[491px] min-h-[491px]"}
        btnText={"Create Account"}
        videoBtnText={"See campaigns"}
        otherComponent={<OtherComponent />}
      />
      <Advertising
        extraClasses={"mt-[270px] max-w-[1180px] "}
        title={"Pay for each post that users create from your account Wallet"}
        para={
          <div>
            <div className="font-[400]">
              Take advantage of our
              <span className="font-[500] text-[#000]">
                {" "}
                Wallet option,
              </span>{" "}
              which allows advertisers to have a better control over their
              spending.
            </div>
            <br />
            <div>
              <span className="font-[500] text-[#000]">
                {" "}
                Pay for each individual post{" "}
              </span>{" "}
              created by people on their social media accounts, based on your
              requirements
            </div>
            <br />
            <div>
              <span className="font-[500] text-[#000]">
                {" "}
                Multiple top up options
              </span>{" "}
              available: Bank Transfer, Credit and Debit card
            </div>
          </div>
        }
        extraClassespara={"max-w-[548px] normal-case	leading-[30px] mt-[25px]"}
        extraClassesRightImageDiv={"max-w-[483px] mt-[-40px]"}
        rightImage={"/ads-compagin-manager/RightImage.png"}
      />
      <EasyTounderstand cardmaindata={maindata} />
    </div>
    <Footer advertising marginTop={"mt-[356px]"}/>
    </>
  );
}

export default AdsCampaignManager;
// images about-us and
// comp AboutComp
// variables aboutUs
// Files if react component then first lettor capital else small letter
