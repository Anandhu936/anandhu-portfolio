import React from "react";

const MySkills = () => {
  return (
    <div id="Skills" className="flex justify-center ">
      <div className="w-full xl:w-[1200px] mx-8 lg:mx-0 border-2 border-[#2a1ada]  pt-3 lg:pt-5 pl-3 lg:pl-5 pr-3 lg:pr-5 pb-8 lg:pb-16 rounded-md shadow-[0_0_20px_#2a1ada]  ">
        <h1 className="text-center text-2xl lg:text-4xl text-[#7cf03d] underline decoration-[[#7cf03d]] underline-offset-12 mt-4 lg:mt-8 mb-[50px] lg:mb-[150px]"> My Skills </h1>
        <div className="container grid grid-cols-2 lg:grid-cols-3 gap-5 mt-2 lg:mt-8">
          <di className="flex flex-col justify-center items-center ">
            <box-icon name="javascript" color="#7cf03d" type="logo" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">JavaScript</p>
          </di>
          <div className="flex flex-col justify-center items-center">
            <box-icon name="html5" type="logo" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon name="css3" type="logo" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon name="react" type="logo" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">React JS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon
              name="tailwind-css"
              type="logo"
              color="#7cf03d" className="w-10 h-10"
            ></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">Tailwind CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon name="bootstrap" type="logo" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">Bootstrap</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon name="typescript" type="logo" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">TypeScript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon type="logo" name="git" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px]font-light hover:font-medium transition-all">GIT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon type="logo" name="github" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">Github</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <box-icon name="nodejs" type="logo" color="#7cf03d" className="w-10 h-10"></box-icon>
            <p className=" text-white text-[12px] lg:text-[20px] font-light hover:font-medium transition-all">Node JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
