import React from "react";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <div
      id="About"
      className=" flex justify-center bg-[#1c2028] pt-5 pb-5 lg:p-10 "
    >
      <div className="w-full px-[10%] pt-[10px] lg:pt-[80px] pb-[0px] lg:pb-[100px]   rounded-lg">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.2,
          }}
          className="text-3xl lg:text-5xl flex justify-center text-white font-bold "
        >
          About
        </motion.h1>
        <div className=" grid lg:grid-cols-2 lg:gap-0 gap-6 mt-[30px] lg:mt-[80px] ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="flex justify-center"
          >
            <img
              className="w-60 lg:w-80 h-50 lg:h-80 border-3 border-black  rounded-md lg:opacity-80 "
              src="https://anandhu936.github.io/anandhu-portfolio/images/my.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.8,
            }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-2 lg:mb-4 text-2xl font-medium text-white text-center lg:text-left mt-2 lg:mt-0">
              I'm Anandhu
            </h2>

            <p className="text-sm lg:text-xl font-light text-white text-justify lg:text-justify">
              I’m a passionate Frontend Developer with experience in building
              responsive and user-friendly web applications. Proficient in
              JavaScript, React.js, Next.js, and Tailwind CSS, I love crafting
              clean and efficient code to enhance user experiences. Constantly
              learning and evolving, I aim to create intuitive and visually
              appealing digital solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
