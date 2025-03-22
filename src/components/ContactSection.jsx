import React from "react";

const ContactSection = () => {
  return (
    <div id="Contact">
      <p className="flex items-center justify-center text-sm text-white">
        Get in Touch
      </p>
      <h1 className="flex items-center justify-center text-4xl text-white">
        Contact Me
      </h1>
      <div className=" flex justify-center ">
        <div className="flex justify-center gap-8 mt-8 border-2 border-yellow-300 p-4 lg:p-10 rounded-xl max-w-fit  mx-4">
          <div className="flex justify-center items-center gap-4">
            <div className="flex border-2 border-white p-2 rounded-full bg-black">
              <box-icon name="envelope" color="white"></box-icon>
            </div>
            <a
              href="mailto:examplemail@gmail.com"
             className="!text-white hover:!text-green-500 text-[24px] lg:text-[32px]"
            >
              Example@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex border-2 border-white p-2 rounded-full bg-black">
              <box-icon name="linkedin" type="logo" color="white "></box-icon>
            </div>
            <a
              href="#"
              className="!text-white hover:!text-green-500 text-[24px] lg:text-[32px]"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
