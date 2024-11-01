import React, { forwardRef } from 'react';

const ReusableSection = forwardRef(({ heading, description, image, altText, reverse, isBlack, isGray }, ref) => {
  return (
    <section
      ref={ref} // Attach ref to the HTML section element here
      className={`${isBlack ? 'bg-[#141416]' : isGray ? 'bg-[#E4E6E6]' : 'bg-white'} text-black py-16 px-6`}
    >
      <div
        className={`container mx-auto flex flex-col ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center justify-between space-y-8 lg:space-y-0`}
      >
        {/* Left Section - Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-red-800">{heading}</h2>
          <p className={`${isBlack ? 'text-white' : 'text-black'} text-lg leading-relaxed`}>
            {description}
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={image}
            alt={altText}
            className="w-full h-96 lg:w-3/4 object-cover rounded-lg transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
});

export default ReusableSection;
