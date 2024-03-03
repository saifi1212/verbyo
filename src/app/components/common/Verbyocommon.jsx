import Button from "./Button";
import TitleAndParagraph from "./TitleAndParagraph";
import VideoButton from "./VideoButton";

function Verbyocommon({
  mobileimages,
  btntext,
  btnhref,
  videobtnhref,
  videbtntext,
  trustedbussiness,
  extraClasses,
  heading,
  paragraph,
  extraClassespara,
}) {
  return (
    <div className="max-w-[1280px] w-full mx-auto   ">
      {/* Verbyo App */}
      <div
        className={`${extraClasses} max-w-[1280px] w-full mx-auto   bg-[#EFF0FC] rounded-[20px] mt-[50px]  pt-[49px] pb-[253px] `}
      >
        <div className="max-w-[1036px]  w-full  mx-auto ">
          <TitleAndParagraph
            title={heading}
            extraClasses={"font-[400] text-[18px]  "}
            extraClassespara={extraClassespara}
            para={paragraph}
          />
        </div>
        <div className="w-full justify-center items-center flex flex-col mt-[19px]">
          {/* buttons */}
          <div className=" w-full flex gap-[16px] mb-[10px] justify-center items-center ">
            {/* create Account */}
            <Button
              text={btntext}
              extraClasses={"rounded-[6px]"}
              href={btnhref}
            />
            {/* Watch video */}

            <VideoButton text={videbtntext} href={videobtnhref} />
          </div>
          {/* trusted by bussiness */}
          {trustedbussiness && (
            <div className=" w-full flex items-center justify-center gap-[20px] mt-[19px] ">
              {/* 1 */}
              <div className="  gap-[5px] flex ">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.3 8.3L8.825 4.775L8.125 4.075L5.3 6.9L3.875 5.475L3.175 6.175L5.3 8.3ZM6 11C5.30833 11 4.65833 10.8687 4.05 10.606C3.44167 10.3433 2.9125 9.98717 2.4625 9.5375C2.0125 9.0875 1.65633 8.55833 1.394 7.95C1.13167 7.34167 1.00033 6.69167 1 6C1 5.30833 1.13133 4.65833 1.394 4.05C1.65667 3.44167 2.01283 2.9125 2.4625 2.4625C2.9125 2.0125 3.44167 1.65633 4.05 1.394C4.65833 1.13167 5.30833 1.00033 6 1C6.69167 1 7.34167 1.13133 7.95 1.394C8.55833 1.65667 9.0875 2.01283 9.5375 2.4625C9.9875 2.9125 10.3438 3.44167 10.6065 4.05C10.8692 4.65833 11.0003 5.30833 11 6C11 6.69167 10.8687 7.34167 10.606 7.95C10.3433 8.55833 9.98717 9.0875 9.5375 9.5375C9.0875 9.9875 8.55833 10.3438 7.95 10.6065C7.34167 10.8692 6.69167 11.0003 6 11Z"
                      fill="#057DF3"
                    />
                  </svg>
                </div>
                <div className="max-w-[169px] w-full text-[12px] font-[400] leading-[18px] text-[#1C1934]">
                  Trusted by 16,160 businesses
                </div>
              </div>
              {/* 2 */}
              <div className="  gap-[5px] flex justify-center items-center ">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.3 8.3L8.825 4.775L8.125 4.075L5.3 6.9L3.875 5.475L3.175 6.175L5.3 8.3ZM6 11C5.30833 11 4.65833 10.8687 4.05 10.606C3.44167 10.3433 2.9125 9.98717 2.4625 9.5375C2.0125 9.0875 1.65633 8.55833 1.394 7.95C1.13167 7.34167 1.00033 6.69167 1 6C1 5.30833 1.13133 4.65833 1.394 4.05C1.65667 3.44167 2.01283 2.9125 2.4625 2.4625C2.9125 2.0125 3.44167 1.65633 4.05 1.394C4.65833 1.13167 5.30833 1.00033 6 1C6.69167 1 7.34167 1.13133 7.95 1.394C8.55833 1.65667 9.0875 2.01283 9.5375 2.4625C9.9875 2.9125 10.3438 3.44167 10.6065 4.05C10.8692 4.65833 11.0003 5.30833 11 6C11 6.69167 10.8687 7.34167 10.606 7.95C10.3433 8.55833 9.98717 9.0875 9.5375 9.5375C9.0875 9.9875 8.55833 10.3438 7.95 10.6065C7.34167 10.8692 6.69167 11.0003 6 11Z"
                      fill="#057DF3"
                    />
                  </svg>
                </div>

                <div className=" text-[12px] font-[400] leading-[18px] text-[#1C1934]">
                  Relied on by 1,302 Foundations & NGO’s
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col max-w-[1280px] w-full justify-center items-center absolute mx-auto">
        {mobileimages && (
          <div className="max-w-[910px] w-full flex justify-between  mt-[-210px] items-center   ">
            <div className="max-w-[262px] w-full">
              <img
                width={"100%"}
                height={"auto"}
                className="relative z-20 justify-center flex items-center "
                src={"/verbyoapp/iPhone 12 start.png"}
              />
            </div>
            <div className="max-w-[262px] w-full">
              <img
                width={"100%"}
                height={"auto"}
                className="relative z-20 justify-center flex items-center "
                src={"/verbyoapp/iPhone 12 center.png"}
              />
            </div>
            <div className="max-w-[262px] w-full">
              <img
                width={"100%"}
                height={"auto"}
                className="relative z-20 justify-center flex items-center "
                src={"/verbyoapp/iPhone 12 Pro.png"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Verbyocommon;
