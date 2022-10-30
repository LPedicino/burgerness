import React from "react";
import { FaFacebookSquare, FaWhatsapp, FaInstagram } from "react-icons/fa";

const AboutUS = () => {
  return (
    <div name="about" className="w-full h-[100%] lg:h-screen">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto  flex flex-col justify-center h-full items-center text-center gap-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-black mt-[5rem]">
          Burger<span className="font-extrabold text-red-700">ness</span>
        </h1>
        <h2 className="text-lg sm:text-2xl my-6 text-red-700 text-center items-center ml-[4%] md:ml-0">
          A homemade company created by the passion for smash burgers. Since
          2020 putting all the effort to get the best, tastiest and original
          smash burger.
        </h2>
        <p className="text-black text-lg md:text-2xl">Thanks for your visit </p>

        <div>
          <img
            className="rounded-xl lg:w-[850px] md:w-[550px] w-[360px] mt-7 ml-0 md:ml-0"
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
                  className="flex items-center text-[#8a3ab9]"
                  href="https://www.instagram.com/burgernesslove/"
                  target="blank_"
                >
                  <FaInstagram size={35} />
                </a>
              </li>
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="grid items-center w-full text-[#25D366]"
                  href=" https://wa.me/+5493513965151 "
                  target="blank_"
                >
                  <FaWhatsapp size={35} />
                </a>
              </li>
              <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center  hover:scale-110 duration-300 mt-2">
                {" "}
                <a
                  className="grid items-center w-full text-black"
                  href="https://www.facebook.com/profile.php?id=100046941176274"
                  target="blank_"
                >
                  <FaFacebookSquare className="text-[#3b5998]" size={35} />
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
