import Advertising from "@/app/components/landingPage/Advertising";
import Hero from "@/app/components/landingPage/Hero";
import Howdoesitwork from "@/app/components/landingPage/Howdoesitwork";
import Organicdistribution from "./components/landingPage/Organicdistribution";
import Keybenefits from "./components/landingPage/Keybenefits";
import FreeAdvertizing from "./components/landingPage/FreeAdvertizing";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

export default function Home() {
  return (
    <div className="max-w-[1980px] w-full mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Howdoesitwork />
      <Advertising />
      <Organicdistribution />
      <Keybenefits />
      <FreeAdvertizing />
      <Footer />
    </div>
  );
}
