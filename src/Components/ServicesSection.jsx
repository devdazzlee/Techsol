import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Images/Service_image1.webp'
import image2 from '../Images/Service_image2.webp'
import image3 from '../Images/Service_image3.webp'

const ServicesSection = () => {
  return (
    <div className="bg-[#141416] text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Service 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16 lg:mb-24">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h3 className="text-[72px] font-extrabold text-blue-500 mb-4">01</h3>
          <h4 className="text-[32px] font-bold mb-4">System Integration:</h4>
          <p className="text-[20px] mb-6 leading-relaxed text-gray-300">
            We specialize in integrating complex technology ecosystems to function seamlessly, ensuring unparalleled efficiency and reliability in your business processes.
          </p>
          <Link
     to={'/Software-Licences-Solutions'}
            className="text-blue-400 hover:text-blue-600 font-semibold transition duration-300 ease-in-out"
          >
            Learn more &rarr;
          </Link>
        </div>
        <div className="flex justify-center" data-aos="fade-left" data-aos-duration="1000">
          <img
            src={image1}
            alt="System Integration"
            className="w-[300px] h-auto transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Service 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-16 lg:mb-24">
        <div className="flex justify-center" data-aos="fade-right" data-aos-duration="1000">
          <img
            src={image2}
            alt="Comprehensive IT Solutions"
            className="w-[300px] h-auto transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <h3 className="text-[72px] font-extrabold text-blue-500 mb-4">02</h3>
          <h4 className="text-[32px] font-bold mb-4">Comprehensive IT Solutions:</h4>
          <p className="text-[20px] mb-6 leading-relaxed text-gray-300">
            From cutting-edge infrastructure design and implementation to advanced network management and bespoke software development, we provide end-to-end IT solutions that position your business at the technological vanguard.
          </p>
          <Link
     to={'/Information-Technology'}
            className="text-blue-400 hover:text-blue-600 font-semibold transition duration-300 ease-in-out"
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>

      {/* Service 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h3 className="text-[72px] font-extrabold text-blue-500 mb-4">03</h3>
          <h4 className="text-[32px] font-bold mb-4">Precision Engineering Equipment:</h4>
          <p className="text-[20px] mb-6 leading-relaxed text-gray-300">
            Our portfolio includes state-of-the-art engineering tools for precise test and measurement, ensuring accuracy and reliability in your technical operations.
          </p>
          <Link
     to={'/Engineering-Products-and-Services-Solutions'}
            className="text-blue-400 hover:text-blue-600 font-semibold transition duration-300 ease-in-out"
          >
            Learn more &rarr;
          </Link>
        </div>
        <div className="flex justify-center" data-aos="fade-left" data-aos-duration="1000">
          <img
            src={image3}
            alt="Precision Engineering Equipment"
            className="w-[300px] h-auto transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
