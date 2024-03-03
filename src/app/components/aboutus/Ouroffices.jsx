import Image from "next/image";
import TitleAndParagraph from "../common/TitleAndParagraph";

import scatterchart from "../../../../public/aboutus/OurOffices/scatterchart.png";

function OurOffices() {
  const maindata = [
    {
      id: 0,
      text: "Launching in 2024 ",

      imgUrl: "/aboutus/OurOffices/locationpinpurple.svg",
    },
    {
      id: 1,
      text: "Active since 2020",
      imgUrl: "/aboutus/OurOffices/locationpinblue.svg",
    },
    {
      id: 2,
      text: "Office Locations ",
      imgUrl: "/aboutus/OurOffices/locationpingreen.svg",
    },
  ];
  return (
    <div className="w-full mx-auto mt-[150px]">
      {/* Our Offices*/}
      <div className=" w-full  mx-auto mt-[10px]  ">
        <TitleAndParagraph
          extraClassestitle={"font-[700] text-[34px] leading-[44.1px]"}
          title={"Our Offices"}
          extraClasses={"font-[400] text-[18px]  "}
          extraClassespara={"max-w-[1029px]  w-full flex justify-end  "}
          para={
            "With offices spanning 6 countries across major continents, including Europe, the US, and Asia, our global footprint underscores the commitment to fostering a worldwide community of authentic and impactful advertising."
          }
        />
      </div>
      <div className="max-w-[503px] w-full flex  items-center mx-auto mt-[35px] justify-between">
        {maindata.map((items, id) => {
          return (
            <div className="max-w-[150px] w-full flex  items-center justify-between">
              <div className="max-w-[12px] w-full">
                <img src={items.imgUrl} />
              </div>
              <div className="max-w-[131px] w-full text-[14px] leading-[30px] text-[#5E5D6D]   ">
                {items.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-[1283px] w-full mt-[54px]">
        <Image src={scatterchart} width={"100%"} height={"auto"} />
      </div>
    </div>
  );
}

export default OurOffices;
