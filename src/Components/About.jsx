import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import construction1 from '../assets/Images/company1.jpg'; // Construction site images
import construction2 from '../assets/Images/company2.jpg';
import construction3 from '../assets/Images/company3.jpg';
import construction4 from '../assets/Images/company4.jpg';

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
            ABOUT US
          </h1>
          <h2 className="mt-6 text-3xl font-bold text-blue-600">
            General Contractor for Medium Civil Construction & Infrastructure Development
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
            <div className="text-blue-600 text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-2">Civil Construction</h3>
            <p className="text-gray-600">Expertise in medium-scale civil construction projects with precision and quality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="text-blue-600 text-4xl mb-4">🛣️</div>
            <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
            <p className="text-gray-600">Building the foundational structures that support communities and economies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="text-blue-600 text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-gray-600">Transforming visions into tangible structures that stand the test of time.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="text-blue-600 text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">Rigorous quality control measures ensuring project excellence.</p>
          </div>
        </div>

        {/* Construction Project Gallery - 4 images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div data-aos="fade-right" className="overflow-hidden rounded-lg shadow-lg">
            <img src={construction1} alt="Construction Project 1" className="w-full h-64 object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div data-aos="fade-up" className="overflow-hidden rounded-lg shadow-lg">
            <img src={construction2} alt="Construction Project 2" className="w-full h-64 object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div data-aos="fade-down" className="overflow-hidden rounded-lg shadow-lg">
            <img src={construction3} alt="Construction Project 3" className="w-full h-64 object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div data-aos="fade-left" className="overflow-hidden rounded-lg shadow-lg">
            <img src={construction4} alt="Construction Project 4" className="w-full h-64 object-cover transform hover:scale-105 transition duration-500" />
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
            <h2 className="ml-4 text-3xl font-bold text-gray-800">OUR VISION</h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            To be the preferred partner in medium civil construction and infrastructure development, 
            delivering exceptional quality and value while contributing to the nation's growth through 
            sustainable building practices.
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
            We extend our sincere appreciation to our clients, partners, skilled workforce, 
            suppliers, and all stakeholders who have contributed to our journey in building 
            the nation's infrastructure. Your trust and collaboration enable us to deliver 
            excellence in every project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;