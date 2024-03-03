import Titleandparagraph from "../common/TitleAndParagraph";

function KeyBenefits() {
  const maindata = [
    {
      id: 0,
      no: "01",
      title: "Trust & Credibility ",
      para: "Organically popular content is deemed more reliable, enhancing your brand’s image.",
      link: "here",
    },
    {
      id: 1,
      no: "02",
      title: "Authentic Engagement",
      para: "Genuine interactions foster trust and connection, far surpassing the reach of paid ads.",
    },
    {
      id: 2,
      no: "03",
      title: "Trust & Credibility",
      para: "Organically popular content is deemed more reliable, enhancing your brand’s image.",
    },
    {
      id: 3,
      no: "04",
      title: "Secured ",
      para: "No transfer is required, your funds remain securely on your Binance",
    },
    {
      id: 4,
      no: "05",
      title: "Long-Term Value",
      para: "Unlike paid ads, organic content continues to engage over time, offering long time visibility.",
    },
    {
      id: 5,
      no: "06",
      title: "Insightful Analytics ",
      para: "Learn what resonates with your audience to refine future strategies for your brand.",
    },
    {
      id: 6,
      no: "07",
      title: "Insightful Analytics ",
      para: "Learn what resonates with your audience to refine future strategies for your brand.",
    },
    {
      id: 7,
      no: "08",
      title: "Insightful Analytics ",
      para: "Learn what resonates with your audience to refine future strategies for your brand.",
    },
    // {
    //   id: 8,
    //   no: "09",
    //   title: "Insightful Analytics ",
    //   para: "Learn what resonates with your audience to refine future strategies for your brand.",
    // }
  ];
  return (
    <div className="max-w-[1065px] w-full mx-auto mt-[148px] flex flex-col  items-center">
      <Titleandparagraph
        title={"Key benefits of social organic campaigns"}
        stylesForMain={"max-w-[900px]"}
        stylesForPara={"mt-[17px] text-[18px] leading-[30px]"}
        para={
          "Organic distribution campaigns can be a powerful way to build and engage an audience, foster trust, and achieve sustainable growth without the immediate costs associated with paid advertising strategies"
        }
      />

      <div className="mt-[69px] w-full grid grid-cols-3  gap-x-[60px] gap-y-[52px]">
        {maindata.map((items, id) => {
          return (
            <div className="max-w-[315px] w-full flex gap-[20px] flex-col cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out  ">
              {/* number */}
              <div className="max-w-[50px] w-full px-[14px] py-[13px] bg-[#EFF0FC] rounded-[5px] items-center">
                <div className="max-w-[22px] w-full font-[700] text-[20px] leading-[24px] text-[#9BA2EA] justify-center items-center flex">
                  {items.no}
                </div>
              </div>

              {/* content */}
              <div className="max-w-[315px] w-full flex flex-col gap-[8px]">
                <div className=" w-full font-[700] text-[24px] leading-[24.4px]">
                  {items.title}
                </div>
                <div className="max-w-[315px] w-full font-[400] text-[18px] text-[#5E5D6D]">
                  {items.para}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KeyBenefits;
