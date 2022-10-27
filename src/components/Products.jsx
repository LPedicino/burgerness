import React, { useState } from "react";
import { data } from "../data/data.js";

const Products = () => {
  const [foods, setFoods] = useState(data);
  return (
    <div
      name="products"
      className="max-w-[1640px] h-[100%] lg:h-screen m-auto px-4 py-12"
    >
      <div>
        <h1 className="text-red-700  text-5xl md:text-7xl text-center my-10 mt-[7rem]">
          Top Tier Burgers
        </h1>
      </div>

      {/* Display Foods */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 mt-10 ml-[7%] md:ml-0">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold ">{item.name}</p>
              <p>
                <span className="bg-red-900 text-white p-1 rounded-full font-bold">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
