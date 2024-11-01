import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center relative"
      style={{
        background: "linear-gradient(90deg, #8A181A 0%, #000000 31.58%, #000000 100%)",
      }}
    >
      {/* Left Section with Text */}
      <div className="w-full lg:w-1/2 text-white px-8 lg:px-20">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Hello,
        </h1>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
          we're Techsol Solutions.
        </h2>
        <p className="text-lg lg:text-xl italic">
          "We are Engineers with a knack for Creative Design, Strategic Insight, and Exceptional Execution."
        </p>
      </div>

      {/* Right Section with SVG */}
      <div className="absolute lg:relative lg:w-1/2 w-full h-full flex items-center justify-center lg:justify-end lg:pr-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" className="w-1/2 lg:w-2/3 h-auto">
          <defs>
            <clipPath id="__lottie_element_16">
              <rect width="1080" height="1080" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_16)">
            <g transform="matrix(1,0,0,1,0,-4)" opacity="1" style={{ display: "block" }}>
              <rect width="1080" height="1088" fill="#42.fd0e560418941a.028f5c28f5c200"></rect>
            </g>
            {/* Example paths (reduced for brevity) */}
            <g transform="matrix(1,0,0,1,540,540)" opacity="1" style={{ display: "block" }}>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(207,93,21)"
                  fillOpacity="0.08"
                  d="M22.272750854492188,-116.22899627685547 C22.272750854492188,-116.22899627685547 126.83300018310547,97.5 126.83300018310547,97.5 C126.83300018310547,97.5 -108.89099884033203,29.027000427246094 -108.89099884033203,29.027000427246094 C-108.89099884033203,29.027000427246094 22.272750854492188,-116.22899627685547 22.272750854492188,-116.22899627685547z"
                ></path>
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(255,97,0)"
                  strokeOpacity="1"
                  strokeWidth="1.8"
                  d="M22.272750854492188,-116.22899627685547 C22.272750854492188,-116.22899627685547 126.83300018310547,97.5 126.83300018310547,97.5 C126.83300018310547,97.5 -108.89099884033203,29.027000427246094 -108.89099884033203,29.027000427246094 C-108.89099884033203,29.027000427246094 22.272750854492188,-116.22899627685547 22.272750854492188,-116.22899627685547z"
                ></path>
              </g>
            </g>
            {/* Add additional SVG groups as necessary */}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
