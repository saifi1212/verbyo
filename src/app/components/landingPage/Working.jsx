import TitleAndParagraph from "../common/TitleAndParagraph";
import VideoButton from "../common/VideoButton";
import Animation from "./Animation";

function Working() {
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-[121px] flex flex-col  items-center relative">
      <img
        src="footer/OrnumentCircle.svg"
        alt=""
        className="absolute  left-[-550px]  top-[575px]"
      />
      <TitleAndParagraph
        title={"How does it work?"}
        stylesForMain={"max-w-[900px]"}
        stylesForPara={"mt-[17px] text-[18px] leading-[28.8px]"}
        para={
          "We have simplified the whole process of launching organic campaigns, so that anybody can promote their product, service or social cause."
        }
      />
      <Animation />

      <div className="mt-[46px] w-full flex justify-center">
        <VideoButton text={"Watch Video"} styles={"max-w-[184px]"} />
      </div>
    </div>
  );
}

export default Working;
