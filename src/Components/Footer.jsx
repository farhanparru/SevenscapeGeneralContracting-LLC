import React from 'react';
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Sevenscape General Contracting LLC</h3>
          <p className="text-sm text-gray-300">
            General Contractor for Medium Civil Construction, Infrastructure Development, Telecom Works, Structured Cabling, FTTH – Fiber, and Facility Management Services.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Medium Civil Construction</li>
            <li>Infrastructure Development</li>
            <li>Telecom Works</li>
            <li>Structured Cabling</li>
            <li>FTTH – Fiber Solutions</li>
            <li>Facility Management</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <div className="flex items-start gap-2 text-sm text-gray-300 mb-4">
            <FiMapPin className="mt-1" />
            <p>Al Hail Business Centre, Block 1, Unit 8, Office 12<br />Mussafah 4, Abu Dhabi</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
            <FiPhone />
            <p>02-6211282</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <FiMail />
            <a href="mailto:info.7scapeauh@gmail.com">info.7scapeauh@gmail.com</a>
          </div>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="font-bold mb-4">Follow us</h3>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaGithub /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-gray-800 text-center text-xs text-gray-400 py-4 border-t border-gray-700">
        <p className="mb-2">&copy; {new Date().getFullYear()} Sevenscape General Contracting LLC. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Legal</a>
          <a href="#" className="hover:text-white">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
