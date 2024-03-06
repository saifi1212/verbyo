import { popins } from "@/app/layout";

function AdvertiseCards({ maindata, cardStyles }) {
  return (
    <>
      {maindata.map((items, id) => {
        return (
          <div
            key={id + "maindata"}
            className={`${cardStyles || "gap-[30px] bg-[#EFF0FC]"}  max-w-[300px] min-w-[300px] w-full  flex justify-center items-center flex-col min-h-[300px] rounded-[12px] `}
          >
            <div className=" w-full justify-center items-center flex  ">
              <img src={items.src} />
            </div>
            <div
              className={` ${popins.className} text-center font-[600] text-[#1C1934] text-[20px] leading-[30px] max-w-[221px] w-full flex justify-center items-center `}
            >
              {items.title}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AdvertiseCards;
