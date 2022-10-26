import React, { useState } from "react";
import { FaBars, FaTimes, FaHamburger } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[55px] bg-gray-100 flex justify-between items-center">
      {/* Logo */}
      <Link to="home">
        <div className="flex justify-between hover:scale-105 duration-300 hover:cursor-pointer">
          <FaHamburger className="text-yellow-600 ml-8 mr-2" size={30} />{" "}
          <h1 className="text-2xl">
            Burger<span className="font-bold text-red-700">ness</span>
          </h1>
        </div>
      </Link>

      {/* Menu grid */}
      <div className="hidden lg:grid w-[35%] h-[55px] mt-7 text-xl ">
        <ul className="grid grid-cols-4 justify-between w-full">
          <Link to="home">
            <li className="rounded-full w-full h-[55%] items-center text-center hover:bg-black hover:text-white hover:font-bold hover:cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="products">
            <li className="rounded-full w-full h-[55%] items-center text-center hover:bg-black hover:text-white hover:font-bold hover:cursor-pointer">
              Top Tier
            </li>
          </Link>
          <Link to="menu">
            <li className="rounded-full w-full h-[55%] items-center text-center hover:bg-black hover:text-white hover:font-bold hover:cursor-pointer">
              Menu
            </li>
          </Link>
          <Link to="about">
            <li className="rounded-full w-full h-[55%] items-center text-center hover:bg-black hover:text-white hover:font-bold hover:cursor-pointer">
              About US
            </li>
          </Link>
        </ul>
      </div>

      {/* Hamburger */}

      <div onClick={handleClick} className="lg:hidden mr-5 z-10 cursor-pointer">
        {!nav ? <FaBars size={23} /> : <FaTimes size={27} />}
      </div>

      {/* Menu Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-200 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:font-bold rounded-full hover:bg-black hover:text-white w-[80%] text-center  hover:cursor-pointer">
          <Link onClick={handleClick} to="home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold rounded-full hover:bg-black hover:text-white w-[80%] text-center  hover:cursor-pointer">
          <Link onClick={handleClick} to="products">
            Top Tier
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold rounded-full hover:bg-black hover:text-white w-[80%] text-center  hover:cursor-pointer">
          <Link onClick={handleClick} to="menu">
            Menu
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold rounded-full hover:bg-black hover:text-white w-[80%] text-center  hover:cursor-pointer">
          <Link onClick={handleClick} to="about">
            About US
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
