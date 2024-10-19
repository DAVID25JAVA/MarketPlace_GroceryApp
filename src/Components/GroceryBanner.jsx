import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { asstes } from "../assets/assets";

function GroceryBanner() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 my-14 justify-center items-center px-4 lg:px-0">
      
      {/* Left Banner */}
      <div className="border flex flex-col lg:flex-row justify-between bg-purple-500 w-full lg:w-[52%] p-6 rounded-lg">
        <div className="lg:pl-8">
          <button className="bg-purple-950 text-white font-medium px-4 py-2 mb-3">
            Free Delivery
          </button>
          <p className="text-xl text-white pt-1">Free Delivery over $50</p>
          <p className="pt-2 font-medium text-white">Shop $50 product and get free</p>
          <p className="font-medium text-white">delivery anywhere.</p>
          <div className="flex items-center gap-2 mt-5 cursor-pointer w-36 justify-center border bg-purple-950 text-white font-medium py-2 rounded-md">
            <button className="text-lg">Shop now</button>
            <span>
              <FaArrowRightLong className="text-white font-bold" />
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img className="w-64 lg:w-96" src={asstes.leftBanner} alt="Left Banner" />
        </div>
      </div>

      {/* Right Banner */}
      <div className="border flex flex-col lg:flex-row justify-between bg-pink-800 w-full lg:w-[50%] p-6 rounded-lg">
        <div className="lg:pl-8">
          <button className="bg-pink-900 text-white font-medium px-4 py-2 mb-3">
            60% Off
          </button>
          <p className="text-xl text-white pt-1">Organic Food</p>
          <p className="pt-2 font-medium text-white">Save up to 60% off on your</p>
          <p className="font-medium text-white">first order</p>
          <div className="flex items-center gap-2 mt-5 cursor-pointer w-36 justify-center border bg-pink-900 text-white font-medium py-2 rounded-md">
            <button className="text-lg">Order now</button>
            <span>
              <FaArrowRightLong className="text-white font-bold" />
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img className="w-64 lg:w-96" src={asstes.RightBanner} alt="Right Banner" />
        </div>
      </div>
    </div>
  );
}

export default GroceryBanner;
