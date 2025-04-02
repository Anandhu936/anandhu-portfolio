import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import MyProject from "./components/MyProject";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="mt-[40px] lg:mt-[40px container-xxl">
          <HeroSection></HeroSection>
          <div className="mt-[40px] lg:mt-[150px]">
          <AboutSection></AboutSection>
          </div>
          <div className="mt-[40px] lg:mt-[150px] mb-[40px] lg:mb-[120px]">
            <MySkills></MySkills>
          </div>
          <div className="mb-[40px] lg:mb-[140px]"><WorkExperience></WorkExperience></div>
          <div className="mb-[40px] lg:mb-[140px]">
            <MyProject></MyProject>
          </div>
          <div className="mb-[40px] lg:mb-[140px]">
          <ContactSection></ContactSection>
          </div>
         
          <FooterSection></FooterSection>
        </div>
      </div>
    </>
  );
}

export default App;
