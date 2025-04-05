import React from 'react'

const MyProject = () => {
  return (
    <div id='Projects' className=" flex  justify-center">
      <div className="w-full px-[10%] ">
        <h1 className="text-3xl lg:text-5xl text-white text-center font-bold mb-[25px] lg:mb-[50px] ">
          {" "}
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="border-1 border-white p-2 lg:p-5 rounded-2xl ">
            <div className="h-[150px] md:h-[200px] w-[100%] overflow-hidden">
              <img
                className="w-full h-full  rounded-xl"
                src="https://anandhu936.github.io/anandhu-portfolio/images/pomodoro.png"
                alt="pomodoro"
              />
            </div>
            <div className="mt-1 lg:mt-3">
              
                {" "}
                <p className="text-center text-[16px]  lg:text-[24px] text-white  ">
                  Pomodoro
                </p>
            
            </div>
            <div className='mt-2 lg:mt-5 flex justify-center gap-3 mb-2 lg:mb-0'>
              <a
                href="https://github.com/Anandhu936/my-pomodoro"  target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://anandhu936.github.io/my-pomodoro/" target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="border-1 border-white p-2 lg:p-5 rounded-2xl ">
            <div className="h-[150px] md:h-[200px] w-[100%] overflow-hidden">
              <img
                className="w-full h-full  rounded-xl"
                src="https://anandhu936.github.io/anandhu-portfolio/images/emi.png"
                alt="pomodoro"
              />
            </div>
            <div className="mt-1 lg:mt-3">
              
                {" "}
                <p className="text-center text-[16px]  lg:text-[24px] text-white  ">
                  Emi calculator
                </p>
             
            </div>
            <div className='mt-2 lg:mt-5 flex justify-center gap-3 mb-2 lg:mb-0'>
              <a
                href="https://github.com/Anandhu936/emi-calculator"  target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://anandhu936.github.io/emi-calculator/" target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="border-1 border-white p-2 lg:p-5 rounded-2xl ">
            <div className="h-[150px] md:h-[200px] w-[100%] overflow-hidden">
              <img
                className="w-full h-full  rounded-xl"
                src="https://anandhu936.github.io/anandhu-portfolio/images/militarytime-converter.png"
                alt="military-time-converter"
              />
            </div>
            <div className="mt-1 lg:mt-3">
            
                <p className="text-center text-[16px]  lg:text-[24px] text-white  ">
                  Military time converter
                </p>
             
            </div>
            <div className='mt-2 lg:mt-5 flex justify-center gap-3 mb-2 lg:mb-0'>
              <a
                href="https://github.com/Anandhu936/military-time-converter"  target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://anandhu936.github.io/military-time-converter/" target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="border-1 border-white p-2 lg:p-5 rounded-2xl ">
            <div className="h-[150px] md:h-[200px] w-[100%] overflow-hidden">
              <img
                className="w-full h-full  rounded-xl"
                src="https://anandhu936.github.io/anandhu-portfolio/images/gym-website.png"
                alt="military-time-converter"
              />
            </div>
            <div className="mt-1 lg:mt-3">
            
                <p className="text-center text-[16px]  lg:text-[24px] text-white  ">
                  Gym-website-Demo
                </p>
             
            </div>
            <div className='mt-2 lg:mt-5 flex justify-center gap-3 mb-2 lg:mb-0'>
              <a
                href="https://github.com/Anandhu936/gym-website"  target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://anandhu936.github.io/gym-website/" target="_blank"
              rel="noopener noreferrer"
                className="border-2 border-black rounded-full px-5 py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all"
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