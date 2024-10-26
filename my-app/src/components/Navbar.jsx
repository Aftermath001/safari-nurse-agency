import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

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
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-controls="mobile-menu"
              aria-expanded={showMenu}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {showMenu ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <img
              onClick={() => handleNavigation("/")}
              className="h-12 w-12 lg:h-16 lg:w-16 rounded-full object-cover cursor-pointer"
              src={assets.logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex sm:ml-6 sm:items-center">
            <div className="flex space-x-4">
              {["/", "/services", "/about", "/contact"].map((path) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => handleNavigation(path)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-600 hover:bg-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {showMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {["/", "/services", "/about", "/contact"].map((path) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => handleNavigation(path)}
                className={({ isActive }) =>
                  isActive
                    ? "block bg-primary text-white px-3 py-2 rounded-md text-base font-medium"
                    : "block text-gray-600 hover:bg-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                }
              >
                {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
