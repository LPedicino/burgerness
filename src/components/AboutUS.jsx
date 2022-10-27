import React from "react";
import { FaRegFilePdf, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const AboutUS = () => {
  return (
    <div name="about" className="w-full h-screen ">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto  flex flex-col justify-center h-full items-center text-center gap-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-black mt-[5rem]">
          Burger<span className="font-extrabold text-red-700">ness</span>
        </h1>
        <h2 className="text-lg sm:text-2xl my-4 text-red-700">
          A homemade food startup, created just for the pasion of eating this
          wonderful fast food. Since 2020 putting all the effort in order to get
          the best burger posible, most tasty and original as we can.
        </h2>
        <p className="text-black text-2xl">Thanks for your visit </p>

        <div>
          <img
            className="rounded-[5rem] lg:w-[850px] md:w-[550px] w-[400px] mt-11 "
            src="https://gyazo.com/70c3116ff3c461ad73cf83599113a498.jpg"
            alt=""
          />
        </div>
        <div className="w-[70%] h-[60px] mt-[5rem] bg-gray-100 rounded-full">
          <div className="flex flex-col px-10 py-2 items-center text-center">
            <ul className="flex flex-row justify-between w-full h-[50px] ">
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="flex items-center text-black"
                  href="https://www.linkedin.com/in/leandro-pedicino"
                  target="blank_"
                >
                  <FaLinkedin size={35} />
                </a>
              </li>
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="grid items-center w-full text-black"
                  href="https://github.com/LPedicino"
                  target="blank_"
                >
                  <FaGithub size={35} />
                </a>
              </li>
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center  hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="grid items-center w-full text-black"
                  href="mailto:leakomvial@gmail.com"
                  target="blank_"
                >
                  <HiOutlineMail className="text-black" size={35} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
