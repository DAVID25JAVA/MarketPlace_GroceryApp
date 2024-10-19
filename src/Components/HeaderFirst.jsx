import { PiCirclesFourLight } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function HeaderFirst() {
  return (
    <div>
      
      <div className="hidden lg:flex justify-between my-2">
        <div>
          <button className="border bg-purple-950 flex gap-1 items-center px-3 py-2 text-white font-medium">
            <PiCirclesFourLight className="text-2xl " />
            <span>Browse All Categories</span>
          </button>
        </div>
        <div>
          <ul className="flex ml-20 items-center gap-8 my-2 text-purple-900 font-medium">
            <NavLink to='/'> 
              <span className="cursor-pointer">HOME</span>
            </NavLink>
            <NavLink to='/'>
              <span className="cursor-pointer">DEALS</span>
            </NavLink>
            <NavLink to='contact-us'>
              <span className="cursor-pointer">CONTACT US</span>
            </NavLink>
            <NavLink to='about-us'>
              <span className="cursor-pointer">ABOUT US</span>
            </NavLink>
          </ul>
        </div>
        <div className="my-2 flex items-center gap-5 justify-center">
          <p className="my-1 text-red-500">
            <FaPhoneAlt />
          </p>
          <span className="text-red-500 font-medium">6393274099</span>
          <p className="font-medium text-gray-500 cursor-pointer">
            Support Center
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderFirst;
