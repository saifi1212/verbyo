import Titleandparagraph from "../common/TitleandParagraph";
import verbyoforbussiness from "../../../../public/aboutus/Verbyo For Business/VerbyoForBusiness.png";
import verbyoapp from "../../../../public/aboutus/Verbyo For Business/VerbyoApp.png";
import logo from "../../../../public/aboutus/Verbyo For Business/logoVerbyo.svg";
import applogo from "../../../../public/aboutus/Verbyo For Business/VerbyoApplog.svg";
import VerbyoEcosystemComponent from "./VerbyoEcosystemComponent";

function VerbyoEcosystem() {
  return (
    <div className="w-full mx-auto ">
      {/* Verbyo Ecosystem */}
      <div className=" max-w-[1280px] w-full ">
        <div className="max-w-[1280px]  w-full  mx-auto mt-[100px]  ">
          <Titleandparagraph
            title={"Verbyo Ecosystem"}
            extraClasses={"font-[400] text-[18px]  "}
            extraClassespara={"max-w-[900px]  w-full flex justify-end  "}
            para={
              "Our platform is designed to cater to both users and publishers, creating distinct environments to address the specific needs of every participant within the Verbyo ecosystem."
            }
          />
        </div>
      </div>
      <VerbyoEcosystemComponent
        title={"Verbyo For Business"}
        btn
        para={
          "Dedicated to advertisers, foundations, content creators, and governmental authorities who wish to raise awareness for the social causes they are championing, promote their services or products, and distribute their content organically."
        }
        src={verbyoforbussiness}
        srclogo={logo}
        extraClassesAppContent={"hidden"}
        extraClassestext={"Create account"}
      />

      <VerbyoEcosystemComponent
        title={"Verbyo App"}
        para={
          "This is the first app ever that gives rewards to users for making posts on their social media. You can post about songs, brands, products, services, and causes. Before users share these posts, all the campaigns are shown here.oi"
        }
        src={verbyoapp}
        extraClasseslogo={"max-w-[250px] w-full flex justify-end "}
        extraClasseslogoText={"hidden "}
        srclogo={applogo}
        buttonextraClasses={"hidden w-0"}
      />
    </div>
  );
}

export default VerbyoEcosystem;
