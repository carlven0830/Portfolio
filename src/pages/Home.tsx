import Navbar from "../components/Navbar";
import SlideSection from "../components/SlideSection";
import About from "../components/About";
import Education from "../components/Education";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import BtmBanner from "../components/BtmBanner";

function Home() {
  return (
    <>
      <Navbar />
      <SlideSection />
      <About />
      <Education />
      <Skill />
      <Portfolio />
      <Contact />
      <BtmBanner />
    </>
  );
}

export default Home;
