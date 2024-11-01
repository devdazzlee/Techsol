import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Images/Contact_us_Image2.webp'
const ContactUsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto py-8 bg-white">
      {/* Left Section with Text */}
      <div className="p-8 lg:p-16 flex flex-col justify-center">
        <h2 className="text-[#8A181A] text-5xl lg:text-6xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
          Experience the benefits of a fully integrated technology ecosystem with Techsol Solutions.
          Partner with us to leverage our expertise and comprehensive services, and elevate your business
          to new heights. Contact us today to learn more about how our custom integration solutions can
          support your business growth and operational efficiency.
        </p>
        <Link className="px-6 py-2 bg-[#8A181A] text-white text-lg font-semibold hover:bg-red-700 transition-colors duration-300 w-fit" to={'/contact'}>
          Contact Us
        
        </Link>
      </div>

      {/* Right Section with Image */}
      <div className="w-full h-[300px] lg:h-[600px]">
        <img 
          src={image1}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactUsSection;
