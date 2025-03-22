import React from "react";

const AboutSection = () => {
  return (
    <div id="About" className=" flex justify-center ">
      <div className="w-full xl:w-[1200px] pt-[40px] lg:pt-[80px] pb-[20px] lg:pb-[100px] mx-8  rounded-lg">
        <h1 className="text-4xl flex justify-center text-blue-500 underline decoration-blue-800 underline-offset-8">About</h1>
        <div className=" lg:grid lg:grid-cols-2 lg:gap-0 gap-6 mt-0 lg:mt-[80px] p-5">
          <div className="flex justify-center">
            <img
              className="w-60 lg:w-80 h-50 lg:h-80 border-3 border-black  rounded-md lg:opacity-80 "
              src="/images/my.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
          <h2 className="mb-2 lg:mb-4 text-2xl font-medium text-white text-center lg:text-left mt-2 lg:mt-0">I'm Anandhu</h2>

            <p className="text-md lg:text-xl font-light text-white text-center lg:text-left">
            Im a Frontend Developer with expertise in JavaScript, CSS, HTML, Next.js, React.js, Tailwind CSS, and Bootstrap. Your skill set enables you to build modern, responsive, and interactive web applications with a strong focus on user experience and performance. You are proficient in developing scalable UI components, optimizing web interfaces, and ensuring cross-browser compatibility. Your experience with frameworks like Next.js and React.js allows you to create dynamic, SEO-friendly, and efficient applications. With your knowledge of styling frameworks like Tailwind CSS and Bootstrap, you can design visually appealing and maintainable user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
