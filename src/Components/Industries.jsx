import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Civil from "../assets/Industries/istockphoto-1334138265-612x612.png";
import telecome from "../assets/Industries/360_F_1008961200_jEXYlSMlK3do2bkkRwfONX4dwE9uZkI0.png";
import cabling from "../assets/Industries/pexels-photo-4508748.png";
import FIIth from "../assets/Industries/istockphoto-1443156018-612x612.png";
const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Industries data
  const industries = [
    {
      title: "Civil Construction",
      description:
        "Comprehensive medium-scale civil construction services including infrastructure development, site preparation, and more.",
      services: [
        "Road Construction",
        "Site Development",
        "Drainage Systems",
        "Utility Infrastructure",
      ],
      image: Civil,
    },
    {
      title: "Telecom Infrastructure",
      description:
        "Expert telecom works including tower construction, equipment installation, and network infrastructure development.",
      services: [
        "Tower Construction",
        "Equipment Installation",
        "Network Infrastructure",
        "Site Surveys",
      ],
      image: telecome,
    },
    {
      title: "Structured Cabling",
      description:
        "Professional structured cabling solutions for commercial and industrial facilities with guaranteed performance.",
      services: [
        "Data Center Cabling",
        "Office Network Infrastructure",
        "Fiber Optic Installation",
        "Testing & Certification",
      ],
      image: cabling,
    },
    {
      title: "FTTH Fiber Optics",
      description:
        "End-to-end Fiber to the Home solutions including design, installation, and maintenance of optical fiber networks.",
      services: [
        "Fiber Network Design",
        "Underground/Overhead Installation",
        "Splicing & Termination",
        "Network Testing",
      ],
      image: FIIth,
    },
  ];

  // Auto-rotate industries (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Industries We Serve
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Expert construction and telecom solutions tailored to your industry
          needs
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Industry Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndustry(index)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeIndustry === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-800 shadow-md hover:bg-gray-100"
              }`}
            >
              {industry.title}
            </motion.button>
          ))}
        </div>

        {/* Industry Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {industries[activeIndustry].title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {industries[activeIndustry].description}
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Services:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries[activeIndustry].services.map((service, i) => (
                  <motion.li
                    whileHover={{ x: 5 }}
                    key={i}
                    className="flex items-center bg-blue-50 px-4 py-2 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </motion.button>
          </motion.div>

          <motion.div
            key={`image-${activeIndustry}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={industries[activeIndustry].image}
              alt={industries[activeIndustry].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">
                {industries[activeIndustry].title}
              </h3>
              <p>Expert solutions for your projects</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Sevenscape delivered our telecom infrastructure project ahead of schedule with exceptional quality.",
              author: "Telecom Solutions Inc.",
            },
            {
              quote:
                "Their civil construction team handled our complex site development with professionalism.",
              author: "Urban Development Group",
            },
            {
              quote:
                "The FTTH installation was flawless - minimal disruption and perfect execution.",
              author: "Residential Community Board",
            },
          ].map((testimonial, index) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-yellow-400 text-2xl mb-4">"</div>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <p className="font-semibold text-gray-800">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            {
              question: "What's the typical project timeline?",
              answer:
                "Project timelines vary based on scope, but most medium civil construction projects take 3-6 months from planning to completion.",
            },
            {
              question: "Do you provide maintenance services?",
              answer:
                "Yes, we offer comprehensive maintenance packages for all our installations and constructions.",
            },
            {
              question: "What regions do you serve?",
              answer:
                "We operate throughout the UAE with active projects in Dubai, Abu Dhabi, Sharjah, and the Northern Emirates.",
            },
          ].map((faq, index) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <button className="w-full flex justify-between items-center p-4 text-left">
                <span className="font-medium">{faq.question}</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-500 transform transition-transform" />
              </button>
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
