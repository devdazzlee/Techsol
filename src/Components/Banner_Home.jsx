import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src={
            "https://res.cloudinary.com/dh7btgc82/video/upload/v1729844039/Header_vxllfy.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 bg-black bg-opacity-60">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Techsol Solutions <br /> Private Limited
        </h1>
        <p className="text-white text-lg md:text-2xl lg:text-3xl">
          Innovating Tomorrow's Technology, Today
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
