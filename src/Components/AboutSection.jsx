import React from "react";
import { Link } from "react-router-dom";

const ReusableAboutSection = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-gray-50 py-12 px-6 md:px-12 lg:px-24 my-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section with Overlap Effect */}
      <div className="w-full md:w-1/2 bg-[#1B1C1E] text-white p-8 rounded-lg shadow-lg mt-8 md:mt-0 md:absolute md:right-80 md:top-16 lg:top-20 z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#af4448]">
          {title}
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed mb-6">{description}</p>
        <div className="mt-6">
          <Link
            to={"/about"}
            className="bg-[#af4448] text-white px-6 py-3 rounded-lg shadow hover:bg-[#8a2f32] focus:ring-4 focus:ring-[#af4448] focus:ring-opacity-50"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReusableAboutSection;
