import React from "react";

const Menu = () => {
  return (
    <div name="menu" className="w-full h-[100%] md-h-screen mb-[10rem]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
          <h1 className="text-red-700 font-bold text-4xl md:text-6xl mt-[5rem] mb-[100px] text-center">
            Our Menu
          </h1>
          <ul className="w-full grid grid-cols-2 gap-10">
            <li className="text-black font-bold text-4xl">
              Classic{" "}
              <p className="text-lg mt-4">
                5 Oz burger of selected meat blend, lettuce, tomatoes, grilled
                egg, cheddar and mayonnaise
              </p>
            </li>

            <li className="text-black font-bold text-4xl">
              Cheese classic{" "}
              <p className="text-lg mt-4">
                5 Oz burger of selected meat blend, 2x cheddar, bacon, tomatoes,
                and mayonnaise
              </p>
            </li>
            <li className="text-black font-bold text-4xl">
              Crunchy Onion
              <p className="text-lg mt-4">
                5 Oz burger of selected meat blend, crispy onion, cheddar,
                bacon, tomatoes and mayonnaise
              </p>
            </li>
            <li className="text-black font-bold text-4xl">
              Big Duo{" "}
              <p className="text-lg mt-4">
                2x 3.5 Oz burgers of selected meat blend, lettuce, pickle,
                cheddar and thousand island sauce
              </p>
            </li>
            <li className="text-black font-bold text-4xl">
              Patty Melt
              <p className="text-lg mt-4">
                2x 3.5 Oz burgers of selected meat, 2x bread toasted on
                mayonnaise, 3x cheddar and caramelized onion
              </p>
            </li>
            <li className="text-black font-bold text-4xl">
              Smashnifica{" "}
              <p className="text-lg mt-4">
                5 Oz burger of selected meat blend, lettuce, tomatoes, onion,
                ketchup and mayonnaise{" "}
              </p>
            </li>
            <li className="text-black font-bold text-4xl">
              Duo Cheese{" "}
              <p className="text-lg mt-4">
                2x 3.5 Oz burgers of selected meat, 4x cheddar, extra bacon,
                tomatoes and mayonnaise{" "}
              </p>{" "}
            </li>
            <li className="text-black font-bold text-4xl">
              Special Spicy{" "}
              <p className="text-lg mt-4">
                5 Oz burger of selected meat blend, purple onion, cheddar, bacon
                and spicy thousand island{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
