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
    { name: 'Industries', href: '#' },
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
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain rounded-full" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subItems ? (
                  <div className="relative group">
                    <button
                      onClick={toggleServices}
                      className={`flex items-center text-base font-medium ${
                        activeLink === link.name
                          ? 'text-blue-700 border-b-2 border-blue-700'
                          : 'text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700'
                      } pb-1 transition duration-150 ease-in-out`}
                    >
                      {link.name}
                      {servicesOpen ? (
                        <ChevronUp size={18} className="ml-1" />
                      ) : (
                        <ChevronDown size={18} className="ml-1" />
                      )}
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
                        <div className="py-1">
                          {link.subItems.map((subItem, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
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
                        ? 'text-blue-700 border-b-2 border-blue-700'
                        : 'text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700'
                    } pb-1 transition duration-150 ease-in-out`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Icon */}
          <div className="hidden md:flex items-center">
            <Phone size={22} className="text-blue-700 hover:text-red-600 cursor-pointer transition duration-150 ease-in-out" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.subItems ? (
                <div>
                  <button
                    onClick={toggleMobileServices}
                    className={`flex items-center justify-between w-full text-base font-medium px-3 py-2 rounded-md ${
                      activeLink === link.name
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                    }`}
                  >
                    {link.name}
                    {mobileServicesOpen ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4">
                      {link.subItems.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block text-base font-medium px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-700"
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
                  className={`block text-base font-medium px-3 py-2 rounded-md ${
                    activeLink === link.name
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
          {/* Contact icon in mobile menu */}
          <div className="flex justify-end pr-4 pt-2">
            <Phone size={22} className="text-blue-700 hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigationbar;