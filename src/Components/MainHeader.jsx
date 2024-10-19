import { asstes } from "../assets/assets";
import { FiSend } from "react-icons/fi";

function MainHeader() {
  return (
    <div className="flex flex-col lg:flex-row bg-purple-500 rounded-lg px-4 sm:px-6 lg:px-8 my-8 overflow-hidden w-full">
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          Don't miss our daily
        </p>
        <p className="text-3xl lg:text-4xl font-medium">amazing deals.</p>
        <p className="text-white font-semibold my-4 lg:my-8">
          Save up to 60% off on your first order.
        </p>
        <div className="flex items-center relative">
          <p className="pt-2 absolute pl-2">
            <FiSend />
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="border py-2 pl-10 pr-4  focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button className="text-white font-medium px-4 py-2 bg-purple-950 transition duration-200">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
        <img className="w-full max-w-[500px] h-auto" src={asstes.main_header_img} alt="Main Header" />
      </div>
    </div>
  );
}

export default MainHeader;
