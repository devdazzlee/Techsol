import React from 'react';
import whytechsol from '../Images/whytechsol.webp'

const WhyTechsolSection = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Text Side - Left */}
      <div className="bg-[#141416] text-white w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
        <div className="space-y-12">
          <div>
            <h3 className="text-[#af4448] text-3xl font-bold mb-6 text-center lg:text-left">Expertise and Experience:</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              With extensive industry experience, our team of professionals possesses the technical acumen to handle complex projects and deliver innovative solutions.
            </p>
          </div>

          <div>
            <h3 className="text-[#af4448] text-3xl font-bold mb-6 text-center lg:text-left">Client-Centric Focus:</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              We prioritize your needs, delivering tailored solutions that align with your business objectives and drive success.
            </p>
          </div>

          <div>
            <h3 className="text-[#af4448] text-3xl font-bold mb-6 text-center lg:text-left">Commitment to Quality:</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              Our dedication to quality assurance guarantees that we deliver only the best products and services, meeting the highest industry standards.
            </p>
          </div>
        </div>
      </div>

      {/* Image Side - Right */}
      <div className="bg-[#1A1A1C] w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center items-center">
        <h2 className="text-white text-5xl font-bold mb-6 text-center">Why Techsol Solutions?</h2>
        <img
          src={whytechsol}
          alt="Why Techsol Solutions"
          className="w-[513px] h-[530px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyTechsolSection;
