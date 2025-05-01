import React from 'react';
import uaeFlag from '../assets/logoImages/image.png';
import contactBanner from '../assets/Images/istockphoto-1194098130-612x612.png';
import { motion } from 'framer-motion'; // For animations

const ContactUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Smaller Banner Image */}
      <div className="lg:w-1/3 w-full h-64 lg:h-auto">
        <motion.img
          src={contactBanner}
          alt="Contact Visual"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Right Side - Contact Form and Info */}
      <motion.div 
        className="lg:w-2/3 w-full p-8 md:p-10 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Contact Info */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.img 
            src={uaeFlag} 
            alt="UAE Flag" 
            className="w-20 h-auto mb-4"
            whileHover={{ scale: 1.05 }}
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Head Office</h3>
          <p className="mb-1 font-medium">Sevenscape General Contracting & Facility Management Services LLC</p>
          <p className="mb-1">Al Hail Business Centre, Block 1, Unit 8, Office 12</p>
          <p className="mb-1">Mussafah 4, Abu Dhabi</p>
          <p className="mb-1">Tel No.: <span className="font-semibold">02-6211282</span></p>
          <p>Email: <a href="mailto:info.7scapeauh@gmail.com" className="text-blue-600 hover:underline">info.7scapeauh@gmail.com</a></p>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <motion.h2 
            className="text-2xl font-semibold text-gray-800"
            whileHover={{ scale: 1.01 }}
          >
            Contact Us
          </motion.h2>
          <motion.h1 
            className="text-4xl font-bold text-blue-900 mt-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Schedule a meeting with our team for service inquiries.
          </motion.p>
          
          <motion.form 
            className="space-y-4"
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input 
                type="text" 
                placeholder="First Name" 
                className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                variants={itemVariants}
                whileFocus={{ scale: 1.01 }}
              />
              <motion.input 
                type="text" 
                placeholder="Last Name" 
                className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                variants={itemVariants}
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input 
                type="email" 
                placeholder="Email" 
                className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                variants={itemVariants}
                whileFocus={{ scale: 1.01 }}
              />
              <motion.input 
                type="text" 
                placeholder="Number with Country Code" 
                className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                variants={itemVariants}
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            <motion.select 
              className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              variants={itemVariants}
              whileFocus={{ scale: 1.01 }}
            >
              <option>Choose Service</option>
              <option>Facility Management</option>
              <option>General Contracting</option>
            </motion.select>
            <motion.textarea 
              placeholder="Type Your Message" 
              rows="5" 
              className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              variants={itemVariants}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.div 
              className="flex items-center space-x-2"
              variants={itemVariants}
            >
              <input type="checkbox" id="captcha" className="h-5 w-5" />
              <label htmlFor="captcha">I'm not a robot</label>
            </motion.div>
            <motion.button 
              type="submit" 
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium text-lg w-full md:w-auto"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 5px 15px rgba(239, 68, 68, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;