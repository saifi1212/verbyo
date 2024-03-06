import { popins } from "../../layout";

const TitleAndParagraph = ({
  title,
  para,
  stylesForMain,
  stylesForTitle,
  stylesForPara,
}) => {
  return (
    <div
      className={`${
        stylesForMain ? stylesForMain : "items-center"
      }  w-full mx-auto  flex flex-col  `}
    >
      <h1
        className={`${
          stylesForTitle
            ? stylesForTitle
            : "sm:text-[36px] text-[26px] leading-[33.72px]  font-[700] sm:leading-[46.69px]"
        }  w-full  text-[#1C1934] text-center capitalize `}
      >
        {title}{" "}
      </h1>
      <p
        className={`${popins.className} ${stylesForPara} w-full text-[#5E5D6D] text-center `}
      >
        {para}
      </p>
    </div>
  );
};

export default TitleAndParagraph;
