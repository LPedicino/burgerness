import React from "react";

const AboutUS = () => {
  return (
    <div name="about" className="w-full h-[100%] lg:h-screen ">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto  flex flex-col justify-center h-full items-center text-center gap-4">
        <p className="text-black text-2xl">Thanks for your visit </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-black">
          Burger<span className="font-extrabold text-red-700">ness</span>
        </h1>
        <h2 className="text-lg sm:text-2xl my-4 text-red-700">
          A homemade food startup, created just for the pasion of eating this
          wonderful fast food. Since 2020 putting all the effort in order to get
          the best burger posible, most tasty and original as we can.
        </h2>

        <div>
          <img
            className="rounded-[5rem] lg:w-[850px] md:w-[550px] w-[400px] mt-11 "
            src="https://gyazo.com/70c3116ff3c461ad73cf83599113a498.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
