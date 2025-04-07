import React from "react";
import 'boxicons' 

const HeroSection = () => {
  const resumeUrl = "https://anandhu936.github.io/anandhu-portfolio/images/My-Resume.pdf";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "My-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div id="Home" className="flex justify-center">
        <div className="w-full px-[10%]">
          <div className=" lg:grid lg:grid-cols-2 lg:gap-0 gap-6 ">
            <div className="flex justify-center  ">
              <img 
                className="rounded-full w-60 lg:w-110 lg-60 lg:h-110 lg:opacity-80 border-2 border-[#fff] shadow-[0_0_20px_#FFF] mt-0 lg:mt-20"
                src="https://anandhu936.github.io/anandhu-portfolio/images/hero-sec-img.png"
                alt="my image"
              />
            </div>
            <div className=" flex flex-col align-middle justify-center items-center gap-0 lg:gap-3 mt-[30px] lg:mt-[70px]   ">
              <p className="text-[14px] lg:text-[24px] text-amber-50 ">Hello , I'm</p>
              <h1 className="text-2xl lg:text-4xl xl:text-5xl text-white font-semibold">
                Anandhu Unnimadhavan
              </h1>
              <p className="text-xl lg:text-4xl  text-green-500">
                Frontend Developer
              </p>
              <div className="flex gap-[20px] mt-[10px] lg:mt-0">
                <a className=" border-2 border-gray-800 hover:border-gray-600 rounded-full px-5 py-2 cursor-pointer text-white hover:text-green-500 transition-all ease-in-out" 
                 onClick={handleDownload}
              
                >
                  Download CV
                </a>
                <a className=" border-2 border-gray-800 hover:border-gray-600 rounded-full px-5 py-2 cursor-pointer text-white   hover:text-green-500 transition-all ease-in-out"  href="#Contact">
                  Contact Info
                </a>
              </div>
              <div className="flex gap-5 mt-[20px] lg:mt-[15px]">
                <a
                  href="https://www.linkedin.com/in/anandhu-unnimadhavan-b0b65314b/"
                  target="_blank"
                  className="border-2 border-[#7cf03d] px-1.5 pt-1.5 rounded-full "
                >
                  <box-icon
                    type="logo"
                    name="linkedin"
                    color="#7cf03d"
                  ></box-icon>
                </a>
                <a
                  href="https://github.com/Anandhu936"
                  target="_blank"
                  className="border-2 border-[#7cf03d] px-1.5 pt-1.5 rounded-full"
                >
                  <box-icon
                    type="logo"
                    name="github"
                    color="#7cf03d"
                  ></box-icon>
                </a>
                <a
                  href="https://x.com/AnandhuDhoni"
                  target="_blank"
                  className="border-2 border-[#7cf03d] px-1.5 pt-1.5 rounded-full"
                >
                  <box-icon
                    name="twitter"
                    type="logo"
                    color="#7cf03d"
                  ></box-icon>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
