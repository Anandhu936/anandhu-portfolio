import React from "react";

const FooterSection = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-black m-4 rounded-b-2xl rounded-l-2xl rounded-r-2xl bg-[#1c2028]">
      <nav className="flex justify-between items-center  lg:px-20 py-4">
        <ul className=" lg:mx-24 p-2 grid grid-cols-5 font-semibold  md:mx-0  md:flex gap-1 lg:gap-10   justify-items-center">
          <a href="#Home">
            <li className="text-white hover:text-green-500 text-[10px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
              Home
            </li>
          </a>
          <a href="#About">
            <li className=" text-white hover:text-green-500 text-[10px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
              About
            </li>
          </a>
          <a href="#Skills">
            <li className="text-white hover:text-green-500 text-[10px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
              Skills
            </li>
          </a>
          <a href="#Experience">
            <li className="text-white hover:text-green-500 text-[10px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
              Experience
            </li>
          </a>
          <a href="#Projects">
            <li className="text-white hover:text-green-500 text-[10px] lg:text-[20px] transition-all duration-300 p-0 md:p-0">
              Projects
            </li>
          </a>
         
        </ul>
      </nav>
      <p className="mb-5 text-white text-sm">
        Copyright &#169; 2025 Anandhu . All Right Reserved.
      </p>
    </div>
  );
};

export default FooterSection;
