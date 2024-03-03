import Advertising from "@/app/components/landing-page/Advertising";
import Hero from "@/app/components/landing-page/Hero";
import Working from "@/app/components/landing-page/Working";
import OrganicDistribution from "./components/landing-page/OrganicDistribution";
import KeyBenefits from "./components/landing-page/KeyBenefits";
import FreeAdvertising from "./components/landing-page/FreeAdvertising";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

export default function Home() {
  return (
    <>
      <div className="max-w-[1920px] w-full mx-auto overflow-hidden">
        <Header />
        <Hero />
        {/* <Working />
      <Advertising />
      <OrganicDistribution />
      <KeyBenefits />
      <FreeAdvertising /> */}
      </div>
      <Footer marginTop={"mt-[467px]"} />
    </>
  );
}
