import React from 'react';
import Image1 from '../Images/Product_Spectrum_image.jpg'
const ProductSpectrum = () => {
  return (
    <div className="flex flex-col lg:flex-row w-10/12 h-auto mx-auto m-10 ">
      {/* Left Section with Image */}
      <div className="w-full lg:w-1/2 h-[600px] lg:h-auto">
        <img 
          src={Image1} 
          alt="Product Spectrum Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Text */}
      <div className="w-full lg:w-1/2 bg-[#141416] text-white p-8 lg:p-20 flex flex-col justify-center">
        <h2 className="text-[#8A181A] text-4xl font-bold mb-6">Our Product Spectrum</h2>
        <p className="text-lg mb-8 text-gray-300 leading-relaxed">
          We are proud to offer an expansive selection of products from globally renowned brands, each designed to meet the highest standards of quality and performance:
        </p>
        <div className="mb-6">
          <h3 className="text-[#8A181A] text-2xl font-semibold mb-4">IT Hardware and Software:</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Equip your business with powerful servers, robust workstations, versatile laptops, and innovative software solutions that ensure operational efficiency and scalability.
          </p>
        </div>
        <div>
          <h3 className="text-[#8A181A] text-2xl font-semibold mb-4">Test and Measurement Equipment:</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our range of precision instruments, from industry-leading manufacturers, provides accurate measurements and dependable results, essential for your engineering projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSpectrum;
