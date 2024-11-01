import React from "react";
import img1 from "../Images/Engineering_Solutions.jpg";
import { useNavigate } from "react-router-dom";

const Information_TechnologyBanner = ({ onExploreClick }) => {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      {/* Optional Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Banner container with increased height */}
      <div className="container relative mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
        {/* Left section with title and description */}
        <div className="lg:w-1/2 space-y-6 z-10">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Engineering Products  <br />Services & Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            At Techsol Solutions, we provide cutting-edge engineering products
            and customized solutions tailored to your industry’s unique needs.
            Our expertise spans across multiple sectors, offering innovative
            technologies, system integrations, and high-performance products
            that ensure efficiency, reliability, and top-tier results.
          </p>
          <button
            onClick={onExploreClick}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-md shadow-md hover:shadow-xl hover:bg-red-500 transition-all duration-300 transform hover:scale-105"
          >
            Explore Solutions
          </button>
        </div>

        {/* Right section with image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center z-10 relative">
          <div className="relative group">
            <img
              src={img1}
              alt="Software License"
              className="w-full h-[450px] object-cover rounded-lg shadow-2xl transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            />
            {/* Glow effect around the image */}
            <div className="absolute inset-0 rounded-lg transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
      </div>

      {/* Decorative Circles (Optional for more visual effects) */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-red-600 to-transparent opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-600 to-transparent opacity-30 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3"></div>
    </div>
  );
};

export default Information_TechnologyBanner;
