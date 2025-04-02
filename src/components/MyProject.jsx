import React from 'react'

const MyProject = () => {
  return (
    <div className=" flex  justify-center">
      <div className="w-full px-[10%] ">
        <h1 className="text-2xl lg:text-5xl text-white text-center font-bold ">
          {" "}
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="border-1 border-white p-2 lg:p-5 rounded-2xl ">
            <div className="h-[250px] md:h-[300px] w-[100%] overflow-hidden">
              <img
                className="w-full h-full  rounded-xl"
                src="https://anandhu936.github.io/anandhu-portfolio/images/pomodoro.png"
                alt="pomodoro"
              />
            </div>
            <div className="mt-2 lg:mt-3">
              <a
                href="https://www.paritydeals.com/coupon-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <p className="text-center   lg:text-[24px] text-white hover:text-green-500 ">
                  Coupon Generator
                </p>
              </a>
            </div>
            <div className='mt-5 flex justify-center gap-3 mb-3 lg:mb-0'>
              <a
                href="https://github.com/Anandhu936/my-pomodoro"  target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[14px] text-white hover:text-green-500 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://anandhu936.github.io/my-pomodoro/" target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[14px] text-white hover:text-green-500 transition-all"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="border-1 border-white p-2 lg:p-5 rounded-2xl ">
            <div className="h-[250px] md:h-[300px] w-[100%] overflow-hidden">
              <img
                className="w-full h-full  rounded-xl"
                src="https://anandhu936.github.io/anandhu-portfolio/images/pomodoro.png"
                alt="pomodoro"
              />
            </div>
            <div className="mt-2 lg:mt-3">
              <a
                href="https://www.paritydeals.com/coupon-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <p className="text-center   lg:text-[24px] text-white hover:text-green-500 ">
                  Coupon Generator
                </p>
              </a>
            </div>
            <div className='mt-5 flex justify-center gap-3 mb-3 lg:mb-0'>
              <a
                href="https://github.com/Anandhu936/my-pomodoro"  target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[14px] text-white hover:text-green-500 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://anandhu936.github.io/my-pomodoro/" target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[14px] text-white hover:text-green-500 transition-all"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="border-1 border-white p-2 lg:p-5 rounded-2xl ">
            <div className="h-[250px] md:h-[300px] w-[100%] overflow-hidden">
              <img
                className="w-full h-full  rounded-xl"
                src="https://anandhu936.github.io/anandhu-portfolio/images/pomodoro.png"
                alt="pomodoro"
              />
            </div>
            <div className="mt-2 lg:mt-3">
              <a
                href="https://www.paritydeals.com/coupon-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <p className="text-center   lg:text-[24px] text-white hover:text-green-500 ">
                  Coupon Generator
                </p>
              </a>
            </div>
            <div className='mt-5 flex justify-center gap-3 mb-3 lg:mb-0'>
              <a
                href="https://github.com/Anandhu936/my-pomodoro"  target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[14px] text-white hover:text-green-500 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://anandhu936.github.io/my-pomodoro/" target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[14px] text-white hover:text-green-500 transition-all"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject