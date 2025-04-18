import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="border-2 border-black m-4 rounded-b-2xl rounded-l-2xl rounded-r-2xl bg-[#1c2028]">
      <nav className="flex justify-between items-center px-10 md:px-20 py-4">
        <span className="lg:text-[24px] text-[14px] text-white hover:text-green-500 font-bold tracking-wide cursor-pointer">
          Portfolio
        </span>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <ul className="mx-24 p-4  font-semibold  md:mx-0 hidden md:flex gap-8">
          <a href="#Home">
            <li className="text-white hover:text-green-500 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
              Home
            </li>
          </a>
          <a href="#About">
            <li className=" text-white hover:text-green-500 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
              About
            </li>
          </a>
          <a href="#Skills">
            <li className="text-white hover:text-green-500 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
              Skills
            </li>
          </a>
          <a href="#Experience">
            <li className="text-white hover:text-green-500 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
             Experience
            </li>
          </a>
          <a href="#Projects">
            <li className="text-white hover:text-green-500 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
             Projects
            </li>
          </a>
          <a href="#Contact">
            <li className="text-white hover:text-green-500 lg:text-[20px] text-[14px] transition-all duration-300 p-1 md:p-0">
              Contact 
            </li>

          </a>
        </ul>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#0f0f0f] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-full h-full`}
      >
        <div className="border-2 border-black m-4 rounded-b-2xl rounded-l-2xl rounded-r-2xl bg-[#1c2028]">
          <nav className="flex justify-between items-center px-10 md:px-20 py-4">
            <span className="lg:text-[20px] text-[14px] text-white hover:text-green-500 font-bold tracking-wide cursor-pointer">
              Portfolio
            </span>
            <button className="cursor-pointer text-white" onClick={() => setIsOpen(false)}>
              <X size={30} />
            </button>
          </nav>
        </div>
        <ul className="flex flex-col gap-6 text-lg font-semibold p-8">
          <a href="/#Home">
            <li className="text-white hover:text-green-500 text-md transition-all duration-300 p-1 md:p-0">
              Home
            </li>
          </a>
          <a href="/#About">
            <li className=" text-white hover:text-green-500 text-md transition-all duration-300 p-1 md:p-0">
              About 
            </li>
          </a>
          <a href="/#Skills">
            <li className="text-white hover:text-green-500 text-md transition-all duration-300 p-1 md:p-0">
              Skills
            </li>
          </a>
          <a href="/#Work">
            <li className="text-white hover:text-green-500 text-md transition-all duration-300 p-1 md:p-0">
            Experience
            </li>
          </a>
          <a href="#Projects">
            <li className="text-white hover:text-green-500 text-md transition-all duration-300 p-1 md:p-0">
             Projects
            </li>
          </a>
          <a href="/#Contact">
            <li className="text-white hover:text-green-500 text-md transition-all duration-300 p-1 md:p-0">
              Contact 
            </li>

          </a>
        </ul>
       
      </div>
    </div>
  );
};

export default Navbar;
