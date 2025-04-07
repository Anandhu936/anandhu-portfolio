import React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
const MyProject = () => {
  const items = [
    {
      title: "  Pomodoro",
      img: "https://anandhu936.github.io/anandhu-portfolio/images/pomodoro.png",
      weburl: " https://anandhu936.github.io/my-pomodoro/",
      giturl: "https://github.com/Anandhu936/my-pomodoro",
    },
    {
      title: " Military time converter",
      img: "https://anandhu936.github.io/anandhu-portfolio/images/militarytime-converter.png",
      weburl: "https://anandhu936.github.io/military-time-converter/",
      giturl: "https://github.com/Anandhu936/military-time-converter",
    },
    {
      title: " Emi calculator",
      img: "https://anandhu936.github.io/anandhu-portfolio/images/emi.png",
      weburl: "https://anandhu936.github.io/emi-calculator/",
      giturl: "https://github.com/Anandhu936/emi-calculator",
    },
    {
      title: " Gym-website-demo",
      img: "https://anandhu936.github.io/anandhu-portfolio/images/gym-project.png",
      weburl: "https://anandhu936.github.io/gym-website/",
      giturl: "https://github.com/Anandhu936/gym-website",
    },
  ];

  return (
    <div id="Projects" className=" flex  justify-center bg-[#1c2028] p-15">
      <div className="w-full px-[10%] ">
        <h1 className="text-3xl lg:text-5xl text-white text-center font-bold mb-[25px] lg:mb-[50px] ">
          {" "}
          Projects
        </h1>
        <div className="flex justify-center">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Card className="bg-[#0f0f0f] text-white py-0">
                    <CardContent className="p-1 md:p-4">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-lg w-full h-[200px] object-center"
                      />
                      <div className="p-4 text-center">
                        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                        <div className="flex justify-center gap-4">
                          <a
                            href={item.giturl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-gray-700 rounded-full px-2 lg:px-5 py-1 lg:py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all ease-in-out hover:border-gray-500"
                          >
                            GitHub
                          </a>
                          <a
                            href={item.weburl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-gray-700 rounded-full px-2 lg:px-5 py-1 lg:py-2 cursor-pointer text-[12px] lg:text-[16px] text-white hover:text-green-500 transition-all ease-in-out hover:border-gray-500"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
