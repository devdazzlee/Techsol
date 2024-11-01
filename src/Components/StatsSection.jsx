import React from 'react';
import statsImage from '../Images/Bg-Stats-image.jpg'

const StatsSection = () => {
  return (
    <div
      className="relative w-full h-auto py-16 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${statsImage}`,
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">We Take Pride in Our Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {/* Stat 1 */}
          <div>
            <p className="text-6xl font-bold">50+</p>
            <p className="text-xl mt-2">Business Partners</p>
          </div>
          {/* Stat 2 */}
          <div>
            <p className="text-6xl font-bold">500+</p>
            <p className="text-xl mt-2">Products</p>
          </div>
          {/* Stat 3 */}
          <div>
            <p className="text-6xl font-bold">5</p>
            <p className="text-xl mt-2">Offices Nationwide</p>
          </div>
          {/* Stat 4 */}
          <div>
            <p className="text-6xl font-bold">7</p>
            <p className="text-xl mt-2">Industry Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
