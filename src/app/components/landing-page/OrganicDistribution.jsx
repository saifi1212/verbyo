import Image from "next/image";
import TitleAndParagraph from "../common/TitleAndParagraph";
import Button from "../common/Button";

const OrganicDistribution = () => {
  const maindata = [
    {
      id: 0,
      title: "Organic Campaign ",
      para: "Ask people to post your content on their social media accounts and pay for each post individually.",
      imgUrl: "/organic/organic-cam.svg",
    },
    {
      id: 1,
      title: "Scripted UGC Campaign ",
      para: "People will create content based on your script and then post it on their personal social media accounts. ",
      imgUrl: "/organic/stripped.svg",
    },
    {
      id: 2,
      title: "Raffle Campaign ",
      para: "Sponsor a raffle to increase your brand awareness among our users and",
      imgUrl: "/organic/raffle-camp.svg",
    },
    // {
    //   id: 3,
    //   title: "Raffle Campaign ",
    //   para: "Sponsor a raffle to increase your brand awareness among our users and",
    // },
  ];
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-[187px] flex flex-col  items-center">
      <TitleAndParagraph
        title={"Organic Distribution Marketing Campaigns"}
        stylesForMain={"max-w-[900px] "}
        stylesForPara={"text-[18px] leading-[30px] mt-[20px]"}
        para={
          "Promote your brand worldwide with our unique campaigns, reaching millions of authentic voices. Verbyo offers accounts tailored for Advertisers, Foundations, and Local Authorities. Our platform is designed for ease of use, enabling you to create, launch, and track campaigns effortlessly."
        }
      />
      <div className="w-full flex justify-center  flex-wrap mt-[64px] 2xl:px-0 px-[20px]">
        <div className="flex xl:flex-nowrap justify-center flex-wrap gap-[20px] ">
          {maindata.map((items, id) => {
            return (
              <div
                className={`max-w-[413px] w-full ${
                  id == 2 && "xl:flex hidden"
                } bg-[#EFF0FC] px-[32px] py-[40px] rounded-[20px] min-h-[465px]  flex flex-col gap-[30px] `}
              >
                <img src={items.imgUrl} alt="" />

                <div className="max-w-[341px] w-full flex flex-col gap-[15px]">
                  {/* title */}
                  <div className="font-[700] text-[24px] leading-[31px] text-[#000000]">
                    {items.title}
                  </div>
                  {/* para */}
                  <div className="text-[#4E4E4E] font-[400] text-[18px] ">
                    {items.para}
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <Button text={"Learn More"} style={"max-w-[184px]"} />
                </div>
              </div>
            );
          })}
        </div>
        {/* social-network */}
        <div className="flex xl:gap-[22px] justify-center  xl:flex-nowrap flex-wrap">
          <div className="max-w-[846px]  w-fit bg-[#EFF0FC]  flex xl:flex-nowrap flex-wrap-reverse  pl-[32px] 2xl:pr-[48px] pr-[38px] mt-[15px] rounded-[20px] pt-[43px] pb-[23px] ">
            {/* content */}
            <div className="max-w-[418px] w-full   rounded-[20px]  flex flex-col gap-[39px] mt-[100px] ">
              <div className="max-w-[418px] w-full  flex flex-col gap-[15px]">
                {/* title */}
                <div className="font-[700] text-[24px] leading-[31px] text-[#000000]">
                  Social Networks
                </div>
                {/* para */}
                <div className="text-[#4E4E4E] font-[400] text-[18px] max-w-[418px] w-full leading-[28px] ">
                  Create and launch organic social media campaigns across all
                  major social networks. Tailored campaigns are available for
                  each specific social media platform.
                </div>
              </div>
              <Button text={"Learn More"} style={"max-w-[184px]"} />
            </div>

            {/* img */}

            <img
              src="organic/social-network.svg"
              alt=""
              className="max-w-[354px]"
            />
          </div>
          <div className="flex flex-wrap gap-[24px] 2xl:max-w-[413px] xl:max-w-[400px] justify-center w-full">
            <div className="max-w-[413px] w-full bg-[#EFF0FC] px-[32px] py-[40px] rounded-[20px]  flex flex-col gap-[30px] mt-[15px]">
              <img src="organic/pay-per-cam.svg" alt="" />

              <div className="max-w-[341px] w-full flex flex-col gap-[15px]">
                {/* title */}
                <div className="font-[700] text-[24px] leading-[31px] text-[#000000]">
                  Pay per Post
                </div>
                {/* para */}
                <div className="text-[#4E4E4E] font-[400] text-[18px] ">
                  Pay for each post that users create with your content,
                  directly from your campaign wallet.
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <Button text={"Learn More"} style={"max-w-[184px]"} />
              </div>
            </div>
            <div className="xl:hidden  max-w-[413px] w-full bg-[#EFF0FC] px-[32px] py-[40px] rounded-[20px]  flex flex-col gap-[30px] mt-[15px]">
              <img src="/organic/raffle-camp.svg" alt="" />

              <div className="max-w-[341px] w-full flex flex-col gap-[15px]">
                {/* title */}
                <div className="font-[700] text-[24px] leading-[31px] text-[#000000]">
                  Raffle Campaign
                </div>
                {/* para */}
                <div className="text-[#4E4E4E] font-[400] text-[18px] ">
                  Sponsor a raffle to increase your brand awareness among our
                  users worldwide.
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <Button text={"Learn More"} style={"max-w-[184px]"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicDistribution;
