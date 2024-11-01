import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import logo from '../Images/newTwo.webp';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#141416] text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 lg:py-6">
        {/* Logo */}
        <div className="flex items-center">
        <Link to="/" className="hover:text-[#af4448]">
          <img
            src={logo}
            alt="Techsol Solutions Logo"
            className="w-36 animate-pulse-custom"
          />
        </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-semibold text-lg">
          <li>
            <Link to="/" className="hover:text-[#af4448]">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none hover:text-[#af4448]"
            >
              Products & Solutions ⏷
            </button>
            {/* Dropdown */}
            <ul
              className={`${
                dropdownOpen ? "block" : "hidden"
              } absolute bg-[#141416] top-full left-0 py-2 space-y-2 w-48 shadow-lg group-hover:block z-50`}
            >
              <li>
                <Link to="/Engineering-Products-and-Services-Solutions" className="block px-4 py-2 hover:bg-[#af4448]">
                Engineering Products & Services Solutions
                </Link>
              </li>
              <li>
                <Link to="/Information-Technology" className="block px-4 py-2 hover:bg-[#af4448]">
                Information Technology
                </Link>
              </li>
              <li>
                <Link to="/Software-Licences-Solutions" className="block px-4 py-2 hover:bg-[#af4448]">
                Software Licenses & Solutions
                </Link>
              </li>
              <li>
                <Link to="/Imaging-and-Printing" className="block px-4 py-2 hover:bg-[#af4448]">
                Imaging And Printing
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#af4448]">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#af4448]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-[#141416] text-white z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-6 p-8">
          <li>
            <Link to="/" className="hover:text-[#af4448]" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none hover:text-[#af4448] w-full text-left"
            >
              Products & Solutions ⏷
            </button>
            {/* Dropdown for mobile */}
            <ul
              className={`${
                dropdownOpen ? "block" : "hidden"
              } mt-2 space-y-2 pl-4`}
            >
              <li>
                <Link to="/Engineering-Products-and-Services-Solutions" className="hover:bg-[#af4448] block" onClick={toggleMenu}>
                Engineering Products & Services Solutions
                </Link>
              </li>
              <li>
                <Link to="/Information-Technology" className="hover:bg-[#af4448] block" onClick={toggleMenu}>
                Information Technology
                </Link>
              </li>
              <li>
                <Link to="/Software-Licences-Solutions" className="hover:bg-[#af4448] block" onClick={toggleMenu}>
                Software Licenses & Solutions
                </Link>
              </li>
              <li>
                <Link to="/Imaging-and-Printing" className="hover:bg-[#af4448] block" onClick={toggleMenu}>
                Imaging And Printing
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#af4448]" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#af4448]" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;