import Image from "next/image";
import Button from "@/app/components/common/Button";
import { popins } from "@/app/layout";
import AuthenticityAndReliability from "../common/AuthenticityAndReliability";

function VerbyoEcosystemComponent({
  title,
  para,
  src,
  srclogo,
  extraClasseslogoText,
  extraClasseslogo,
  extraClassesAppContent,
  buttonextraClasses,
  extraClassestext,
  btn,
  people,
  ecoExtraClasses,
  paraextraClasses
}) {
  return (
    <div
      className={`${ecoExtraClasses} max-w-[1280px] w-full  bg-[#EFF0FC] rounded-[16px] flex   justify-between    pb-[69px] mt-[101px] pl-[48px] pr-[76px] pt-[60.5px]`}
    >
      {/* left-content */}
      <div className="max-w-[300px] w-full  relative mt-[-96px]  ">
        <div className="max-w-[300px] w-full">
          <Image
            src={src}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div
          className={` ${extraClasseslogo}  w-full flex  ml-[19px] mt-[-82px] `}
        >
          <div className="">
            <Image src={srclogo} width={"100%"} height={"auto"} />
          </div>
          <div
            className={`${extraClasseslogoText} max-w-[101px]  w-full text-[#fff] text-[16px] font-[700] flex items-center`}
          >
            {" "}
            <span className="font-[400] w-full italic">for</span> Business
          </div>
        </div>
      </div>

      {/* right-content */}
      <div className="max-w-[790px] w-full flex flex-col  gap-[27px]">
        <div className="w-full flex flex-col gap-[15px]">
          <div className={`w-full text-[34px] font-[700] text-[#000]`}>
            {title}
          </div>
          <div className={`${paraextraClasses}  w-full text-[#5E5D6D]`}>{para}</div>
        </div>
        {/* btn */}
        {btn && (
          <Button
            text={`${extraClassestext} `}
            extraClasses={`${buttonextraClasses} rounded-[6px]`}
          />
        )}

        {people && (
          <AuthenticityAndReliability
            authentextclasses={"mt-[0] "}
            maindata={[
              {
                id: 0,
                title: "Automated Verification on SignUp",

                imgUrl: "/advertise/auth.svg",
              },
              {
                id: 1,
                title: "User reporting system for publishers",
                imgUrl: "/advertise/trust.svg",
              },
              {
                id: 2,
                title: "Randomly Human Manual Checks of Profiles",
                imgUrl: "/advertise/viral.svg",
              },
              {
                id: 3,
                title: "Profile content analysis",
                imgUrl: "/advertise/enhanced.svg",
              },
            ]}
          />
        )}

        <div
          className={`${extraClassesAppContent} w-full flex  flex-col gap-[20px] max-w-[291px]`}
        >
          <div
            className={`${popins.className}  text-[20px] font-[600] leading-[30px] text-[#1C1934]`}
          >
            Avalaible on
          </div>
          <div className=" w-full flex  justify-between">
            <button className="max-w-[142px] w-full flex rounded-[10px] justify-between items-center border-[#CDCDCD] border-[1px] py-[5px] px-[20px]">
              <div className="max-w-[21px] w-full">
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 17.6072C20.4267 18.8562 20.1505 19.414 19.412 20.5185C18.382 22.0594 16.9272 23.9794 15.1268 23.9957C13.5277 24.0094 13.1168 22.973 10.9444 22.9853C8.77335 22.9962 8.32082 24.0148 6.72031 23.9998C4.91991 23.9835 3.54149 22.2503 2.51011 20.708C-0.373032 16.399 -0.674256 11.3399 1.10394 8.64949C2.36714 6.73905 4.36188 5.62087 6.23585 5.62087C8.14453 5.62087 9.34526 6.64905 10.9222 6.64905C12.4533 6.64905 13.3861 5.61814 15.5932 5.61814C17.259 5.61814 19.0275 6.51132 20.2865 8.05222C16.161 10.2736 16.8301 16.0608 21 17.6072ZM13.9192 3.89725C14.7201 2.88544 15.3295 1.45908 15.1088 0C13.7984 0.0886358 12.2673 0.906812 11.3719 1.97453C10.5613 2.94271 9.8908 4.37861 10.1504 5.77496C11.5802 5.81723 13.0599 4.9786 13.9192 3.89725Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="max-w-[71px] w-full text-[14px] font-[500] leading-[30px] text-[#1C1934]">
                App Store
              </div>
            </button>
            <button className="max-w-[142px] w-full flex rounded-[10px] justify-between items-center border-[#CDCDCD] border-[1px] py-[5px] px-[20px]">
              <div className="max-w-[19px] w-full">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.215 8.14553L2.33168 0.205018C2.09232 0.0682187 1.82584 0 1.55936 0C1.55394 0 1.5486 0.000723806 1.54327 0.000723806C1.50746 0.00108571 1.47174 0.00289522 1.43612 0.00569997C1.42002 0.00696663 1.40401 0.00868567 1.38792 0.0104952C1.36007 0.0135714 1.33231 0.0174618 1.30464 0.0220761C1.2946 0.0237951 1.28447 0.024338 1.27444 0.026238L1.27498 0.0269618C1.102 0.0588997 0.933177 0.11988 0.776291 0.210989C0.295777 0.489926 0 1.00374 0 1.55953V17.4405C0 17.9963 0.295777 18.5101 0.776291 18.789C0.933086 18.8801 1.10191 18.9412 1.27489 18.9731L1.27444 18.9738C1.28348 18.9755 1.29261 18.976 1.30156 18.9775C1.33131 18.9825 1.36115 18.9867 1.39108 18.9899C1.40609 18.9915 1.42101 18.9931 1.43602 18.9943C1.4712 18.9971 1.50628 18.9987 1.54155 18.9992C1.54752 18.9993 1.5534 19 1.55936 19C1.82584 19 2.09232 18.9318 2.33168 18.795L16.215 10.8544C16.7004 10.5767 17 10.0603 17 9.50068V9.50032V9.49995V9.49959V9.49923C17 8.93973 16.7004 8.42329 16.215 8.14553ZM10.7247 6.56863L9.34424 8.38059L5.83217 3.77031L10.7247 6.56863ZM15.5419 9.67611L5.83217 15.2296L11.9117 7.2491L15.5418 9.32525C15.6047 9.36116 15.6437 9.42848 15.6437 9.50059C15.6436 9.57297 15.6046 9.64028 15.5419 9.67611Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="max-w-[72px] w-full text-[14px] font-[500] leading-[30px] text-[#1C1934]">
                Play Store
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerbyoEcosystemComponent;
