import React from "react";
import { motion } from "framer-motion";
const MySkills = () => {
  return (
    <div id="Skills" className="flex flex-col justify-center w-full px-[10%] ">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: .5 }}
        className="text-center text-3xl lg:text-5xl text-white font-bold  mt-4 lg:mt-8 mb-[25px] lg:mb-[50px]"
      >
        {" "}
        My Skills{" "}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        className="border-2 border-[#2a1ada]  pt-4 lg:pt-5 pl-3 lg:pl-5 pr-3 lg:pr-5 pb-8 lg:pb-16 rounded-md shadow-[0_0_20px_#2a1ada]  "
      >
        <div className="container grid grid-cols-2 lg:grid-cols-3 gap-5 mt-2 lg:mt-8 lg:mx-10 ">
          <di className="flex flex-col justify-center items-center ">
            <box-icon
              name="javascript"
              color="#7cf03d"
              type="logo"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              JavaScript
            </p>
          </di>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="html5"
              type="logo"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              HTML
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="css3"
              type="logo"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              CSS
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="react"
              type="logo"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              React JS
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="tailwind-css"
              type="logo"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="bootstrap"
              type="logo"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              Bootstrap
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="typescript"
              type="logo"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              TypeScript
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              type="logo"
              name="git"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px]font-light hover:font-medium transition-all">
              GIT
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              type="logo"
              name="github"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              Github
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="nodejs"
              type="logo"
              color="#7cf03d"
              className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">
              Node JS
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MySkills;
