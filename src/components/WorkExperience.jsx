import React from "react";

const WorkExperience = () => {
  return (
    <div id="Experience" className=" w-full px-[10%] lg:px-[20%]">
      <h1 className="flex justify-center text-3xl lg:text-5xl text-white mb-[40px] lg:mb-[60px] underline underline-offset-8">
        Work Experience
      </h1>
      <div className="grid grid-cols lg:grid-cols-2 gap-10 lg:gap-35">
        <div className="border-2 border-[#e9d713] p-2 lg:p-5 rounded-2xl shadow-[0_0_20px_#e9d713]">
          <img
            className="h-[250px] lg:h-[400px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/coupon-generator.png"
            alt=""
          />
          <div className="mt-4">
            <a
              href="https://www.paritydeals.com/coupon-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm lg:text-2xl text-white hover:text-green-500 underline underline-offset-4">
                Coupon Generator
              </p>
            </a>
          </div>
        </div>
        <div className="border-2 border-[#e9d713] p-2 lg:p-5 rounded-2xl shadow-[0_0_20px_#e9d713]">
          <img
            className="h-[250px] lg:h-[400px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/buying-power-calculator.png"
            alt=""
          />
          <div className="mt-4">
            <a
              href="https://www.paritydeals.com/buying-power-calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm lg:text-2xl text-white hover:text-green-500 underline underline-offset-4">
                Buying Power Calculator
              </p>
            </a>
          </div>
        </div>
        <div className="border-2 border-[#e9d713] p-2 lg:p-5 rounded-2xl shadow-[0_0_20px_#e9d713]">
          <img
            className="h-[250px] lg:h-[400px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/saas-price-calculator.png"
            alt=""
          />
          <div className="mt-4">
            <a
              href="https://www.paritydeals.com/saas-pricing-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm lg:text-2xl text-white hover:text-green-500 underline underline-offset-4">
                Saas Price Calculator
              </p>
            </a>
          </div>
        </div>
        <div className="border-2 border-[#e9d713] p-2 lg:p-5 rounded-2xl shadow-[0_0_20px_#e9d713]">
          <img
            className="h-[250px] lg:h-[400px] w-[100%] rounded-xl"
            src="https://anandhu936.github.io/anandhu-portfolio/images/Yt-thumbnails.png"
            alt=""
          />
          <div className="mt-4">
            <a
              href="https://www.lightgalleryjs.com/download-youtube-thumbnails/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="text-center text-sm lg:text-2xl text-white hover:text-green-500 underline underline-offset-4">
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
