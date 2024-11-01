import React from 'react';
import { Link } from 'react-router-dom';

// Ensure correct structure for AboutUs_Detail with React.forwardRef
const AboutUs_Detail = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 lg:px-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#761b1e] mb-4">
            About Us:
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            In 1965, we embarked on our voyage in the textile industry,
            establishing ourselves as one of Pakistan's chief textile exporters.
            We established Techsol Solutions to introduce pioneering
            technologies to Pakistan and the region.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-12 mt-6 lg:mt-0">
          <p className="text-gray-700 text-lg leading-relaxed">
            We specialize in Test & Measurement, Industrial Automation, IT
            Solutions & Services, and Industrial Power Backup Solutions.
          </p>
          <div className="mt-8">
            <Link
              to={'/contact'}
              className="py-2 px-8 border border-[#761b1e] text-[#761b1e] font-bold uppercase tracking-wide transition-colors duration-300 hover:bg-[#761b1e] hover:text-white"
            >
              Contact Us          
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUs_Detail;
