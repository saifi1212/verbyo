import Titleandparagraph from "../common/Titleandparagraph";
import Verbyoecosystemcomponent from "./Verbyoecosystemcomponent";
import digital from "../../../../public/aboutus/verbyoDigitalFoundation/Digital.png";

function Ourledgetotheworld() {
  return (
    <div className="w-full mx-auto mt-[161px]">
      {/* Our pledge to the world */}
      <div className=" max-w-[1280px] w-full ">
        <div className="max-w-[1280px]  w-full  mx-auto mt-[100px]  ">
          <Titleandparagraph
            extraClassestitle={"normal-case"}
            title={"Our pledge to the world"}
            extraClasses={"font-[400] text-[18px]  "}
            extraClassespara={"max-w-[900px]  w-full flex justify-end  "}
            para={
              "We at Verbyo are committed to leveraging education as a catalyst for global change, dedicating 1% of our profits to our foundation that supports educational initiatives. This reflects our belief in social responsibility and our vision for a future where businesses play a critical role in societal improvement."
            }
          />
        </div>
      </div>
      <Verbyoecosystemcomponent
        title={"Verbyo Digital Foundation"}
        para={
          <div className="w-full text-[18px] leading-[30px] font-[400]">
            The first digital non-profit organization that harnesses the power
            of social media platforms to advance social initiatives and support
            other foundations in their efforts, utilizing social media users to
            implement these initiatives.
            <br />
            <br />
            Our mission is to drive positive transformation in the world and
            inspire others to do likewise. We pursue social initiatives in two
            ways: by developing our own projects or by assisting existing
            foundations with their social projects.
          </div>
        }
        src={digital}
        extraClasseslogo={"hidden "}
        extraClasseslogoText={"hidden "}
        extraClassesAppContent={"hidden w-0"}
        extraClassestext={"Learn More"}
      />
    </div>
  );
}

export default Ourledgetotheworld;
