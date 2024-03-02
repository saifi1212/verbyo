import Titleandparagraph from "../common/TitleAndParagraph";
import VideoButton from "../common/VideoButton";
import Animation from "./Animation";

function Howdoesitwork() {
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-[121px] flex flex-col  items-center">
      <Titleandparagraph
        title={"How does it work?"}
        stylesForMain={"max-w-[800px]"}
        stylesForPara={"mt-[17px]"}
        para={
          "We have simplified the whole process of launching organic campaigns, so that anybody can promote their product, service or social cause."
        }
      />
      <Animation />
    </div>
  );
}

export default Howdoesitwork;
