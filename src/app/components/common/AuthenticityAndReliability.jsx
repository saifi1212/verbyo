import { popins } from "@/app/layout";

function AuthenticityAndReliability({
  authentextclasses,
  CrumbsExtraClasses,
  CrumbsTextExtraClasses,
  maindata,
}) {
  return (
    <div>
      <div
        className={`${authentextclasses} w-full flex flex-col gap-[20px] max-w-[562px] mt-[49px]`}
      >
        {maindata.map((items, id) => {
          return (
            <>
              <div
                className={`${CrumbsExtraClasses} w-full flex max-w-[562px] justify-between`}
              >
                <div className="max-w-[34px] w-full">
                  <img src={items.imgUrl} alt="" />
                </div>
                <div
                  className={`${popins.className} ${CrumbsTextExtraClasses}font-[400] text-[20px] max-w-[514px] w-full  text-[#1C1934] leading-[30px]`}
                >
                  {items.title}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AuthenticityAndReliability;
