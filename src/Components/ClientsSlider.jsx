import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from '../Images/Our Clients/Client1.png';
import img2 from '../Images/Our Clients/Client2shell.png';
import img3 from '../Images/Our Clients/Client3tcs.png';
import img4 from '../Images/Our Clients/Client4SSGC.jpg';
import img5 from '../Images/Our Clients/Client5engro.png';
import img6 from '../Images/Our Clients/Client6.png';
import img7 from '../Images/Our Clients/Client7.png';
import img8 from '../Images/Our Clients/Client8.png';
import img9 from '../Images/Our Clients/Client9.png';
import img10 from '../Images/Our Clients/Client10c6.png';

const ClientSlider = () => {
  const swiperRef = useRef(null);

  const clients = [
    { name: "Client 1", logo: img1 },
    { name: "Client 2", logo: img2 },
    { name: "Client 3", logo: img3 },
    { name: "Client 4", logo: img4 },
    { name: "Client 5", logo: img5 },
    { name: "Client 6", logo: img6 },
    { name: "Client 7", logo: img7 },
    { name: "Client 8", logo: img8 },
    { name: "Client 9", logo: img9 },
    { name: "Client 10", logo: img10 },
  ];

  // Custom Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); // Manually trigger the next slide
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="bg-white py-10 flex justify-center">
      <div className="w-[80%] mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-[#8A181A] mb-8 ">
          Our Clients
        </h2>

        {/* Swiper Component */}
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={4} // Adjust this to show 4 slides at a time
            loop={true} // Enable looping
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Assign swiper instance to ref
            }}
            className="mySwiper"
            breakpoints={{
              // Responsive breakpoints
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-[120px] h-[90px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full hover:bg-[#8A181A] hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full hover:bg-[#8A181A] hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
