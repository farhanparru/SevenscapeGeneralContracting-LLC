// Brand.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import feature from '../assets/Images/Screenshot_7.png';

const Brand = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-gray-50">
      {/* Image Section */}
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <img
          src={feature}
          alt="Akira Office"
          className="rounded-[50px] shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 animate-gradient-x">
            Sevenscape General Contracting
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 animate-gradient-x animation-delay-200">
            and Facility Management Services L.L.C
          </span>
          <span className="block mt-4 text-xl md:text-2xl font-semibold text-gray-700 animate-pulse">
            Your Trusted General Contractor in UAE
          </span>
        </h2>
        
        <div className="space-y-4">
          <p 
            className="text-gray-600 text-justify font-medium transition-all duration-500 hover:text-gray-800 hover:scale-[1.01]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Sevenscape Gen. Contracting Company LLC is an <span className="font-bold text-red-600">ISO-9001 accredited</span> company started its operations in the Emirate of Abu Dhabi, United Arab Emirates.
          </p>
          
          <p 
            className="text-gray-600 text-justify font-medium transition-all duration-500 hover:text-gray-800 hover:scale-[1.01]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Sevenscape continues the reputed legacy and experience of its parent company, <span className="italic font-semibold">Metro Contracting Company</span>, under the same management.
          </p>
          
          <p 
            className="text-gray-600 text-justify font-medium transition-all duration-500 hover:text-gray-800 hover:scale-[1.01]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Under the leadership of investor <span className="font-bold">John Samuel Kuruvila</span>, we have successfully completed more than <span className="font-bold text-blue-600">100 projects</span> for GHQ UAE Armed Forces, Abu Dhabi Airport, TRANSCO, Etisalat, and many more prestigious clients.
          </p>
          
          <p 
            className="text-gray-600 text-justify font-medium transition-all duration-500 hover:text-gray-800 hover:scale-[1.01]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            As a trusted General Contractor, we specialize in a wide range of services including medium civil construction, infrastructure development, telecom works, structured cabling, and FTTH (Fiber Optical Works).
          </p>
        </div>
        
        <button 
          className="mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Brand;