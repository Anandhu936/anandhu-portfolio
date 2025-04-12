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
        <div className="mt-[40px] lg:mt-[40px] container-xxl">
          <div className="mb-[100px] lg:mb-[200px] ">
           <HeroSection></HeroSection>
          </div>
          
          <div className="mb-[100px] lg:mb-[200px]">
            <AboutSection></AboutSection>
          </div>
          <div className=" mb-[100px] lg:mb-[200px]">
            <MySkills></MySkills>
          </div>
          <div className="mb-[100px] lg:mb-[200px]">
            <WorkExperience></WorkExperience>
          </div>
          <div className="mb-[100px] lg:mb-[200px]">
            <MyProject></MyProject>
          </div>
          <div className="mb-[100px] lg:mb-[200px]">
            <ContactSection></ContactSection>
          </div>
          <FooterSection></FooterSection>
        </div>
      </div>
    </>
  );
}

export default App;
