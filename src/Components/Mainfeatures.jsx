import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Mainfeatures = () => {
  const stats = [
    {
      icon: '🏗️',
      count: 250,
      suffix: '+',
      title: 'Projects Completed',
    },
    {
      icon: '⭐',
      count: 120,
      suffix: '+',
      title: '5-Star Reviews',
    },
    {
      icon: '🗓️',
      count: 15,
      suffix: '',
      title: 'Years In Business',
    },
    {
      icon: '📈',
      count: 200,
      suffix: '%',
      title: 'Average Client Growth',
    },
    {
      icon: '🔍',
      count: 50000,
      suffix: '+',
      title: 'Qualified Leads Generated',
    },
  ];

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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };


  const mainHeading = "Your Trusted Construction Partner";
  const tagline = "Building Excellence Since 2008";
  const subtitle = "Continuing the legacy and reputation of Metro Contracting LLC under the same Management";

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center mb-12"
        >
          {/* Main heading with animation */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              backgroundImage: 'linear-gradient(to right, #3b82f6, #ef4444)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              lineHeight: '1.3'
            }}
          >
            {mainHeading}
          </motion.h1>

          {/* Tagline with different font style */}
          <motion.p 
            className="text-2xl md:text-3xl font-medium mb-6 text-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic'
            }}
          >
            {tagline}
          </motion.p>

          {/* Subtitle with fade-in animation */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              lineHeight: '1.8'
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-5 gap-6 py-10 px-6 md:px-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="text-center px-4 py-6 hover:bg-gray-50 transition-all duration-300 rounded-xl"
            >
              <div className="text-5xl mb-4 text-blue-600 hover:text-red-600 hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                <CountUp 
                  end={stat.count} 
                  duration={3} 
                  suffix={stat.suffix} 
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h2>
              <p className="text-gray-600 text-lg">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Mainfeatures;