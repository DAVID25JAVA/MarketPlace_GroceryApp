import { asstes } from "../assets/assets";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function GroceryStore() {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-purple-500 px-5 py-10 rounded items-center">
      {/* Left Side (Text and Buttons) */}
      <div className="text-center lg:text-left">
        <p className="text-4xl font-medium lg:px-14 pt-10 text-white">Shop Faster With</p>
        <p className="text-4xl font-medium lg:px-14">Marketplace App.</p>
        <p className="text-white font-medium lg:px-14 py-5">Available on both IOS & Android</p>
        
        {/* Buttons Section */}
        <div className="flex justify-center lg:justify-start lg:px-14 mt-5 gap-3">
          {/* App Store Button */}
          <button className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-md sm:px-6 sm:py-4">
            <FaApple className="text-2xl sm:text-3xl" />
            <span className="text-left">
              <p className="text-xs sm:text-sm">Download on the</p>
              <p className="text-sm sm:text-lg">App Store</p>
            </span>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center gap-2 px-2 py-1 bg-black text-white rounded-md sm:px-6 sm:py-4">
            <IoLogoGooglePlaystore className="text-2xl sm:text-3xl text-green-400" />
            <span className="text-left">
              <p className="text-xs sm:text-sm">GET IT ON</p>
              <p className="text-sm sm:text-lg">Google Play</p>
            </span>
          </button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="flex justify-center lg:justify-end">
        <img
          className="w-full lg:w-auto max-w-sm mt-10 lg:mt-0 object-contain" 
          src={asstes.Grocery_AppStore}
          alt="Grocery App"
        />
      </div>
    </div>
  );
}

export default GroceryStore;
