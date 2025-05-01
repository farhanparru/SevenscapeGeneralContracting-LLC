// Brand.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import feature from '../assets/Images/Screenshot_7.png'

const Brand = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-gray-50">
      {/* Image Section */}
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <img
          src={feature} // Replace with your actual image path
          alt="Akira Office"
          className="rounded-[50px] shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
          Sevenscape Gen. Contracting Company LLC <br /> Your Trusted General Contractor in UAE
        </h2>
        <p className="text-gray-600 mb-4 text-justify">
          Sevenscape Gen. Contracting Company LLC is an ISO-9001 accredited company started its operations in the Emirate of Abu Dhabi, United Arab Emirates. Sevenscape continues the reputed legacy and experience of its parent company, Metro Contracting Company, under the same management. Under the leadership of investor John Samuel Kuruvila, we have successfully completed more than 100 projects for GHQ UAE Armed Forces, Abu Dhabi Airport, TRANSCO, Etisalat, and many more prestigious clients.
        </p>
        <p className="text-gray-600 text-justify">
          As a trusted General Contractor, we specialize in a wide range of services including medium civil construction, infrastructure development, telecom works, structured cabling, and FTTH (Fiber Optical Works). Our team is dedicated to delivering high-quality, customized solutions that meet the diverse needs of our clients with excellence at every step.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition-all duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Brand;
