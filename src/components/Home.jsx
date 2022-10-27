import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-[100%] lg:h-screen">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto  flex flex-col justify-center h-full items-center text-center gap-4">
        <p className="text-black text-2xl font-bold">Welcome to </p>
        <h1 className="text-5xl mt-10 md:mt-0 sm:text-8xl font-bold text-black">
          Burger<span className="font-extrabold text-red-700">ness</span>
        </h1>
        <h2 className="text-xl sm:text-3xl my-4 text-red-700">
          The love for smash burgers in one place
        </h2>

        <div>
          <img
            className="rounded-[5rem] lg:w-[800px] md:w-[550px] w-[400px] mt-11 ml-[5%] md:ml-0"
            src="https://gyazo.com/ecb9377f1457e3a9c9197d0aae0b0a93.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
