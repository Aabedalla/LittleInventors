import Ads from "./Components/ads";
import Hero from "./Components/hero";
import HowWeHelp from "./Components/howwehelp";
import NavBar from "./Components/Navbar";
import DistinctiveInnovation from "./Components/spashalinnovation";
import Storys from "./Components/storys";
import SlideShow from "./Components/slidshow";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <HowWeHelp />
      <DistinctiveInnovation />
      <Storys />
      <SlideShow />
      <Ads />
    </>
  );
}
