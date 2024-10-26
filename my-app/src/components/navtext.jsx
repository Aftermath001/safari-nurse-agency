import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowMenu(false); // Close menu on navigation
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        onClick={() => handleNavigation("/")}
        className="h-12 w-12 lg:h-16 lg:w-16 rounded-full object-cover mb-0 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Full Menu (Hidden on small screens) */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li onClick={() => handleNavigation("/")} className="cursor-pointer">HOME</li>
        <li onClick={() => handleNavigation("/services")} className="cursor-pointer">SERVICES</li>
        <li onClick={() => handleNavigation("/about")} className="cursor-pointer">ABOUT</li>
        <li onClick={() => handleNavigation("/contact")} className="cursor-pointer">CONTACT</li>
      </ul>

      {/* Hamburger Icon (Visible on small screens) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {showMenu ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Visible when showMenu is true) */}
      {showMenu && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 border-t border-t-gray-400">
          <li onClick={() => handleNavigation("/")} className="w-full text-center cursor-pointer">HOME</li>
          <li onClick={() => handleNavigation("/services")} className="w-full text-center cursor-pointer">SERVICES</li>
          <li onClick={() => handleNavigation("/about")} className="w-full text-center cursor-pointer">ABOUT</li>
          <li onClick={() => handleNavigation("/contact")} className="w-full text-center cursor-pointer">CONTACT</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;