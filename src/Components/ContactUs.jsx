import React, { useState } from "react";
import uaeFlag from "../assets/logoImages/image.png";
import contactBanner from "../assets/Images/istockphoto-1194098130-612x612.png";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaBuilding, FaTools, FaClipboardCheck } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: {
      countryCode: "+971",
      number: "",
    },
    serviceNeeded: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      phone: {
        ...prev.phone,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("Please agree to the privacy policy");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: {
          countryCode: formData.phone.countryCode,
          number: formData.phone.number,
        },
        serviceNeeded: formData.serviceNeeded.toLowerCase(),
        message: formData.message,
      };

      const response = await axios.post(
        "https://sevenscape-general-contracting-backend.vercel.app/api/user/contactUs",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully! We will contact you soon.");
        setFormData({
          fullName: "",
          email: "",
          phone: {
            countryCode: "+971",
            number: "",
          },
          serviceNeeded: "",
          message: "",
          agree: false,
        });
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = "Failed to send message. Please try again later.";
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.status === 400) {
          errorMessage = "Validation error. Please check your inputs.";
        } else if (error.response.status === 500) {
          errorMessage = "Server error. Please try again later.";
        }
      } else if (error.request) {
        errorMessage = "Network error. Please check your connection.";
      }
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const serviceOptions = [
    {
      value: "facility management",
      label: "Facility Management",
      icon: <FaBuilding className="text-blue-500 text-xl" />,
    },
    {
      value: "general contracting",
      label: "General Contracting",
      icon: <FaTools className="text-blue-500 text-xl" />,
    },
    {
      value: "maintenance services",
      label: "Maintenance Services",
      icon: <FaClipboardCheck className="text-blue-500 text-xl" />,
    },
    {
      value: "others",
      label: "Other Services",
      icon: <FiCheck className="text-blue-500 text-xl" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-96 lg:h-screen lg:max-h-[600px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-blue-900/80 z-10 flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch With Us
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We're here to answer your questions and provide the best service solutions for your needs.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-red-500 rounded-full"></div>
            </motion.div>
          </div>
        </div>
        <img
          src={contactBanner}
          alt="Construction site"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16 -mt-16 lg:-mt-24 relative z-20">
        <motion.div
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-10 text-white">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-8">
                  <motion.img
                    src={uaeFlag}
                    alt="UAE Flag"
                    className="w-16 h-auto mr-4"
                    whileHover={{ rotate: [0, 5, -5, 0] }}
                  />
                  <h2 className="text-2xl font-bold">
                    Sevenscape General Contracting and Facility Management Services L.L.C
                  </h2>
                </div>
                <p className="text-blue-100 mb-10 text-lg">
                  Your trusted partner for comprehensive facility management and contracting solutions in the UAE.
                </p>
              </motion.div>

              <div className="space-y-8">
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-blue-700/30 p-3 rounded-xl mr-4">
                    <FiMapPin className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Our Location</h3>
                    <p className="text-blue-100">
                      Al Hail Business Centre, Block 1, Unit 8, Office 12
                    </p>
                    <p className="text-blue-100">Mussafah 4, Abu Dhabi</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-blue-700/30 p-3 rounded-xl mr-4">
                    <FiPhone className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Contact Numbers</h3>
                    <p className="text-blue-100">02-6211282</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-blue-700/30 p-3 rounded-xl mr-4">
                    <FiMail className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Email Address</h3>
                    <a
                      href="mailto:info@sevenscape.ae"
                      className="text-blue-300 hover:text-white transition-colors"
                    >
                      info@sevenscape.ae
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </motion.div>

              <motion.form
                className="space-y-6"
                onSubmit={handleSubmit}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div className="grid grid-cols-12 gap-4" variants={itemVariants}>
                  <div className="col-span-4">
                    <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Country Code
                    </label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.phone.countryCode}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="+971">+971 (UAE)</option>
                      <option value="+966">+966 (KSA)</option>
                      <option value="+973">+973 (Bahrain)</option>
                      <option value="+974">+974 (Qatar)</option>
                      <option value="+968">+968 (Oman)</option>
                      <option value="+965">+965 (Kuwait)</option>
                      <option value="+91">+91 (India)</option>
                    </select>
                  </div>
                  <div className="col-span-8">
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.phone.number}
                      onChange={handlePhoneChange}
                      placeholder="50 123 4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      pattern="[0-9]{6,15}"
                      title="Please enter a valid phone number (6-15 digits)"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    maxLength="1000"
                  ></textarea>
                </motion.div>

                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={formData.agree}
                      onChange={(e) =>
                        setFormData({ ...formData, agree: e.target.checked })
                      }
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agree" className="text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        privacy policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        terms of service
                      </a>
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={!formData.agree || isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-3 hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-xl" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Services Highlights */}
        <motion.div 
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {serviceOptions.map((service, index) => (
            <motion.div
              key={service.value}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.label}</h3>
              <p className="text-gray-600">
                Professional {service.label.toLowerCase()} solutions tailored to your specific requirements.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;