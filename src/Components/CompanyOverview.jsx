import React from 'react';
import CompanyOverviewimage from '../Images/companyoverview.webp'
const CompanyOverview = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center bg-gray-100 py-12 px-4">
      {/* Left side with the image */}
      <div className="lg:w-1/2 w-full p-4">
        <img
          src={CompanyOverviewimage}
          alt="Company Overview"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right side with the text */}
      <div className="lg:w-1/2 w-full p-8 bg-black text-white flex flex-col justify-center relative lg:top-0 top-4 lg:right-0 right-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-6">Company's Overview</h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          Welcome to Techsol Solutions, where innovation meets excellence. We deliver cutting-edge software, hardware, and consultancy services tailored to your needs. Our passionate team is dedicated to transforming your business and exceeding expectations. At Techsol, we're more than a tech provider we're your strategic partner in achieving success. Experience the difference with us, where innovation is our language and success is our destination.
        </p>
      </div>
    </section>
  );
};

export default CompanyOverview;
