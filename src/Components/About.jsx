import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import office1 from '../assets/Images/3.jpg'; // Replace with your actual image paths
import office2 from '../assets/Images/4.jpg';
import office3 from '../assets/Images/5.jpg';

const About = () => {
    useEffect(() => {
        // Initialize AOS animation library
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true
        });
      }, []);
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Company
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Building excellence through dedication and innovation
          </p>
        </div>

        {/* Office Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div data-aos="fade-right" className="overflow-hidden rounded-lg shadow-lg">
            <img src={office1} alt="Office 1" className="w-full h-64 object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div data-aos="fade-up" className="overflow-hidden rounded-lg shadow-lg">
            <img src={office2} alt="Office 2" className="w-full h-64 object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div data-aos="fade-left" className="overflow-hidden rounded-lg shadow-lg">
            <img src={office3} alt="Office 3" className="w-full h-64 object-cover transform hover:scale-105 transition duration-500" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-16" data-aos="zoom-in">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 className="ml-4 text-3xl font-bold text-gray-800">VISION</h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            To continue the legacy and expert services to the development activities in this 
            blessed nation.
          </p>
        </div>

        {/* Gratitude Section */}
        <div className="bg-blue-700 text-white rounded-lg p-8" data-aos="zoom-in" data-aos-delay="200">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-600 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h2 className="ml-4 text-3xl font-bold">GRATITUDE</h2>
          </div>
          <p className="text-xl leading-relaxed">
            The Management records their sincere gratitude to the sponsors, partners, 
            employees, reputed clients, credit suppliers, vendors and sub-contractors for fulfilling 
            our responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;