import React from "react";
import { motion } from "framer-motion";
const WorkExperience = () => {
  return (
    <div id="Experience" className=" w-full px-[10%] ">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        className="flex justify-center text-3xl lg:text-5xl text-white font-bold mb-[25px] lg:mb-[50px]  "
      >
        Work Experience
      </motion.h1>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="border-2 border-white hover:border-orange-500 hover:shadow-[0_0_20px_#FFA500] transition-transform hover:scale-105 p-2 lg:p-5 rounded-lg "
        >
          <img
            className="h-[250px] md:h-[200px] w-[100%] rounded-xl"
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
              <p className="text-center text-sm  lg:text-lg text-white hover:text-green-500 ">
                Coupon Generator
              </p>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.9,
          }}
          className="border-2 border-white hover:border-orange-500 hover:shadow-[0_0_20px_#FFA500] transition-transform hover:scale-105 p-2 lg:p-5 rounded-lg "
        >
          <img
            className="h-[250px] md:h-[200px] w-[100%] rounded-xl"
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
              <p className="text-center text-sm  lg:text-lg text-white hover:text-green-500 ">
                Buying Power Calculator
              </p>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="border-2 border-white hover:border-orange-500 hover:shadow-[0_0_20px_#FFA500] transition-transform hover:scale-105 p-2 lg:p-5 rounded-lg "
        >
          <img
            className="h-[250px] md:h-[200px] w-[100%] rounded-xl"
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
              <p className="text-center text-sm  lg:text-lg text-white hover:text-green-500 ">
                Saas Price Calculator
              </p>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.7,
          }}
          className="border-2 border-white hover:border-orange-500 hover:shadow-[0_0_20px_#FFA500] transition-transform hover:scale-105 p-2 lg:p-5 rounded-lg "
        >
          <img
            className="h-[250px] md:h-[200px] w-[100%] rounded-xl"
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
              <p className="text-center text-sm  lg:text-lg text-white hover:text-green-500 ">
                Youtube thumbnail downloader
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
