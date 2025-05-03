import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/Images/WhatsApp Image 2025-04-08 at 16.03.17.jpeg.jpg';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' },
    { 
      name: 'Services', 
      href: '#',
      subItems: [
        'Construction, Infrastructure, development',
        'Telecom works, Structured cabling',
        'FTTH – Fiber Optical Works'
      ]
    },
    { name: 'Projects', href: '/Project' },
    { name: 'Industries', href: '/Industrie' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '/Contact' },
];

const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
    if (name !== 'Services') {
      setServicesOpen(false);
      setMobileServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setActiveLink('Services');
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
    setActiveLink('Services');
  };

  return (
    <nav className="bg-white shadow-lg w-full sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain rounded-full border-2 border-blue-600 p-1" />
            <span className="ml-3 text-xl font-bold text-blue-800 font-serif hidden sm:block">Sevenscape</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subItems ? (
                  <div className="relative group">
                    <button
                      onClick={toggleServices}
                      className={`flex items-center text-base font-medium ${
                        activeLink === link.name
                          ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                          : 'text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                      } pb-1 transition duration-200 ease-in-out`}
                    >
                      <span className="font-sans tracking-wide">{link.name}</span>
                      {servicesOpen ? (
                        <ChevronUp size={18} className="ml-1" />
                      ) : (
                        <ChevronDown size={18} className="ml-1" />
                      )}
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-xl z-50 border border-gray-100">
                        <div className="py-1">
                          {link.subItems.map((subItem, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-150"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    className={`text-base font-medium ${
                      activeLink === link.name
                        ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                        : 'text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                    } pb-1 transition duration-200 ease-in-out`}
                  >
                    <span className="font-sans tracking-wide">{link.name}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-200 shadow-md hover:shadow-lg">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-600 hover:text-blue-800 focus:outline-none transition duration-200"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.subItems ? (
                <div>
                  <button
                    onClick={toggleMobileServices}
                    className={`flex items-center justify-between w-full text-base font-medium px-4 py-3 rounded-lg ${
                      activeLink === link.name
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-blue-600'
                    } transition duration-200`}
                  >
                    <span className="font-sans tracking-wide">{link.name}</span>
                    {mobileServicesOpen ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-6 space-y-2 mt-1">
                      {link.subItems.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block text-base font-medium px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block text-base font-medium px-4 py-3 rounded-lg ${
                    activeLink === link.name
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-blue-600'
                  } transition duration-200`}
                >
                  <span className="font-sans tracking-wide">{link.name}</span>
                </a>
              )}
            </div>
          ))}
          {/* Contact button in mobile menu */}
          <div className="pt-2 px-4">
            <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full transition duration-200 shadow-md">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">Contact Us</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigationbar;