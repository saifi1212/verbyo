import Advertising from "@/app/components/landingPage/Advertising";
import Hero from "@/app/components/landingPage/Hero";
import Working from "@/app/components/landingPage/Working";
import OrganicDistribution from "./components/landingPage/OrganicDistribution";
import KeyBenefits from "./components/landingPage/KeyBenefits";
import FreeAdvertising from "./components/landingPage/FreeAdvertising";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

export default function Home() {
  return (
    <>
    <div className="max-w-[1920px] w-full mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Working />
      <Advertising />
      <OrganicDistribution />
      <KeyBenefits />
      <FreeAdvertising />
    </div>
      <Footer marginTop={"mt-[467px]"}/>
    </>
  );
}
