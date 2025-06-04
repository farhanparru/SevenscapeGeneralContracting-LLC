import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company */}
        <div className="space-y-5">
          <h3 className="font-bold text-xl uppercase tracking-wider">
            Sevenscape General Contracting and Facility Management Services
            L.L.C
          </h3>
          <p className="text-gray-400 leading-relaxed">
            General Contractor for Medium Civil Construction, Infrastructure
            Development, Telecom Works, Structured Cabling, FTTH – Fiber, and
            Facility Management Services.
          </p>
          <div className="pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-5">
          <h3 className="font-bold text-lg uppercase tracking-wider">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Medium Civil Construction
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Infrastructure Development
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Telecom Works
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Structured Cabling
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              FTTH – Fiber Solutions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Facility Management
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-5">
          <h3 className="font-bold text-lg uppercase tracking-wider">
            Contact Us
          </h3>
          <div className="flex items-start gap-3 text-gray-400">
            <FiMapPin className="mt-1 text-blue-500" />
            <p className="leading-relaxed">
              Al Hail Business Centre, Block 1, Unit 8, Office 12
              <br />
              Mussafah 4, Abu Dhabi
              <br />
              PO Box 27720
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <FiPhone className="text-blue-500" />
            <a href="tel:+97126211282" className="hover:text-white transition">
              +971 2 6211282
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <FiMail className="text-blue-500" />
            <a
              href="mailto:info@sevenscape.ae"
              className="hover:text-white transition"
            >
              info@sevenscape.ae
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <HiOutlineGlobeAlt className="text-blue-500" />
            <a
              href="https://sevenscape.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              www.sevenscape.ae
            </a>
          </div>
        </div>

        {/* Follow us */}
        <div className="space-y-5">
          <h3 className="font-bold text-lg uppercase tracking-wider">
            Follow us
          </h3>
          <p className="text-gray-400">Connect with us on social media</p>
          <div className="flex gap-4 text-2xl text-gray-400">
            <a href="#" className="hover:text-blue-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Newsletter */}
          <div className="pt-4">
            <h4 className="text-sm font-medium mb-2 text-gray-300">
              Subscribe to our newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-gray-800 text-center py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400 text-sm mb-3">
            &copy; {new Date().getFullYear()} Sevenscape General Contracting and
            Facility Management Services L.L.C. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Industrie
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Site Map
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
