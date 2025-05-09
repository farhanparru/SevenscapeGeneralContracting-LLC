import React from "react";
import { motion } from "framer-motion";
import one from "../assets/Industries/Newq.jpg";
import two from "../assets/Industries/Newa.jpg";
import three from "../assets/Industries/Telcome.jpg";

const Downfeature = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Main Heading Section */}
      <motion.div 
        className="mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Building Tomorrow's Infrastructure Today
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto mb-6"
          variants={itemVariants}
        >
          As a premier civil construction specialist, we deliver end-to-end
          solutions for infrastructure projects, telecommunications networks,
          and fiber optic installations. Our expertise spans from ground-up
          development to precision cabling systems, ensuring connectivity and
          structural excellence for modern communities.
        </motion.p>
        <motion.a 
          href="#" 
          className="text-blue-600 font-medium hover:underline"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          - Explore Our Capabilities
        </motion.a>
      </motion.div>

      {/* Pillars Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 
          className="text-2xl font-semibold text-gray-700 mb-8"
          variants={itemVariants}
        >
          PILLARS OF EXCELLENCE
        </motion.h3>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
          variants={containerVariants}
        >
          <motion.span 
            className="text-xl font-bold text-gray-800 px-4 py-2 bg-gray-100 rounded-full"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
          >
            TRUST
          </motion.span>
          <motion.span 
            className="text-xl font-bold text-gray-800 px-4 py-2 bg-gray-100 rounded-full"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
          >
            EXPERTISE
          </motion.span>
          <motion.span 
            className="text-xl font-bold text-gray-800 px-4 py-2 bg-gray-100 rounded-full"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
          >
            SAFETY
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Three Image Sections */}
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {/* Section 1 */}
        <motion.div 
          className="group relative overflow-hidden rounded-lg shadow-lg"
          variants={cardVariants}
          whileHover={{ y: -10 }}
        >
          <div className="h-64 bg-blue-100 flex items-center justify-center">
            <img
              src={two}
              alt="Excellence"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 bg-white">
            <motion.h4 
              className="text-xl font-bold text-gray-800 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We've Reputation for Excellence
            </motion.h4>
            <motion.p 
              className="text-gray-600 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Aenean et dolor pretium, feugiat leom nongal, aliquetitabrer
              libero.
            </motion.p>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Consectetur ut vestibulum vivamus vestibulum accumua.
            </motion.p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          className="group relative overflow-hidden rounded-lg shadow-lg"
          variants={cardVariants}
          whileHover={{ y: -10 }}
        >
          <div className="h-64 bg-green-100 flex items-center justify-center">
            <img
              src={one}
              alt="Excellence"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 bg-white">
            <motion.h4 
              className="text-xl font-bold text-gray-800 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We Build Partnerships
            </motion.h4>
            <motion.p 
              className="text-gray-600 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Aenean et dolor pretium, feugiat leom nongal, aliquetitabrer
              libero.
            </motion.p>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Consectetur ut vestibulum vivamus vestibulum accumua.
            </motion.p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          className="group relative overflow-hidden rounded-lg shadow-lg"
          variants={cardVariants}
          whileHover={{ y: -10 }}
        >
          <div className="h-64 bg-purple-100 flex items-center justify-center">
            <img
              src={three}
              alt="Excellence"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 bg-white">
            <motion.h4 
              className="text-xl font-bold text-gray-800 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Guided by Commitment
            </motion.h4>
            <motion.p 
              className="text-gray-600 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Aenean et dolor pretium, feugiat leom nongal, aliquetitabrer
              libero.
            </motion.p>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Consectetur ut vestibulum vivamus vestibulum accumua.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Downfeature;