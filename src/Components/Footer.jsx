import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../Images/newTwo.webp'
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141416] text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-6 lg:px-20 space-y-12 lg:space-y-0 lg:space-x-16">
        
        {/* Logo and Contact Information */}
        <div className="w-full lg:w-1/4 space-y-6">
          <img
            src={logo} // Add your logo URL here
            alt="Techsol Solutions Logo"
            className="w-48"
          />
        
        </div>

        {/* Quick Links */}
        <div className="w-full lg:w-1/4 space-y-3">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p className="text-sm text-gray-400">+92 21 34370164-7</p>
          
          <p className="text-sm text-gray-400">
            <a href="mailto:sales@techsolsol.com" className="hover:text-gray-200">
            info@techsolsol.com
            </a>
          </p>
          <p className="text-sm text-gray-400"> <span className="font-bold" >Head Office</span> <br />
          36-E/1, PECHS Block-6 , Shahrah-e-Faisal,
          Karachi, Pakistan</p>
          <p className="text-sm text-gray-400"> <span className="font-bold" >Regitered Office</span> <br />
          D-100, KDA Scheme #1 KDA Scheme 1, Karachi, Pakistan
          </p>


        </div>

        <div className="w-full lg:w-1/4 space-y-2">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="space-y-2">
  <li>
    <Link to="/" className="text-sm text-gray-400 hover:text-white transition duration-200">
      Home
    </Link>
  </li>
  <li>
    <Link to="/about" className="text-sm text-gray-400 hover:text-white transition duration-200">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/Engineering-Products-and-Services-Solutions" className="text-sm text-gray-400 hover:text-white transition duration-200">
      Product & Solutions
    </Link>
  </li>
  <li>
    <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition duration-200">
      Contact
    </Link>
  </li>
</ul>
</div>

        {/* Social Media Links */}
        <div className="w-full lg:w-1/4 space-y-6">
          <h4 className="text-xl font-semibold">Follow Us On</h4>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/company/techsol-solutions/?viewAsMember=true " target="_blank" className="text-gray-400 hover:text-[#8A181A] text-2xl transition duration-300 transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/techsols0lutions" className="text-gray-400 hover:text-[#8A181A] text-2xl transition duration-300 transform hover:scale-110" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/techsol08/?igsh=OWprdzlpazlsd3A5" className="text-gray-400 hover:text-[#8A181A] text-2xl transition duration-300 transform hover:scale-110" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© {currentYear} by Techsol Solutions (Private) Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
