import { useState } from "react";
import { asstes } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Navbar Container */}
      <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-400 px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex gap-1 items-center text-xl justify-center font-bold">
          <img
            onClick={() => navigate("/")}
            className="w-10 cursor-pointer"
            src={asstes.logo}
            alt="MarketPlace Logo"
          />
          <NavLink to="/">
            <p className="mt-1 text-purple-800 cursor-pointer">MarketPlace</p>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-10 items-start font-medium">
          <li>
            {/* Search Bar */}
            <div className="relative mx-4 flex justify-end w-full ">
              <input
                type="text"
                placeholder="Search items"
                className="border w-full max-w-[300px] px-14 py-2 placeholder:text-start mx-5 "
              />
              <img
                src={asstes.search_icon}
                className="absolute w-8 pt-[6px] bg-slate-300 cursor-pointer"
                alt="Search Icon"
              />
            </div>
          </li>
          <li
            className="py-2 cursor-pointer flex gap-2 items-center"
            onClick={() => navigate("/wishlist")}
          >
            <FaRegHeart className="text-xl" />
            <span>WISHLIST</span>
          </li>
          <li
            className="py-1 cursor-pointer flex gap-2 items-center"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart className="text-2xl" />
            <span>MY CART</span>
          </li>
        </ul>

        {/* User Profile Section */}
        <div className="hidden md:flex gap-3">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              className="w-8 rounded-full"
              src={asstes.Profile_Photo}
              alt="User Profile"
            />
            <p className="font-medium text-[15px]">David Pal</p>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setMobileMenu(true)}
          className="md:hidden w-6"
          src={asstes.menu}
          alt="Mobile Menu Icon"
        />

        {/* Mobile Menu */}
        <div
          className={`${
            mobileMenu ? "fixed w-full" : "hidden"
          } md:hidden bottom-0 top-0 right-0 overflow-y-auto z-20 bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-10 py-2">
            <img className="w-12" src={asstes.logo} alt="MarketPlace Logo" />
            <img
              className="w-10 cursor-pointer"
              onClick={() => setMobileMenu(false)}
              src={asstes.cros}
              alt="Close Menu"
            />
          </div>
          <ul className="flex items-center justify-center flex-col gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setMobileMenu(false)} to="/">
              HOME
            </NavLink>
            <NavLink onClick={() => setMobileMenu(false)} to="/cart">
              MY CART
            </NavLink>
            <NavLink onClick={() => setMobileMenu(false)} to="/about-us">
              ABOUT US
            </NavLink>
            <NavLink onClick={() => setMobileMenu(false)} to="/contact-us">
              CONTACT US
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
