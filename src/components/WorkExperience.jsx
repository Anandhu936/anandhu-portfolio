import React from "react";

const WorkExperience = () => {
  return (
    <div id="Experience" className=" w-full px-[10%] ">
      <h1 className="flex justify-center text-3xl lg:text-5xl text-white font-bold mb-[25px] lg:mb-[50px]  ">
        Work Experience
      </h1>
      <div className="grid grid-cols md:grid-cols-2  gap-10 lg:gap-35">
        <div className="border-2 border-white p-2 lg:p-5 rounded-2xl ">
          <img
            className="h-[250px] md:h-[300px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/coupon-generator.png"
            alt=""
          />
          <div className="mt-2 lg:mt-3">
            <a
              href="https://www.paritydeals.com/coupon-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm  lg:text-2xl text-white hover:text-green-500 ">
                Coupon Generator
              </p>
            </a>
          </div>
        </div>
        <div className="border-2 border-white p-2 lg:p-5 rounded-2xl ">
          <img
            className="h-[250px] md:h-[300px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/buying-power-calculator.png"
            alt=""
          />
          <div className="mt-2 lg:mt-3">
            <a
              href="https://www.paritydeals.com/buying-power-calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm  lg:text-2xl text-white hover:text-green-500 ">
                Buying Power Calculator
              </p>
            </a>
          </div>
        </div>
        <div className="border-2 border-white p-2 lg:p-5 rounded-2xl ">
          <img
            className="h-[250px] md:h-[300px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/saas-price-calculator.png"
            alt=""
          />
          <div className="mt-2 lg:mt-3">
            <a
              href="https://www.paritydeals.com/saas-pricing-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm  lg:text-2xl text-white hover:text-green-500 ">
                Saas Price Calculator
              </p>
            </a>
          </div>
        </div>
        <div className="border-2 border-white p-2 lg:p-5 rounded-2xl ">
          <img
            className="h-[250px] md:h-[300px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/Yt-thumbnails.png"
            alt=""
          />
          <div className="mt-2 lg:mt-3">
            <a
              href="https://www.lightgalleryjs.com/download-youtube-thumbnails/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm  lg:text-2xl text-white hover:text-green-500 ">
                Youtube thumbnail downloader
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
