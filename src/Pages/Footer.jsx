import { asstes } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="md:mx-10">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between gap-14 mt-40 text-sm">
          {/* Left Side */}
          <div className="flex flex-col gap-2">
            <img className="w-12 mb-5" src={asstes.logo} alt="Logo" />
            <p className="text-gray-600">Wishlist</p>
            <p className="text-gray-600">Order</p>
            <p className="text-gray-600">Track Order</p>
            <p className="text-gray-600">Shipping Details</p>
          </div>

          {/* Center */}
          <div>
            <p className="mb-5 font-medium text-xl">USEFUL LINKS</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="mb-5 font-medium text-xl">HELP CENTER</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Payment</li>
              <li>Refund</li>
              <li>Checkout</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Right Side */}
          <div>
            <p className="mb-5 font-medium text-xl">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>+1-212-456-7890</li>
              <li>Davidpal25@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <hr className="my-5" />
          <p className="text-center text-gray-600 my-5">
            Copyright © 2024 David Pal - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
